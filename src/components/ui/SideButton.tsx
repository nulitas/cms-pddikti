interface SideButtonProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string | React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const SideButton: React.FC<SideButtonProps> = ({
  icon: Icon,
  label,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`text-base rounded-lg flex gap-3 items-center py-3 px-2 cursor-pointer
      ${isActive ? "bg-primary-main text-neutral-10" : "text-neutral-80"}
      hover:bg-primary-main hover:text-neutral-10 transition-colors duration-300`}
    >
      <div className="flex gap-3 items-center">
        <Icon
          className={`w-6 h-6 ${
            isActive ? "text-neutral-10" : "text-neutral-80"
          }
          hover:text-neutral-10 transition-colors duration-300`}
        />
        <p>{label}</p>
      </div>
    </div>
  );
};

export default SideButton;
