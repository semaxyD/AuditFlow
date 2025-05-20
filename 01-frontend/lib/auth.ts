import { DefaultSession } from 'next-auth';
import { UserRole } from './types';

declare module "next-auth" {
  interface User {
    accessToken?: string;
    id: string;
    role: string;
    name?: string;
  }
  interface Session {
    user: {
      accessToken?: string;
      id?: number;
      role?: string;
      name?: string;
      email?: string | null;
      image?: string | null;
    };
  }
}