import { useState } from "react";
import { FaRegEdit, FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import SortIcon from "./ui/SortIcon";
import Button from "./ui/Button";

const initialData = [
  {
    title: "Event 1",
    date: "20 September 2024",
    description: "This is event 1",
    image: "image1.jpg",
  },
  {
    title: "Event 2",
    date: "21 September 2024",
    description: "This is event 2",
    image: "image2.jpg",
  },
];

const Table: React.FC = () => {
  const [data, setData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  } | null>(null);

  const handleSort = (key: string) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key as keyof typeof a] < b[key as keyof typeof b]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (a[key as keyof typeof a] > b[key as keyof typeof b]) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });

    setData(sortedData);
    setSortConfig({ key, direction });
  };

  return (
    <div className="m-10">
      <h1 className="flex text-3xl font-bold text-primary-main font-inter">
        Manajemen Kegiatan
      </h1>
      <div className="my-5">
        <Button
          text="Tambah"
          color="primary"
          icon={<FaPlus />}
          fontWeight="semibold"
        />
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-gray-200 bg-white text-sm">
          <thead className="h-12">
            <tr className="bg-table-header text-black">
              <th className="px-2 py-2 text-center font-semibold text-black rounded-tl-lg border-r-2 border-white">
                No
              </th>
              <th className="px-4 py-2 text-left font-semibold text-black border-r-2 border-white">
                <div
                  className="flex justify-between items-center hover:cursor-pointer"
                  onClick={() => handleSort("title")}
                >
                  <span>Judul</span>
                  <SortIcon
                    className={`ml-2 transition-transform duration-300 ${
                      sortConfig?.key === "title" &&
                      sortConfig.direction === "descending"
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </div>
              </th>

              <th className="px-4 py-2 text-left font-semibold text-black border-r-2 border-white">
                <div
                  className="flex justify-between items-center hover:cursor-pointer"
                  onClick={() => handleSort("date")}
                >
                  <span>Tanggal Kegiatan</span>
                  <SortIcon
                    className={`ml-2 transition-transform duration-300 ${
                      sortConfig?.key === "date" &&
                      sortConfig.direction === "descending"
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </div>
              </th>

              <th className="px-4 py-2 text-left font-semibold text-black border-r-2 border-white">
                Deskripsi Kegiatan
              </th>
              <th className="px-4 py-2 text-left font-semibold text-black border-r-2 border-white">
                Gambar Kegiatan
              </th>
              <th className="px-4 py-2 text-left font-semibold text-black rounded-tr-lg border-r-2 border-white">
                Aksi
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {data.map((event, index) => (
              <tr key={index}>
                <td className="text-center px-4 py-2 text-gray-900">
                  {index + 1}
                </td>
                <td className="px-4 py-2 text-gray-700">{event.title}</td>
                <td className="px-4 py-2 text-gray-700">{event.date}</td>
                <td className="px-4 py-2 text-gray-700">{event.description}</td>
                <td className="px-4 py-2 text-gray-700">{event.image}</td>
                <td className="px-4 py-2 text-gray-700 flex text-xl">
                  <button>
                    <FaRegEdit />
                  </button>
                  <button>
                    <RiDeleteBin6Line />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
