import Button from "../components/ui/Button";
import { FaPlus } from "react-icons/fa";
import DateCard from "../components/ui/DateCard";
import { useState } from "react";
import Table from "../components/Table";

const ManajemenKebijakanPrivasi: React.FC = () => {
  const [startDate] = useState(new Date("2020-05-01"));
  const [endDate] = useState(new Date("2020-05-31"));

  const tableData = [
    {
      title: "Hanya kebijakan privasi daring",
      date: "30 Juli 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut...",
    },
  ];

  const columns = [
    { label: "Judul Kebijakan Privasi", key: "title", sortable: true },
    { label: "Tanggal Upload", key: "date", sortable: true },
    { label: "Deskripsi", key: "description", sortable: false },
  ];

  return (
    <div className="m-10">
      <h1 className="flex text-3xl font-bold text-primary-main font-poppins">
        Manajemen Kebijakan Privasi
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

export default ManajemenKebijakanPrivasi;
