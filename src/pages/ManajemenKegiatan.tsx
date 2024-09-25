import Table from "../components/Table";
import Button from "../components/ui/Button";
import DateCard from "../components/ui/DateCard";
import { FaPlus } from "react-icons/fa";
const ManajemenKegiatan: React.FC = () => {
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

        <DateCard />
      </div>

      <Table />
    </div>
  );
};

export default ManajemenKegiatan;
