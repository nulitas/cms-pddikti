import { Modal, SuccessModal, WarningModal } from "../components/ui/Modal";
const Dashboard: React.FC = () => {
  return (
    <div className="m-10">
      <h1 className="flex text-3xl font-bold text-primary-main font-inter">
        Dashboard
      </h1>
      <Modal info="Show Modal">
        <SuccessModal info="Data berhasil disimpan!" />
      </Modal>
      <Modal info="Delete Modal">
        <WarningModal info="data ini" />
      </Modal>
    </div>
  );
};

export default Dashboard;
