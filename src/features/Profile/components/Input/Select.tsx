import { useFormContext } from "../context/FormContext";

export interface OptionsType {
  title: string;
  value: string;
}

interface SelectProps {
  label: string;
  name: string;
  disabled?: boolean;
  placeholder: string;
  dataOptions: OptionsType[] | undefined;
}

export const Select = (props: SelectProps) => {
  const { label, name, disabled, placeholder, dataOptions } = props;

  const { value, onChange } = useFormContext();

  return (
    <div className="flex flex-col space-y-2">
      <label
        htmlFor={name}
        className={`text-sm font-medium ${disabled ? "text-gray-400" : "text-slate-700 dark:text-slate-300 "}`}
      >
        {label}
      </label>
      <select
        name={name}
        id={name}
        disabled={disabled}
        onChange={onChange}
        value={value[name]}
        className="p-2 text-sm border border-slate-300 dark:border-gray-600 rounded-md text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all cursor-pointer disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-600"
      >
        <option value="">{placeholder || "Select option..."}</option>
        {dataOptions?.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.title}
          </option>
        ))}
      </select>
    </div>
  );
};
