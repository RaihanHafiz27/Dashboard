import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "primary" | "secondary" | "outline";
}

export const Button = (props: ButtonProps) => {
  const { label, variant = "primary", className, disabled, ...rest } = props;

  const variants = {
    primary:
      "bg-violet-600 text-slate-200 hover:bg-violet-700 disabled:bg-violet-400",
    secondary: "bg-slate-200 text-slate-900 hover:bg-slate-300",
    outline: "border border-violet-600 text-violet-600 hover:bg-violet-50",
  };

  return (
    <button
      {...rest}
      disabled={disabled}
      className={`w-full py-2 rounded-lg md:text-sm 2xl:text-base text-slate-200 transition-colors cursor-pointer disabled:cursor-not-allowed ${variants[variant]} ${className}`}
    >
      {label}
    </button>
  );
};
