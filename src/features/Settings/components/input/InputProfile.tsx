interface InputProfileProps {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange: any;
  maxLength: number;
  readOnly?: boolean;
}

export const InputProfile = (props: InputProfileProps) => {
  const {
    label,
    type,
    name,
    placeholder,
    value,
    onChange,
    maxLength,
    readOnly,
  } = props;

  return (
    <div className="flex flex-col space-y-1.5 w-full">
      <label
        htmlFor={name}
        className="text-sm tracking-widest text-slate-700 dark:text-slate-300"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
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
