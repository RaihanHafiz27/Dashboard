import { passwordValidationType } from "../../utils/passwordValidation";
import { ToggleSwitch } from "../button/ToggleSwitch";
import { InputPassword } from "../input/InputPassword";

export interface SecurityState {
  password: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface SecuritySectionProps {
  securityForm: SecurityState;
  isFirstTimePassword?: boolean;
  handleSecurityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validation: passwordValidationType;
  handleSecuritySave: () => void;
}

export const SecuritySection = (props: SecuritySectionProps) => {
  const {
    securityForm,
    isFirstTimePassword,
    handleSecurityChange,
    validation,
    handleSecuritySave,
  } = props;

  console.log(securityForm);
  console.log(validation);

  return (
    <div className="py-4 space-y-6">
      <div className="space-y-4">
        <h3 className="text-slate-700 dark:text-slate-200 font-semibold text-sm">
          Two-factor Authentication
        </h3>
        <ToggleSwitch
          label="Enable or disable two factor authentication"
          condition={true}
        />
      </div>
      <form
        id="security-form"
        // onSubmit={(e) => {
        //   (e.preventDefault(), alert("Hello from security"));
        // }}
        // onSubmit={handleSubmit}
        onSubmit={(e) => {
          (e.preventDefault(), handleSecuritySave());
        }}
        className="flex flex-col gap-4"
      >
        <h3 className="text-slate-700 dark:text-slate-200 font-semibold text-sm">
          {isFirstTimePassword ? "Set Your Password" : "Change Your Password"}
        </h3>

        {isFirstTimePassword ? (
          <>
            <div className="space-y-4">
              <InputPassword
                title="Password"
                name="password"
                id="password"
                value={securityForm.password}
                onChange={handleSecurityChange}
                placeholder="Enter your password"
              />
              {securityForm.password.length > 0 && !validation.isValid && (
                <ValidationMessage messages={validation.errors} />
              )}
            </div>
            <InputPassword
              title="Confirm Password"
              name="confirmPassword"
              id="confirm-password"
              value={securityForm.confirmPassword}
              onChange={handleSecurityChange}
              placeholder="Enter your confirm password"
            />
          </>
        ) : (
          <>
            <InputPassword
              title="Current Password"
              name="currentPassword"
              id="current-password"
              value={securityForm.currentPassword}
              onChange={handleSecurityChange}
              placeholder="Enter your current password"
            />

            <div className="space-y-4">
              <InputPassword
                title="New Password"
                name="newPassword"
                id="new-password"
                value={securityForm.newPassword}
                onChange={handleSecurityChange}
                placeholder="Enter your new password"
              />
              {securityForm.newPassword.length > 0 && !validation.isValid && (
                <ValidationMessage messages={validation.errors} />
              )}
            </div>

            <InputPassword
              title="Confirm Password"
              name="confirmPassword"
              id="confirm-password"
              value={securityForm.confirmPassword}
              onChange={handleSecurityChange}
              placeholder="Enter your confirm new password"
            />
          </>
        )}
      </form>
    </div>
  );
};

const ValidationMessage = ({ messages }: { messages: string[] }) => {
  return (
    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-md border border-red-200 dark:border-red-800">
      <p className="text-[11px] font-bold text-red-600 dark:text-red-400 mb-1">
        Password Requirements:
      </p>
      <ul className="list-disc list-inside">
        {messages.map((err, i) => (
          <li
            key={i}
            className="text-[10px] text-red-500 dark:text-red-400 italic"
          >
            {err}
          </li>
        ))}
      </ul>
    </div>
  );
};
