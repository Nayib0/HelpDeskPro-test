import RoleProtected from "@/components/ProtectedRoute";
import TopBar from "@/components/ui/NavBar";

export default function ClientDashboard() {
  return (
    <RoleProtected role="client">
      <TopBar />

      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">
          ¡Hola cliente! 👋
        </h1>

        <p className="text-gray-700 mb-6">
          Aquí podrás crear tickets, ver su estado y responder a los agentes.
        </p>

        <div className="flex flex-col gap-4 mt-8">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Crear ticket
          </button>

          <button className="bg-gray-200 px-4 py-2 rounded">
            Ver mis tickets
          </button>
        </div>
      </div>
    </RoleProtected>
  );
}
