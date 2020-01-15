import React from "react";

interface TextProps {
  children: string | React.ReactNode;
  as?: "p" | "span";
  className?: string;
}

const Text = (props: TextProps): React.ReactElement => {
  const { children, as = "p", className } = props;

  return as === "p" ? (
    <p className={className}>{children}</p>
  ) : (
    <span className={className}>{children}</span>
  );
};

export default Text;
