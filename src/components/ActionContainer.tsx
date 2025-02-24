import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ActionItem from "./Action";
import { API_BASE_URL } from "../env";

interface Action {
  title: string;
  category: string;
  daysAgo: number;
}

const ActionContainer = () => {
  const [actions, setActions] = useState<Action[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchActions = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/actions`);
        if (!response.ok) {
          throw new Error("Failed to fetch actions");
        }
        const data = await response.json();
        setActions(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchActions();
  }, []);

  // Show only the first 3 actions
  const visibleActions = actions.slice(0, 3);

  return (
    <div className="w-full h-full container bg-white p-6 rounded-lg shadow">
      {/* Title with Action Count */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Awaiting your action</h1>
        <span className="text-sm text-gray-500">
          Total: {actions.length} tasks
        </span>
      </div>

      {/* Loading and Error Handling */}
      {loading ? (
        <p className="text-gray-500">Loading actions...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          {/* Actions List */}
          <ul className="space-y-3">
            {visibleActions.map((action, index) => (
              <ActionItem
                key={index}
                title={action.title}
                category={action.category}
                daysAgo={action.daysAgo}
              />
            ))}
          </ul>

          {/* View All Button - Navigates to Tasks page */}
          {actions.length > 3 && (
            <button
              onClick={() => navigate("/tasks")}
              className="mt-4 px-4 py-2 bg-teal-400 text-white rounded-lg hover:bg-teal-600 transition"
            >
              View all Tasks
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default ActionContainer;
