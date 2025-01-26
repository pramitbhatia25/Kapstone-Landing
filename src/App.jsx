import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "./app.css";
import LandingPage2 from "./pages/LandingPage2";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/projects" element={<LandingPage2 isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>}></Route>
        <Route path="/" element={<LandingPage isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
