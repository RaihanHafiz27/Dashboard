import { useState } from "react";

export const usePasswordVisibility = <T extends string>(initialFields: T[]) => {
  // Kita buat state objek dinamis berdasarkan array fields yang dimasukkan
  const [visibility, setVisibility] = useState(() => {
    return initialFields.reduce(
      (acc, field) => {
        acc[field] = false;
        return acc;
      },
      {} as Record<T, boolean>,
    );
  });

  const toggle = (field: T) => {
    setVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return { visibility, toggle };
};
