import React, { useState } from "react";
import { FaPen, FaPaperPlane, FaTrash } from "react-icons/fa";

const initialNotifications = [
  {
    id: 1,
    type: "edit",
    text: "PDDikti Lorem ipsum, atau ringkasnya lipsum, adalah teks standar",
    date: "21 Juli 2024",
    read: true,
  },
  {
    id: 2,
    type: "send",
    text: "PDDikti Lorem ipsum, atau ringkasnya lipsum, adalah teks standar",
    date: "21 Juli 2024",
    read: false,
  },
  {
    id: 3,
    type: "edit",
    text: "PDDikti Lorem ipsum, atau ringkasnya lipsum, adalah teks standar",
    date: "21 Juli 2024",
    read: true,
  },
  {
    id: 4,
    type: "send",
    text: "PDDikti Lorem ipsum, atau ringkasnya lipsum, adalah teks standar PDDikti Lorem ipsum, atau ringkasnya lipsum......",
    date: "21 Juli 2024",
    read: false,
  },
  {
    id: 5,
    type: "edit",
    text: "PDDikti Lorem ipsum, atau ringkasnya lipsum, adalah teks standar",
    date: "21 Juli 2024",
    read: true,
  },
  {
    id: 6,
    type: "send",
    text: "PDDikti Lorem ipsum, atau ringkasnya lipsum, adalah teks standar",
    date: "21 Juli 2024",
    read: false,
  },
];

const Notifikasi: React.FC = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState<"semua" | "sudah" | "belum">("semua");

  const filteredNotifications = notifications.filter((notification) => {
    if (filter === "semua") return true;
    if (filter === "sudah") return notification.read === true;
    if (filter === "belum") return notification.read === false;
  });

  const markAllAsRead = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  return (
    <div className="m-10">
      <h1 className="text-3xl font-bold text-primary-main font-poppins">
        Notifikasi
      </h1>

      <div className="mt-4">
        <div className="flex justify-between mb-2">
          <div className="flex space-x-4">
            <button
              onClick={() => setFilter("semua")}
              className={`font-semibold border-b-2 ${
                filter === "semua" ? "border-black" : "border-transparent"
              } `}
            >
              Semua
            </button>
            <button
              onClick={() => setFilter("sudah")}
              className={`font-semibold border-b-2 ${
                filter === "sudah" ? "border-black" : "border-transparent"
              } `}
            >
              Sudah Dibaca
            </button>
            <button
              onClick={() => setFilter("belum")}
              className={`font-semibold border-b-2 ${
                filter === "belum" ? "border-black" : "border-transparent"
              } `}
            >
              Belum Dibaca
            </button>
          </div>

          <button
            onClick={markAllAsRead}
            className="font-semibold text-sm text-black"
          >
            Tandai sudah dibaca semua
          </button>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg space-y-4">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className="flex justify-between items-center bg-white shadow-sm p-4 rounded-lg"
              >
                <div className="flex items-center">
                  {notification.type === "edit" ? (
                    <div className="w-10 h-10 flex justify-center items-center rounded-full  bg-[#e8beec]">
                      <FaPen className="text-black" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 flex justify-center items-center rounded-full  bg-[#F3DEB3]">
                      <FaPaperPlane className="text-black" />
                    </div>
                  )}
                  <div className="ml-4">
                    <p className="text-base font-medium">{notification.text}</p>
                    <p className="text-sm text-gray-500">{notification.date}</p>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-700">
                  <FaTrash />
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Tidak ada notifikasi</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifikasi;
