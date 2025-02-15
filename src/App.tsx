import "./App.css";
import TopNavigationBar from "./layouts/TopNavigationBar";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PayslipsPage from "./pages/PayslipsPage";

function App() {
  return (
    <>
      <Router>
        <TopNavigationBar logoSrc="./workdaylogo.png" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/payslips" element={<PayslipsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
