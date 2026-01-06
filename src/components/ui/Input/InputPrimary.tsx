export const InputPrimary = ({
  label,
  type,
  name,
  value,
}: {
  label: string;
  type: string;
  name: string;
  value: string | number | undefined;
}) => {
  return (
    <div>
      <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1.5">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        className="w-full rounded-lg px-3 py-2 bg-gray-50 dark:bg-slate-700 dark:text-white outline-none"
        required
      />
    </div>
  );
};
