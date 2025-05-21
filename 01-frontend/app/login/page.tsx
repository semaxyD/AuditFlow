import { LoginForm } from "../../components/auth/login-form";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center space-y-6">
        <h1 className="text-7xl font-extrabold tracking-tight text-[#1a867e]">
          AuditFlow
        </h1>
        <LoginForm />
      </div>
    </main>
  );
}
