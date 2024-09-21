import React, { useEffect, useRef, useState } from "react";
import { PiUserCircleThin } from "react-icons/pi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { LiaUserCogSolid } from "react-icons/lia";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Profile: React.FC = () => {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (!modalRef.current?.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex items-center gap-3">
      <div onClick={handleOpen} className="cursor-pointer">
        <PiUserCircleThin size={54} />
      </div>
      {open && <ProfileModal modalRef={modalRef} />}
      <div>
        <h3 className="font-semibold">Super 123</h3>
        <p>Admin Super</p>
      </div>
    </div>
  );
};

interface ProfileModalProps {
  modalRef: React.RefObject<HTMLDivElement>;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ modalRef }) => {
  return (
    <div
      className="absolute right-24 top-28 mt-2 rounded-lg px-4 py-3 shadow-shadow-2"
      ref={modalRef}
    >
      <div className="flex items-center bg-neutral-30 rounded-lg text-neutral-100 p-3 gap-3">
        <PiUserCircleThin size={54} />
        <div>
          <h3 className="font-semibold">Super123</h3>
          <p>superadmin@gmail.com</p>
          <p className="inline-flex items-center text-success-main gap-1">
            <IoIosCheckmarkCircleOutline />
            <span>Sinkronisasi aktif</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 py-3 px-2">
        <div className="flex items-center gap-1">
          <LiaUserCogSolid size={16} />
          <p>Kelola Admin Super</p>
        </div>
        <div className="flex items-center gap-1">
          <RiLogoutCircleRLine size={16} />
          <p>Keluar</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
