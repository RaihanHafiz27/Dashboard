import { Eye, EyeClosed, Mail } from "lucide-react";
import { ReactNode } from "react";

interface AuthInputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  maxLength: number;
  icon: ReactNode;
  onClick?: () => void;
  isShow?: boolean;
}

export const AuthInput = (props: AuthInputProps) => {
  const { label, name, type, placeholder, maxLength, icon, isShow, onClick } =
    props;
  return (
    <div className="flex flex-col gap-y-2">
      <label
        htmlFor="#"
        className="text-sm font-semibold text-gray-700 capitalize tracking-wide"
      >
        {label}
      </label>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <i className="text-gray-400 group-focus-within:text-violet-600 transition-colors">
            {icon}
          </i>
        </div>
        <input
          id={name}
          name={name}
          type={type === "password" && isShow ? "text" : type}
          placeholder={placeholder}
          maxLength={maxLength}
          className="border border-gray-300 w-full py-2 pl-12 pr-4 rounded-lg outline-none focus:border-violet-600 focus:ring-1 focus:ring-violet-600 transition-all text-sm placeholder:text-gray-400 text-gray-700"
        />
        {type === "password" && (
          <button
            type="button"
            onClick={onClick}
            className="absolute inset-y-0 right-2 flex items-center text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
            aria-label={isShow ? "Hide Password" : "Show Password"}
          >
            {isShow ? <Eye size={20} /> : <EyeClosed size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};
