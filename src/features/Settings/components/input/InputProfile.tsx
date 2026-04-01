interface InputProfileProps {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: any;
}

export const InputProfile = (props: InputProfileProps) => {
  const { label, type, name, placeholder, value, onChange } = props;

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
        className="p-2 text-sm text-slate-700 dark:text-slate-200 dark:text-shadow-slate-200 placeholder:text-slate-600 border border-slate-300 dark:border-gray-600 rounded-md bg-slate-100 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
      />
    </div>
  );
};
