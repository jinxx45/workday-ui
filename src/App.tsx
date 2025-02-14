import "./App.css";
import TopNavigationBar from "./layouts/TopNavigationBar/TopNavigationBar";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <TopNavigationBar logoSrc="./workdaylogo.png" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/profile" element={<ProfilePage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
