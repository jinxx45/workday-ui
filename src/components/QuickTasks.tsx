import { useNavigate } from "react-router-dom";
import BulkDownloadDialogBox from "./BulkDownloadDialog";
import { useState } from "react";

const QuickTasks = () => {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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
        <button
          onClick={() => setIsDialogOpen(true)}
          className="rounded-lg gap-10 bg-gray-50 py-10 m-3 hover:bg-gray-200 transition font-medium"
        >
          Bulk Download
        </button>
      </div>
      {/* Dialog Box */}
      <BulkDownloadDialogBox
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
};

export default QuickTasks;
