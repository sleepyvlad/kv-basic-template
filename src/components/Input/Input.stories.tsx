import React, { useState } from "react";
import Input from "./Input";

export default { title: "Input" };

export const common = (): React.ReactElement => {
  const [inputValue, setInputValue] = useState("");
  const onChangeHandler = (value: string | number): void => {
    setInputValue(String(value));
  };
  return (
    <Input type="text" onChange={onChangeHandler} inputValue={inputValue} />
  );
};
export const withPlaceHolder = (): React.ReactElement => {
  const [inputValue, setInputValue] = useState("");
  const onChangeHandler = (value: string | number): void => {
    setInputValue(String(value));
  };

  return (
    <Input
      type="text"
      placeholder="some placeholder"
      inputValue={inputValue}
      onChange={onChangeHandler}
    />
  );
};
