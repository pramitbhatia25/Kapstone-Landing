import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "./app.css";
import AllProjects from "./pages/AllProjects";
import { useState } from "react";
import ProjectDetails from "./pages/ProjectDetails";
import Error from "./pages/Error";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
        <Route path="/projects" element={<AllProjects isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>}></Route>
        <Route path="/" element={<LandingPage isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />}></Route>
        <Route path="*" element={<Error isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
