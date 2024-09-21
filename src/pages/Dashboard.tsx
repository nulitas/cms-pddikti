import { Modal, SuccessModal, WarningModal } from "../components/ui/Modal";
const Dashboard: React.FC = () => {
  return (
    <>
      <h1 className="flex  text-2xl font-semibold">Dashboard</h1>
      <Modal info="Show Modal">
        <SuccessModal info="Data berhasil disimpan!" />
      </Modal>
      <Modal info="Delete Modal">
        <WarningModal info="data ini" />
      </Modal>
    </>
  );
};

export default Dashboard;
