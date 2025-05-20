import { Injectable } from '@nestjs/common';

interface AttemptData {
  count: number;
  lastAttempt: number;
  lockedUntil?: number;
}

@Injectable()
export class AccessAttemptService {
  private attempts = new Map<number, AttemptData>();

  readonly ATTEMPT_LIMIT = 5;
  readonly LOCK_DURATION_MS = 10 * 60 * 1000; // 10 minutos

  registerFailedAccess(userId: number): void {
    const now = Date.now();
    const data = this.attempts.get(userId) || { count: 0, lastAttempt: 0 };

    const newCount = data.count + 1;
    const lockedUntil = newCount >= this.ATTEMPT_LIMIT
      ? now + this.LOCK_DURATION_MS
      : data.lockedUntil;

    this.attempts.set(userId, {
      count: newCount,
      lastAttempt: now,
      lockedUntil,
    });
  }

  isBlocked(userId: number): boolean {
    const data = this.attempts.get(userId);
    if (!data?.lockedUntil) return false;

    const now = Date.now();
    if (now >= data.lockedUntil) {
      this.attempts.delete(userId);
      return false;
    }

    return true;
  }

  resetAttempts(userId: number): void {
    this.attempts.delete(userId);
  }

  getRemainingLockTime(userId: number): number {
  const data = this.attempts.get(userId);
  if (!data?.lockedUntil) return 0;

  const now = Date.now();
  const remaining = data.lockedUntil - now;

  return remaining > 0 ? remaining : 0;
  }

  getAttemptData(userId: number): AttemptData | undefined {
  return this.attempts.get(userId);
  }

}


