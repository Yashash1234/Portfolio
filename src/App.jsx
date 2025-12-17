import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/portfolio/Portfolio";
import Project from "./pages/projects/SocialExpress";

function App() {
  return (
    <Routes>
      {/* Home / Portfolio */}
      <Route path="/" element={<Portfolio />} />

      {/* Project details page */}
      <Route path="/projects/:id" element={<Project />} />
    </Routes>
  );
}

export default App;
