export const InputPrimary = ({
  label,
  type,
  name,
  value,
  onChange,
}: {
  label: string;
  type: string;
  name: string;
  value: string | number | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2 font-bold">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full text-sm rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-slate-200 border border-gray-400 dark:border-none
         outline-none"
        required
      />
    </div>
  );
};
