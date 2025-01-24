import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "./app.css";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
