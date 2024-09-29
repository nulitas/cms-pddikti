import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { IoIosStats } from "react-icons/io";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { IoMegaphoneOutline } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";
import { LuFileSpreadsheet } from "react-icons/lu";
import { CiLock } from "react-icons/ci";
import { GoGraph } from "react-icons/go";
import { RiUserSettingsLine } from "react-icons/ri";
import SideButton from "./ui/SideButton";
import logo from "../assets/logo_kemdikbud.png";
import Header from "./Header";
const Sidebar: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSetActive = (label: string, route: string) => {
    setActiveButton(label);
    navigate(route);
  };

  return (
    <div className="flex">
      <div className="max-w-80 h-screen p-10  justify-between flex flex-col font-inter ">
        <div className="gap-8 flex flex-col">
          <div className="flex gap-3 ">
            <img
              className="w-[60px] h-[60px]"
              src={logo}
              alt="Kemdikbud logo"
            />
            <h1 className="text-sm">
              Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi
            </h1>
          </div>
          <div className="bg-neutral-50 h-[1px] w-full" />
          <div id="SideButton" className="flex flex-col gap-3">
            <SideButton
              icon={RxDashboard}
              label="Dashboard"
              isActive={activeButton === "Dashboard"}
              onClick={() => handleSetActive("Dashboard", "/")}
            />
            {/* Manajemen Kegiatan */}
            <SideButton
              icon={IoIosStats}
              label="Manajemen Kegiatan"
              isActive={activeButton === "Manajemen Kegiatan"}
              onClick={() =>
                handleSetActive("Manajemen Kegiatan", "/manajemen-kegiatan")
              }
            />
            <SideButton
              icon={MdOutlineCollectionsBookmark}
              label={
                <>
                  <span>Manajemen Publikasi Terbaru</span>
                </>
              }
              isActive={activeButton === "Manajemen Publikasi Terbaru"}
              onClick={() =>
                handleSetActive(
                  "Manajemen Publikasi Terbaru",
                  "/manajemen-publikasi-terbaru"
                )
              }
            />
            <SideButton
              icon={IoMegaphoneOutline}
              label="Manajemen Pengumuman"
              isActive={activeButton === "Manajemen Pengumuman"}
              onClick={() =>
                handleSetActive("Manajemen Pengumuman", "/manajemen-pengumuman")
              }
            />
            <SideButton
              icon={CiViewList}
              label={
                <>
                  <span>Manajemen Profile PDDikti</span>
                </>
              }
              isActive={activeButton === "Manajemen Profile PDDikti"}
              onClick={() =>
                handleSetActive(
                  "Manajemen Profile PDDikti",
                  "/manajemen-profil"
                )
              }
            />
            <SideButton
              icon={LuFileSpreadsheet}
              label={
                <>
                  <span>Manajemen Standar Pelayanan</span>
                </>
              }
              isActive={activeButton === "Manajemen Standar Pelayanan"}
              onClick={() =>
                handleSetActive(
                  "Manajemen Standar Pelayanan",
                  "/manajemen-standar-pelayanan"
                )
              }
            />
            <SideButton
              icon={CiLock}
              label={
                <>
                  <span>Manajemen Kebijakan Privasi</span>
                </>
              }
              isActive={activeButton === "Manajemen Kebijakan Privasi"}
              onClick={() =>
                handleSetActive(
                  "Manajemen Kebijakan Privasi",
                  "/manajemen-kebijakan-privasi"
                )
              }
            />
            <SideButton
              icon={GoGraph}
              label="Manajemen Statistik"
              isActive={activeButton === "Manajemen Statistik"}
              onClick={() =>
                handleSetActive("Manajemen Statistik", "/manajemen-statistik")
              }
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-neutral-50 h-[1px] w-full" />
          <SideButton
            icon={RiUserSettingsLine}
            label="Kelola Admin"
            isActive={activeButton === "Kelola Admin"}
            onClick={() => handleSetActive("Kelola Admin", "/kelola-admin")}
          />
        </div>
      </div>

      <div className="flex-grow p-4">
        <Header />
        <div className="bg-primary-surface p-5 min-h-[100vh]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
