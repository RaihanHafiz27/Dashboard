import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

type InputPasswordProps = {
  title: string;
  name: string;
  id: string;
  value: string; // Tambahkan ini
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Tambahkan ini
  placeholder?: string;
};

export const InputPassword = (props: InputPasswordProps) => {
  const { title, name, id, value, onChange, placeholder } = props;
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-2 w-full max-w-xs">
      <label
        htmlFor={id}
        className="text-sm text-slate-700 dark:text-slate-400"
      >
        {title}
      </label>
      <div className="relative">
        <input
          id={id}
          name={name}
          type={isShow ? "text" : "password"}
          autoComplete={name}
          value={value} // Hubungkan ke state
          onChange={onChange} // Hubungkan ke fungsi pengubah state
          placeholder={placeholder}
          className="w-full p-2 pr-10 text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-400 border border-slate-300 dark:border-gray-600 rounded-md bg-slate-100 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-transform"
        />
        <button
          type="button"
          onClick={() => setIsShow(!isShow)}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
          aria-label={isShow ? "Hide Password" : "Show Password"}
        >
          {isShow ? <Eye size={20} /> : <EyeClosed size={20} />}
        </button>
      </div>
    </div>
  );
};
