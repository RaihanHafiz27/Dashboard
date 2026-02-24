import { CategoryLabelsType } from "@/constants/categoryLabels";

export const InputDropdown = ({
  label,
  value,
  category,
  onChange,
}: {
  label: string;
  value: string | undefined;
  category: CategoryLabelsType[];
  onChange: (val: string) => void;
}) => {
  return (
    <div>
      <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2 font-bold">
        {label}
      </label>
      <select
        name="category"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full text-sm rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-slate-200 border border-gray-400 dark:border-none capitalize
         outline-none"
      >
        <option defaultValue={value}>{value}</option>
        {category.map((ops) => (
          <option key={ops.id} value={ops.value}>
            {ops.label}
          </option>
        ))}
      </select>
    </div>
  );
};
