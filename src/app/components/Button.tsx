import React from "react";

interface Props {
  text: string;
  handleClick: () => void;
  outline: boolean;
}

const Button: React.FC<Props> = ({ text, handleClick, outline }) => {
  return (
    <button
      onClick={handleClick}
      className={` ${
        !outline && "bg-red-200"
      } rounded hover:bg-red-700 border-2 border-indigo-600`}
    >
      <div className="p-4">{text}</div>
    </button>
  );
};

export default Button;
