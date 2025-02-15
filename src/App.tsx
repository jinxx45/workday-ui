import "./App.css";
import TopNavigationBar from "./layouts/TopNavigationBar";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PayslipsPage from "./pages/PayslipsPage";
import { TaskDashboard } from "./pages/TaskDashboard";

function App() {
  return (
    <>
      <Router>
        <TopNavigationBar logoSrc="./workdaylogo.png" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/payslips" element={<PayslipsPage />} />
          <Route path="/tasks" element={<TaskDashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
