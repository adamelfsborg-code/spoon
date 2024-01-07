import { cn } from "<spoon>/lib/cn";
import { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
};

const SelectUI = (props: SelectProps) => {
  return (
    <div className="grow" >
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={props.name}
      >
        {props.label}
      </label>
      <select
        {...props}
        className={cn(
          "shadow appearance-none border rounded w-full h-[2.5rem] px-4 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
          props.className
        )}
      >
        {props.children}
      </select>
    </div>
  );
};

export default SelectUI;
