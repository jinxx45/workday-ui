import { Download, Filter } from "lucide-react";
import { jsPDF } from "jspdf";

const payslips = [
  { id: 1, date: "2023-12-31", amount: "$3,500.00", status: "Paid" },
  { id: 2, date: "2023-11-30", amount: "$3,500.00", status: "Paid" },
  { id: 3, date: "2023-10-31", amount: "$3,500.00", status: "Paid" },
  { id: 4, date: "2023-09-30", amount: "$3,500.00", status: "Paid" },
  { id: 5, date: "2023-08-31", amount: "$3,500.00", status: "Paid" },
];

const generatePDF = (payslip: {
  date: string;
  amount: string;
  status: string;
}) => {
  const doc = new jsPDF();

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("Payslip", 90, 15);

  // Company Details
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text("Company Name: XYZ Corporation", 10, 30);
  doc.text("Employee Name: John Doe", 10, 40);
  doc.text("Payslip Date: " + payslip.date, 10, 50);

  //Line separator
  doc.line(10, 55, 200, 55);

  //Payslip Details Table
  doc.setFont("helvetica", "bold");
  doc.text("Salary Details", 10, 65);
  doc.setFont("helvetica", "normal");

  doc.text("Basic Salary: " + payslip.amount, 10, 75);
  doc.text("Deductions: $0.00", 10, 85);
  doc.text("Net Pay: " + payslip.amount, 10, 95);
  doc.text("Status: " + payslip.status, 10, 105);

  // Draw Footer
  doc.line(10, 110, 200, 110);
  doc.text("Authorized Signature", 140, 130);
  doc.line(140, 132, 180, 132);

  // Save the PDF
  doc.save(`Payslip_${payslip.date}.pdf`);
};

const PayslipsPage = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="bg-white shadow-md rounded-lg p-6 h-full w-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">My Payslips</h2>
          <div className="flex space-x-2">
            <button className="border px-4 py-2 rounded text-sm flex items-center">
              <Filter className="mr-2 h-4 w-4" /> Filter
            </button>
          </div>
        </div>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-teal-200">
              <th className="border p-2">Date</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Status</th>
              <th className="border p-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {payslips.map((payslip) => (
              <tr key={payslip.id} className="border">
                <td className="border p-2">{payslip.date}</td>
                <td className="border p-2">{payslip.amount}</td>
                <td className="border p-2">{payslip.status}</td>
                <td className="border p-2 text-right">
                  <button
                    onClick={() => generatePDF(payslip)}
                    className="text-blue-500 flex items-center"
                  >
                    <Download className="mr-2 h-4 w-4" /> Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PayslipsPage;
