import { ReactNode } from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

type ButtonProps = {
  className?: string;
  href?: string;
  onClick?: () => {};
  children?: ReactNode;
  px?: number;
  white?: boolean;
};

function Button({
  className,
  href,
  onClick,
  children,
  px,
  white,
}: ButtonProps) {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const spanClasses = `relative z-10`;

  const renderButton = () => (
    <button className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white || false)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white || false)}
    </a>
  );

  return href ? renderLink() : renderButton();
}

export default Button;
