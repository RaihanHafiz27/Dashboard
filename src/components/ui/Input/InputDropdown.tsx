export const InputDropdown = ({
  value,
  category,
}: {
  value: string | undefined;
  category: any;
}) => {
  return (
    <div>
      <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1.5">
        Category
      </label>
      <select
        name="category"
        value={value}
        className="w-full rounded-lg px-3 py-2 outline-none bg-gray-50 dark:bg-slate-700 dark:text-white"
      >
        <option defaultValue={value}>{value}</option>
        {category.map((ops: any) => (
          <option key={ops.id} value={ops.value}>
            {ops.label}
          </option>
        ))}
      </select>
    </div>
  );
};
