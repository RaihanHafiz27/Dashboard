import { createContext, useContext } from "react";

const FormContext = createContext<any>(null);

export const FormProvider = ({ children, value, onChange }: any) => {
  return (
    <FormContext.Provider value={{ value, onChange }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
