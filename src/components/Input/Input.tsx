import React from "react";
import "./Input.css";

type InputOwnProps<T extends React.ElementType = React.ElementType> = {
  as?: T;
};

type InputProps<T extends React.ElementType> = InputOwnProps<T> &
  Omit<React.ComponentProps<T>, keyof InputOwnProps<T>>;

const defaultElement = "button";

const Input = <T extends React.ElementType = typeof defaultElement>({
  as,
  config,
  value,
}: InputProps<T>) => {
  const TagName = as || "button";
  return (
    <div className="Input">
      <TagName className="InputElement" value={value} {...config} />
    </div>
  );
};

export default Input;
