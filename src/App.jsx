import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Reminders from "./pages/Reminders.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Modes from "./pages/Modes.jsx";
import PersonalDevelopment from "./pages/PersonalDevelopment.jsx";
import PerformanceMetrics from "./pages/PerformanceMetrics.jsx";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/modes" element={<Modes />} />
        <Route path="/personal-development" element={<PersonalDevelopment />} />
        <Route path="/performance-metrics" element={<PerformanceMetrics />} />
      </Routes>
    </Router>
  );
}

export default App;
