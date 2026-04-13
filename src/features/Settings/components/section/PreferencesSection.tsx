import { ToggleSwitch } from "../button/ToggleSwitch";
import { InputProfile } from "../input/InputProfile";

const preferencesFields = [
  {
    name: "currency",
    label: "Currency",
    type: "text",
    placeholder: "USD",
    maxLength: 3,
  },
  {
    name: "timeZone",
    label: "Time Zone",
    type: "text",
    placeholder: "(GMT-12:00) International Date Line West",
    maxLength: 30,
  },
];

export const PreferencesSection = () => {
  return (
    <div className="py-4 space-y-8">
      <div className="grid grid-cols-2 gap-x-8">
        {preferencesFields.map((field) => (
          <InputProfile
            key={field.name}
            {...field}
            value=""
            onChange={() => {}}
          />
        ))}
      </div>
      <div className="space-y-4">
        <h3 className=" text-slate-700 dark:text-slate-300">Notification</h3>
        <div className="grid grid-cols-1 gap-y-3">
          <ToggleSwitch
            label="I send or receive digital currency"
            condition={true}
          />
          <ToggleSwitch label="I receive merchant order" />
          <ToggleSwitch
            label="There are recomendation for my account"
            condition={true}
          />
        </div>
      </div>
    </div>
  );
};
