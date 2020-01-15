import React from "react";
import Button from "./Button";

export default { title: "Button" };

export const common = (): React.ReactElement => {
  const onClick = (): void => undefined;
  return <Button onClick={onClick}>button</Button>;
};

export const withPicture = (): React.ReactElement => {
  const onClick = (): void => undefined;
  return (
    <Button onClick={onClick}>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/6186VfIYnPL.png"
        alt="button"
      />
    </Button>
  );
};
