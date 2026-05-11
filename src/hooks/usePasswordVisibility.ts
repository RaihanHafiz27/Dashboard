import { useState } from "react";

/**
 * Manage visibility state for multiple password inputs.
 * @example const { visibility, toggle } = usePasswordVisibility(['password', 'confirm'])
 */
export const usePasswordVisibility = <T extends string>(initialFields: T[]) => {
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
