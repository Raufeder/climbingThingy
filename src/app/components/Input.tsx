import React from "react";

interface Props {
  inputValue?: string;
  setInputValue: (e: any) => void;
  placeholder: string;
  type: string;
  style?: any;
  disabled: boolean;
}

const Input: React.FC<Props> = ({
  type,
  placeholder,
  inputValue,
  setInputValue,
  style,
  disabled,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
      className={`w-full border border-gray-350 rounded px-3 py-2 text-sm ${
        disabled ? "cursor-not-allowed" : ""
      }`}
      style={style}
      disabled={disabled}
    />
  );
};

export default Input;
