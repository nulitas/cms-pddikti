import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import ManajemenKegiatan from "./pages/ManajemenKegiatan";
import ManajemenPublikasiTerbaru from "./pages/ManajemenPublikasiTerbaru";
import ManajemenPengumuman from "./pages/ManajemenPengumuman";
import ManajemenProfil from "./pages/ManajemenProfil";
import ManajemenStandarPelayanan from "./pages/ManajemenStandarPelayanan";
import ManajemenKebijakanPrivasi from "./pages/ManajemenKebijakanPrivasi";
import ManajemenStatistik from "./pages/ManajemenStatistik";
import KelolaAdmin from "./pages/KelolaAdmin";
import Notifikasi from "./pages/Notifikasi";
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
            <Route path="manajemen-profil" element={<ManajemenProfil />} />
            <Route
              path="manajemen-standar-pelayanan"
              element={<ManajemenStandarPelayanan />}
            />
            <Route
              path="manajemen-kebijakan-privasi"
              element={<ManajemenKebijakanPrivasi />}
            />
            <Route
              path="manajemen-statistik"
              element={<ManajemenStatistik />}
            />
            <Route path="kelola-admin" element={<KelolaAdmin />} />
            <Route path="notifikasi" element={<Notifikasi />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
