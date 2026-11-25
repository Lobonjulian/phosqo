import style from "./Button.module.css";

type BaseProps = {
  label: string;
  variant?: "primary" | "outline" | "icon";
  type?: "button" | "submit" | "reset";
};

type ButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type LinkProps = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

type Props = ButtonProps | LinkProps;

const VARIANTS = {
  primary: "btn--primary",
  outline: "btn--outline",
  icon: "btn--icon",
} as const;

export function Button({ label, variant = "primary", type = "button", ...props }: Props) {
  const clases = `${style.btn} ${style[VARIANTS[variant]]}`;

  if (props.href !== undefined) {
    const { href, ...linkProps } = props;
    return (
      <a className={clases} href={href} {...linkProps}>
        {label}
      </a>
    );
  }

  return (
    <button className={clases} type={type} {...props}>
      {label}
    </button>
  );
}
