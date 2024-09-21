import React, {
  createContext,
  useContext,
  useRef,
  useState,
  ReactNode,
} from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { PiWarningCircle } from "react-icons/pi";

interface ModalContextType {
  open: boolean;
  toggleModal: () => void;
  closeRef: React.RefObject<HTMLDivElement>;
  closeModal: (e: React.MouseEvent) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProps {
  children: ReactNode;
  info: string;
}

const Modal: React.FC<ModalProps> = ({ children, info }) => {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLDivElement>(null);

  const toggleModal = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const closeModal = (e: React.MouseEvent) => {
    if (closeRef.current && !closeRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  const modalValue: ModalContextType = {
    open,
    toggleModal,
    closeRef,
    closeModal,
  };

  return (
    <ModalContext.Provider value={modalValue}>
      <button className="text-sm text-primary-main" onClick={toggleModal}>
        {info}
      </button>
      {open && (
        <ModalContainer>
          <ModalContent>{children}</ModalContent>
        </ModalContainer>
      )}
    </ModalContext.Provider>
  );
};

interface ModalContainerProps {
  children: ReactNode;
}

const ModalContainer: React.FC<ModalContainerProps> = ({ children }) => {
  const modalContext = useContext(ModalContext);
  if (!modalContext) {
    throw new Error("ModalContainer must be used within a ModalProvider");
  }
  const { closeModal } = modalContext;

  return (
    <div
      className="bg-neutral-100/60 fixed inset-0 flex items-center justify-center cursor-pointer shadow-shadow-2 z-50"
      onClick={closeModal}
    >
      {children}
    </div>
  );
};

interface ModalContentProps {
  children: ReactNode;
}

const ModalContent: React.FC<ModalContentProps> = ({ children }) => {
  const modalContext = useContext(ModalContext);
  if (!modalContext) {
    throw new Error("ModalContent must be used within a ModalProvider");
  }
  const { closeRef } = modalContext;

  return (
    <div
      className="mx-auto max-w-fit bg-white cursor-default rounded-[1.25rem] px-14 py-10 flex"
      ref={closeRef}
    >
      <div className="flex flex-col items-center gap-2">{children}</div>
    </div>
  );
};

interface SuccessModalProps {
  info: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ info }) => {
  return (
    <>
      <div className="text-success-border mb-1">
        <IoIosCheckmarkCircleOutline size={60} />
      </div>
      <h4 className="font-semibold">Berhasil!</h4>
      <p className="font-light">{info}</p>
    </>
  );
};

interface WarningModalProps {
  info: string;
}

const WarningModal: React.FC<WarningModalProps> = ({ info }) => {
  const modalContext = useContext(ModalContext);
  if (!modalContext) {
    throw new Error("WarningModal must be used within a ModalProvider");
  }
  const { toggleModal } = modalContext;

  return (
    <>
      <div className="text-danger-border mb-1">
        <PiWarningCircle size={60} />
      </div>
      <h4 className="font-semibold">Hapus {info}?</h4>
      <p className="font-light">Apakah anda yakin ingin menghapus {info}?</p>
      <div className="flex items-center gap-8 text-neutral-10 mt-3">
        <button
          className="bg-danger-main px-4 py-2 rounded-lg text-white"
          onClick={toggleModal}
        >
          Hapus
        </button>
        <button
          className="bg-neutral-50 px-4 py-2 rounded-lg"
          onClick={toggleModal}
        >
          Batal
        </button>
      </div>
    </>
  );
};

export { Modal, SuccessModal, WarningModal, ModalContext };
