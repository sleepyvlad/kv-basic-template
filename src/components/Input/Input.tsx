import React, { useState } from "react";

interface InputProps {
  className?: string;
  type: string;
  placeholder?: string;
  inputValue?: string;
  onChange?: (value: string | number) => void;
  onFocus?: (ev: React.SyntheticEvent<HTMLInputElement>) => void;
  onBlur?: (ev: React.SyntheticEvent<HTMLInputElement>) => void;
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
    onFocus,
    onBlur,
    maxLength,
    minLength,
    pattern,
    disabled,
    tabIndex,
  } = props;

  const [focused, setFocused] = useState(false);

  const handleChange = (ev: React.SyntheticEvent<HTMLInputElement>): void => {
    const {
      currentTarget: { value },
    } = ev;
    onChange(String(value));
  };

  const handleFocus = (ev: React.SyntheticEvent<HTMLInputElement>): void => {
    setFocused(true);

    if (onFocus) {
      onFocus(ev);
    }
  };

  const handleBlur = (ev: React.SyntheticEvent<HTMLInputElement>): void => {
    setFocused(false);

    if (onBlur) {
      onBlur(ev);
    }
  };

  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
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
