import React from "react";

interface InputProps {
  className?: string;
  type: string;
  placeholder?: string;
  inputValue?: string;
  onChange?: (value: string | number) => void;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  tabIndex?: number;
  disabled?: boolean;
}

const Input = (props: InputProps): React.ReactElement => {
  const {
    className,
    type,
    placeholder,
    inputValue,
    onChange,
    maxLength,
    minLength,
    pattern,
    disabled,
    tabIndex,
  } = props;
  const handleChange = (ev: React.SyntheticEvent<HTMLInputElement>): void => {
    const {
      currentTarget: { value },
    } = ev;
    onChange(String(value));
  };

  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      value={inputValue}
      maxLength={maxLength}
      minLength={minLength}
      pattern={pattern}
      disabled={disabled}
      tabIndex={tabIndex}
    />
  );
};

export default Input;
