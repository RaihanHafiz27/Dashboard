import { Eye, EyeClosed } from "lucide-react";
import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactNode;
  isShow?: boolean;
  onClickToogle?: () => void;
  disabled?: boolean;
}

export const Input = (props: InputProps) => {
  const {
    label,
    name,
    type,
    icon,
    isShow,
    onClickToogle,
    onChange,
    disabled,
    ...rest
  } = props;

  return (
    <div className="flex flex-col gap-y-2">
      <label
        htmlFor={name}
        className="md:text-sm 2xl:text-base font-semibold text-gray-500 capitalize tracking-wide"
      >
        {label}
      </label>
      <div className="relative group">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="text-gray-400 group-focus-within:text-violet-600 transition-colors">
              {icon}
            </i>
          </div>
        )}
        <input
          id={name}
          name={name}
          type={type === "password" && isShow ? "text" : type}
          {...rest}
          onChange={onChange}
          disabled={disabled}
          className={`border border-gray-300 w-full py-2 ${icon ? "pl-12" : "pl-4"} pr-4 md:text-sm 2xl:text-base rounded-lg outline-none focus:border-violet-600 focus:ring-1 focus:ring-violet-600 transition-all  placeholder:text-gray-400 text-gray-700 ${disabled && "cursor-not-allowed"}`}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={onClickToogle}
            className={`absolute inset-y-0 right-2 flex items-center text-gray-400 hover:text-gray-700 transition-colors ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
            aria-label={isShow ? "Hide Password" : "Show Password"}
            disabled={disabled}
          >
            {isShow ? <Eye size={20} /> : <EyeClosed size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};
