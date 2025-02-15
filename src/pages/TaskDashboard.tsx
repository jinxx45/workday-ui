import { useState } from "react";

enum Category {
  Finance = "Finance",
  Operations = "Operations",
  HR = "HR",
  Legal = "Legal",
  SupplyChain = "Supply Chain",
}

interface Task {
  title: string;
  category: Category;
  dueDate: string;
  completed: boolean;
}

export const TaskDashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      title: "Review Report",
      category: Category.Finance,
      dueDate: "2024-02-10",
      completed: false,
    },
    {
      title: "Approve Budget",
      category: Category.Operations,
      dueDate: "2024-02-12",
      completed: false,
    },
    {
      title: "Submit Feedback",
      category: Category.HR,
      dueDate: "2024-02-08",
      completed: false,
    },
    {
      title: "New Policy Review",
      category: Category.Legal,
      dueDate: "2024-02-06",
      completed: false,
    },
    {
      title: "Update Inventory",
      category: Category.SupplyChain,
      dueDate: "2024-02-15",
      completed: false,
    },
  ]);

  const [newTask, setNewTask] = useState({
    title: "",
    category: Category.Finance,
    dueDate: "",
  });

  const toggleCompletion = (index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = () => {
    if (newTask.title.trim() && newTask.dueDate) {
      setTasks([...tasks, { ...newTask, completed: false }]);
      setNewTask({ title: "", category: Category.Finance, dueDate: "" });
    }
  };

  const handleSave = () => {
    console.log("Saved tasks:", tasks);
    alert("Tasks saved successfully!");
  };

  const calculateDaysDifference = (date: string) => {
    const today = new Date();
    const dueDate = new Date(date);
    const differenceInDays = Math.ceil(
      (dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );

    return differenceInDays === 0
      ? "Today"
      : differenceInDays > 0
      ? `${differenceInDays} days remaining`
      : `${Math.abs(differenceInDays)} days ago`;
  };

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">Task Dashboard</h2>
        <div className="text-right">
          <p className="text-sm text-gray-700">Total Tasks: {tasks.length}</p>
          <p className="text-sm text-green-600">
            Completed: {tasks.filter((task) => task.completed).length}
          </p>
        </div>
      </div>

      {/* Add Task Form */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Task Name"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="border rounded-md px-2 py-1"
        />
        <select
          value={newTask.category}
          onChange={(e) =>
            setNewTask({ ...newTask, category: e.target.value as Category })
          }
          className="border rounded-md px-2 py-1"
        >
          {Object.values(Category).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Date Picker */}
        <input
          type="date"
          value={newTask.dueDate}
          onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
          className={`border rounded-md px-2 py-1 ${
            newTask.dueDate ? "bg-teal-400 text-white" : ""
          }`}
        />

        <button
          onClick={addTask}
          className="bg-teal-400 text-white px-3 py-1 rounded-md hover:bg-teal-600 transition"
        >
          Add Task
        </button>
      </div>

      {/* Task Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 text-left">Task Name</th>
              <th className="border p-2 text-left">Category</th>
              <th className="border p-2 text-left">Date Due</th>
              <th className="border p-2 text-center">Completed</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} className="border hover:bg-gray-50">
                <td className="border p-2">{task.title}</td>
                <td className="border p-2">{task.category}</td>
                <td className="border p-2">
                  {calculateDaysDifference(task.dueDate)}
                </td>
                <td className="border p-2 text-center">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleCompletion(index)}
                    className="h-5 w-5"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Save Button */}
      <div className="mt-4 flex justify-end">
        <button
          onClick={handleSave}
          className="bg-teal-400 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition"
        >
          Save
        </button>
      </div>
    </div>
  );
};
