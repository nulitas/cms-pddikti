import { ReactNode } from "react";
interface ButtonProps {
  text: string;
  color: string;
  onClick?: () => void;
  size?: string;
  icon?: ReactNode;
  fontWeight?: string;
  variant?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  color,
  onClick,
  size,
  icon,
  fontWeight,
  variant,
  disabled,
}) => {
  const baseStyle =
    "py-2 px-4 rounded-lg flex items-center justify-center focus:outline-none focus:ring";

  const colorStyle =
    color === "primary"
      ? "bg-primary-main hover:bg-primary-hover text-white"
      : color === "secondary"
        ? "bg-secondary-main hover:bg-secondary-main text-white"
        : color === "danger"
          ? "bg-danger-main hover:bg-danger-hover text-white"
          : "bg-primary-main hover:bg-primary-hover text-white";

  const outlineColorStyle =
    color === "primary"
      ? "border border-primary-main text-primary-main hover:bg-primary-hover hover:text-white"
      : color === "secondary"
        ? "border border-secondary-main text-secondary-main hover:bg-secondary-hover hover:text-white"
        : color === "danger"
          ? "border border-danger-main text-danger-main hover:bg-danger-main hover:text-white"
          : "border border-primary-main text-primary-main hover:bg-primary-hover hover:text-white";

  const disabledStyle = "rounded bg-neutral-50 text-white cursor-not-allowed";

  const sizeStyle =
    size === "small"
      ? "py-1 px-2"
      : size === "large"
        ? "py-3 px-6"
        : "py-2 px-4";

  const fontWeightStyle =
    fontWeight === "regular"
      ? "font-normal"
      : fontWeight === "medium"
        ? "font-medium"
        : fontWeight === "semibold"
          ? "font-semibold"
          : fontWeight === "bold"
            ? "font-bold"
            : "font-normal";

  const variantStyle = variant === "outline" ? outlineColorStyle : colorStyle;

  const finalStyle = disabled
    ? `${disabledStyle} ${sizeStyle} ${fontWeightStyle}`
    : `${baseStyle} ${variantStyle} ${sizeStyle} ${fontWeightStyle}`;

  return (
    <button
      className={finalStyle}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
