import Table from "../components/Table";
import Button from "../components/ui/Button";
import DateCard from "../components/ui/DateCard";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

const ManajemenKegiatan: React.FC = () => {
  const [startDate] = useState(new Date("2024-05-01"));
  const [endDate] = useState(new Date("2024-05-31"));

  const tableData = [
    {
      title: "Event 1",
      date: "20 September 2024",
      description: "This is event 1",
      image: "image1.jpg",
      location: "Jakarta",
    },
    {
      title: "Event 2",
      date: "21 September 2024",
      description: "This is event 2",
      image: "image2.jpg",
      location: "Bandung",
    },
  ];

  const columns = [
    { label: "Judul Kegiatan", key: "title", sortable: true },
    { label: "Tanggal Kegiatan", key: "date", sortable: true },
    { label: "Deskripsi Kegiatan", key: "description", sortable: false },
    { label: "Gambar Kegiatan", key: "image", sortable: false },
    { label: "Lokasi Kegiatan", key: "location", sortable: true },
  ];

  return (
    <div className="m-10">
      <h1 className="flex text-3xl font-bold text-primary-main font-poppins">
        Manajemen Kegiatan
      </h1>

      <div className="flex justify-between items-center">
        <div className="my-10">
          <Button
            text="Tambah"
            color="primary"
            icon={<FaPlus />}
            fontWeight="semibold"
          />
        </div>

        <DateCard startDate={startDate} endDate={endDate} />
      </div>

      <Table data={tableData} columns={columns} />
    </div>
  );
};

export default ManajemenKegiatan;
