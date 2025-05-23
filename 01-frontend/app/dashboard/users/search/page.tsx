import { columns } from "./components/ComplaintsTable/columns";
import { USERS_MOCK } from "./components/ComplaintsTable/mock/users";
import UsersTable from "./components/ComplaintsTable/UsersTable";

export default function SearchUsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Buscar Usuarios</h1>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <UsersTable columns={columns} data={USERS_MOCK} users={USERS_MOCK} />
      </div>
    </div>
  );
}
