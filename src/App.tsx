import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import ManajemenKegiatan from "./pages/ManajemenKegiatan";
import ManajemenPublikasiTerbaru from "./pages/ManajemenPublikasiTerbaru";
import ManajemenPengumuman from "./pages/ManajemenPengumuman";
const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route index element={<Dashboard />} />
            <Route path="manajemen-kegiatan" element={<ManajemenKegiatan />} />
            <Route
              path="manajemen-publikasi-terbaru"
              element={<ManajemenPublikasiTerbaru />}
            />
            <Route
              path="manajemen-pengumuman"
              element={<ManajemenPengumuman />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
