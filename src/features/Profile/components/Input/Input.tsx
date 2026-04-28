import { useContext } from "react";
import { useFormContext } from "../context/FormContext";

interface InputProps<T> {
  label: string;
  type: string;
  name: keyof T;
  placeholder?: string;
  maxLength: number;
  readOnly?: boolean;
}

export const Input = <T,>(props: InputProps<T>) => {
  const { label, type, name, placeholder, maxLength, readOnly } = props;

  const { value, onChange } = useFormContext<T>();

  return (
    <div className="flex flex-col space-y-2 w-full">
      <label
        htmlFor={name as string}
        className="text-sm tracking-widest text-slate-700 dark:text-slate-300"
      >
        {label}
      </label>
      <input
        type={type}
        id={name as string}
        name={name as string}
        value={(value[name] as string) || ""}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        readOnly={readOnly}
        className={`p-2 text-sm text-slate-700 dark:text-slate-200 dark:text-shadow-slate-200 placeholder:text-slate-600 border border-slate-300 dark:border-gray-600 bg-slate-100 dark:bg-gray-900  rounded-md transition-all  outline-none 
          ${
            readOnly ? "cursor-not-allowed" : "focus:ring-2 focus:ring-blue-500"
          }`}
      />
    </div>
  );
};
