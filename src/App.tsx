import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import ManajemenKegiatan from "./pages/ManajemenKegiatan";
const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route index element={<Dashboard />} />
            <Route path="manajemen-kegiatan" element={<ManajemenKegiatan />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
