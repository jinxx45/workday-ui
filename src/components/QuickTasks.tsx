import { useNavigate } from "react-router-dom";

const QuickTasks = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="quick-task-container bg-white flex flex-col shadow rounded-lg p-3 my-10 ">
        <h1 className="font-semibold text-lg px-2">Quick Tasks</h1>
        <button
          onClick={() => navigate("/payslips")}
          className="rounded-lg gap-10 bg-gray-50 py-10 m-3 hover:bg-gray-200 transition font-medium"
        >
          My Payslips
        </button>
        <button className="rounded-lg gap-10 bg-gray-50 py-10 m-3 hover:bg-gray-200 transition font-medium">
          Bulk Download
        </button>
      </div>
    </>
  );
};

export default QuickTasks;
