import Button from "../components/ui/Button";
import { FaPlus } from "react-icons/fa";
import DateCard from "../components/ui/DateCard";
import { useState } from "react";
import Table from "../components/Table";

const ManajemenPublikasiTerbaru: React.FC = () => {
  const [startDate] = useState(new Date("2020-05-01"));
  const [endDate] = useState(new Date("2020-05-31"));

  const tableData = [
    {
      title: "Statistik Pendidikan Tinggi Tahun 2020",
      date: "30 Juli 2020",
      image: "image1.jpg",
      link: "https://linkdaripublikasinya",
    },
    {
      title: "1 Statistik Pendidikan Tinggi Tahun 2020",
      date: "1 Juli 2020",
      image: "image2.jpg",
      link: "https://linkdaripublikasinya",
    },
  ];

  const columns = [
    { label: "Nama Publikasi", key: "title", sortable: true },
    { label: "Tanggal Kegiatan", key: "date", sortable: true },
    { label: "Thumbnail Publikasi", key: "image", sortable: false },
    { label: "Link Unduh", key: "link", sortable: false },
  ];

  return (
    <div className="m-10">
      <h1 className="flex text-3xl font-bold text-primary-main font-poppins">
        Manajemen Publikasi Terbaru
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

export default ManajemenPublikasiTerbaru;
