import Button from "../components/ui/Button";
import { FaPlus } from "react-icons/fa";
import DateCard from "../components/ui/DateCard";
import { useState } from "react";
import Table from "../components/Table";

const ManajemenStandarPelayanan: React.FC = () => {
  const [startDate] = useState(new Date("2020-05-01"));
  const [endDate] = useState(new Date("2020-05-31"));

  const tableData = [
    {
      title: "Statistik Pendidikan Tinggi Indonesia Tahun 2024",
      date: "30 Juli 2020",
      image: "product-manager.png",
    },
  ];

  const columns = [
    { label: "Judul Standar Pelayanan", key: "title", sortable: true },
    { label: "Tanggal Upload", key: "date", sortable: true },
    { label: "Poster Standar Pelayanan", key: "image", sortable: false },
  ];

  return (
    <div className="m-10">
      <h1 className="flex text-3xl font-bold text-primary-main font-poppins">
        Manajemen Standar Pelayanan
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

export default ManajemenStandarPelayanan;
