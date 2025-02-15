import { useEffect, useState } from "react";

interface DialogBoxProps {
  isOpen: boolean;
  onClose: () => void;
}

const DialogBox: React.FC<DialogBoxProps> = ({ isOpen, onClose }) => {
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");
  const [selectedDocs, setSelectedDocs] = useState({
    form16: false,
    taxDocument: false,
    offerLetter: false,
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[600px]">
        <h2 className="text-2xl font-semibold">Bulk Payslip Download</h2>

        {/* Date Range Selection */}
        <div className="flex gap-4 mt-4">
          {/* Start Date */}
          <div className="flex flex-col">
            <label className="text-sm font-medium">Start Month & Year</label>
            <div className="flex gap-2">
              <select
                className="border p-2 rounded-md"
                value={startMonth}
                onChange={(e) => setStartMonth(e.target.value)}
              >
                <option value="">Month</option>
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                className="border p-2 rounded-md"
                value={startYear}
                onChange={(e) => setStartYear(e.target.value)}
              >
                <option value="">Year</option>
                {Array.from({ length: 10 }, (_, i) => {
                  const year = new Date().getFullYear() - i;
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          {/* End Date */}
          <div className="flex flex-col">
            <label className="text-sm font-medium">End Month & Year</label>
            <div className="flex gap-2">
              <select
                className="border p-2 rounded-md"
                value={endMonth}
                onChange={(e) => setEndMonth(e.target.value)}
              >
                <option value="">Month</option>
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                className="border p-2 rounded-md"
                value={endYear}
                onChange={(e) => setEndYear(e.target.value)}
              >
                <option value="">Year</option>
                {Array.from({ length: 10 }, (_, i) => {
                  const year = new Date().getFullYear() - i;
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>

        {/* Document Selection */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Select Documents:</h3>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedDocs.form16}
                onChange={() =>
                  setSelectedDocs({
                    ...selectedDocs,
                    form16: !selectedDocs.form16,
                  })
                }
              />
              Form 16
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedDocs.taxDocument}
                onChange={() =>
                  setSelectedDocs({
                    ...selectedDocs,
                    taxDocument: !selectedDocs.taxDocument,
                  })
                }
              />
              Tax Document
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedDocs.offerLetter}
                onChange={() =>
                  setSelectedDocs({
                    ...selectedDocs,
                    offerLetter: !selectedDocs.offerLetter,
                  })
                }
              />
              Offer Letter
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
