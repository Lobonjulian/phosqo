import style from "./Button.module.css";

export interface ButtonProps {
  label: string;
  variant?: "primary" | "outline" | "icon";
  type?: "button" | "submit" | "reset";
  href?: string;
  onClick?: () => void;
}

const VARIANTS = {
  primary: "btn--primary",
  outline: "btn--outline",
  icon: "btn--icon",
} as const;

export default function Button({
  label,
  variant = "primary",
  type = "button",
  onClick,
  href,
}: ButtonProps) {
  const clases = `${style.btn} ${style[VARIANTS[variant]]}`;

  if (href) {
    return (
      <a className={clases} href={href}>
        {label}
      </a>
    );
  }
  return (
    <button className={clases} type={type} onClick={onClick}>
      {label}
    </button>
  );
}
