import { RegisterForm } from '@/components/auth/register-form';

export default function CreateUserPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Crear Usuario</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <RegisterForm />
      </div>
    </div>
  );
} 