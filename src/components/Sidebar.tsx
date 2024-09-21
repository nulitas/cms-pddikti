import { useState } from "react";
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

const Sidebar: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleSetActive = (label: string) => {
    setActiveButton(label);
  };

  return (
    <div className="flex">
      <div className="max-w-80 h-screen p-10 shadow-sm border-r justify-between flex flex-col font-inter ">
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
              onClick={() => handleSetActive("Dashboard")}
            />
            <SideButton
              icon={IoIosStats}
              label="Manajemen Kegiatan"
              isActive={activeButton === "Manajemen Kegiatan"}
              onClick={() => handleSetActive("Manajemen Kegiatan")}
            />
            <SideButton
              icon={MdOutlineCollectionsBookmark}
              label={
                <>
                  <span>Manajemen Publikasi Terbaru</span>
                </>
              }
              isActive={activeButton === "Manajemen Publikasi Terbaru"}
              onClick={() => handleSetActive("Manajemen Publikasi Terbaru")}
            />
            <SideButton
              icon={IoMegaphoneOutline}
              label="Manajemen Pengumuman"
              isActive={activeButton === "Manajemen Pengumuman"}
              onClick={() => handleSetActive("Manajemen Pengumuman")}
            />
            <SideButton
              icon={CiViewList}
              label={
                <>
                  <span>Manajemen Profile PDDikti</span>
                </>
              }
              isActive={activeButton === "Manajemen Profile PDDikti"}
              onClick={() => handleSetActive("Manajemen Profile PDDikti")}
            />
            <SideButton
              icon={LuFileSpreadsheet}
              label={
                <>
                  <span>Manajemen Standar Pelayanan</span>
                </>
              }
              isActive={activeButton === "Manajemen Standar Pelayanan"}
              onClick={() => handleSetActive("Manajemen Standar Pelayanan")}
            />
            <SideButton
              icon={CiLock}
              label={
                <>
                  <span>Manajemen Kebijakan Privasi</span>
                </>
              }
              isActive={activeButton === "Manajemen Kebijakan Privasi"}
              onClick={() => handleSetActive("Manajemen Kebijakan Privasi")}
            />
            <SideButton
              icon={GoGraph}
              label="Manajemen Statistik"
              isActive={activeButton === "Manajemen Statistik"}
              onClick={() => handleSetActive("Manajemen Statistik")}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-neutral-50 h-[1px] w-full" />
          <SideButton
            icon={RiUserSettingsLine}
            label="Kelola Admin"
            isActive={activeButton === "Kelola Admin"}
            onClick={() => handleSetActive("Kelola Admin")}
          />
        </div>
      </div>

      <div className="flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
