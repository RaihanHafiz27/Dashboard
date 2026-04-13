import { ToggleSwitch } from "../button/ToggleSwitch";
import { InputPassword } from "../input/InputPassword";

export const SecuritySection = () => {
  return (
    <div className="py-4 space-y-4">
      <div className="space-y-4">
        <h3 className="text-slate-700 dark:text-slate-200">
          Two-factor Authentication
        </h3>
        <ToggleSwitch
          label="Enable or disable two factor authentication"
          condition={true}
        />
      </div>
      <form
        id="security-form"
        onSubmit={(e) => {
          (e.preventDefault(), alert("Hello from security"));
        }}
        className="flex flex-col gap-4"
      >
        <h3 className="text-slate-700 dark:text-slate-200">Change Password</h3>
        <InputPassword
          title="Current Password"
          name="current password"
          id="current-password"
        />
        <InputPassword
          title="New Password"
          name="new password"
          id="new-password"
        />
      </form>
    </div>
  );
};
