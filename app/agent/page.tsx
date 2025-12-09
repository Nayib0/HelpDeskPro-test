import RoleProtected from "@/components/ProtectedRoute";
import TopBar from "@/components/ui/NavBar";

export default function AgentDashboard() {
  return (
    <RoleProtected role="agent">
      <TopBar />

      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">
          Panel del Agente 🛠️
        </h1>

        <p className="text-gray-700 mb-6">
          Aquí verás todos los tickets, podrás filtrarlos, actualizarlos
          y responder a los clientes.
        </p>

        <div className="flex flex-col gap-4 mt-8">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Ver todos los tickets
          </button>

          <button className="bg-gray-200 px-4 py-2 rounded">
            Tickets sin asignar
          </button>

          <button className="bg-gray-200 px-4 py-2 rounded">
            Tickets pendientes
          </button>
        </div>
      </div>
    </RoleProtected>
  );
}
