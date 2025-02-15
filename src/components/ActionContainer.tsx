import ActionItem from "./Action";

interface Action {
  title: string;
  category: string;
  daysAgo: number;
}

const actions: Action[] = [
  { title: "Review Report", category: "Finance", daysAgo: 2 },
  { title: "Approve Budget", category: "Operations", daysAgo: 5 },
  { title: "Submit Feedback", category: "HR", daysAgo: 1 },
  { title: "New Policy Review", category: "Legal", daysAgo: 3 },
  { title: "Update Inventory", category: "Supply Chain", daysAgo: 6 },
];

const ActionContainer = () => {
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
        <button className="mt-4 px-4 py-2 bg-teal-400 text-white rounded-lg hover:bg-teal-600 transition">
          View all Tasks
        </button>
      )}
    </div>
  );
};

export default ActionContainer;
