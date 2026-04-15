export interface passwordValidationType {
  isValid: boolean;
  errors: string[];
}

export const passwordValidation = (password: string) => {
  const errors: string[] = [];
  if (password.length < 8) errors.push("Password minimal 8 karakter");
  if (!/\d/.test(password)) errors.push("Must have number");
  if (!/[A-Z]/.test(password)) errors.push("Must have capital");
  if (!/[@$!%*?&]/.test(password)) errors.push("Must have symbol (@$!%*?&)");

  return {
    isValid: errors.length === 0,
    errors,
  };
};
