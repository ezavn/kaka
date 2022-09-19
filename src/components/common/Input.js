import React from "react";
import { useController } from "react-hook-form";

const Input = ({ control, error = false, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      {...field}
      {...props}
      className={`px-[17px] rounded-[5px] bg-white outline-none w-full placeholder:text-[16px] placeholder:text-[#979797] h-[54px] focus:placeholder:text-black2 ${
        error ? "border border-blue" : ""
      }`}
    />
  );
};

export default Input;
