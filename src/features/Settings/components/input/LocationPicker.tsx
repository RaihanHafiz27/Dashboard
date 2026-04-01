interface Option {
  value: string;
  title: string;
}

interface LocationPickerProps {
  label: string;
  name: string;
  id: string;
  disabled?: boolean;
  onChange: (val: string) => void;
  placeholder: string;
  dataOptions: Option[];
}

export const LocationPicker = (props: LocationPickerProps) => {
  const { label, name, id, disabled, onChange, placeholder, dataOptions } =
    props;
  return (
    <div className="flex flex-col space-y-1.5">
      <label
        htmlFor={id}
        className={`text-sm font-medium ${disabled ? "text-gray-400" : "text-slate-700 dark:text-slate-300 "}`}
      >
        {label}
      </label>
      <select
        name={name}
        id={id}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className="p-2 text-sm border border-slate-300 dark:border-gray-600 rounded-md text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all cursor-pointer disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-600"
      >
        <option value="">{placeholder || "Select option..."}</option>
        {dataOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.title}
          </option>
        ))}
      </select>
    </div>
  );
};
