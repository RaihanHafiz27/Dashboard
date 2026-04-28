import { createContext, useContext } from "react";

interface FormContextProps<T> {
  value: T;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  setValue: <K extends keyof T>(name: K, val: T[K]) => void;
}

const FormContext = createContext<FormContextProps<unknown> | undefined>(
  undefined,
);

export const FormProvider = <T,>({
  children,
  value,
  onChange,
  setValue,
}: FormContextProps<T> & { children: React.ReactNode }) => {
  return (
    <FormContext.Provider value={{ value, onChange, setValue }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = <T,>() => {
  const context = useContext(FormContext);
  if (!context)
    throw new Error("useFormContext must be used within FormProvider");
  return context as FormContextProps<T>;
};
