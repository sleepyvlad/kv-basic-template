import React from "react";

interface ButtonProps {
  className?: string;
  children: string | React.ReactNode;
  onClick: (ev: React.SyntheticEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
  value?: string;
}

const Button = (props: ButtonProps): React.ReactElement => {
  const {
    className,
    children,
    onClick,
    disabled,
    type = "button",
    value,
  } = props;

  const handleClick = (ev: React.SyntheticEvent<HTMLButtonElement>): void => {
    if (onClick) {
      onClick(ev);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={className}
      disabled={disabled}
      value={value}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
