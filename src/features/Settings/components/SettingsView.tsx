import { AnimatePresence, motion } from "motion/react";
import { ProfileSection } from "./section/ProfileSection";
import { FormDataTypes } from "@/pages/settings";
import { PreferencesSection } from "./section/PreferencesSection";
import { SecuritySection, SecurityState } from "./section/SecuritySection";
import { passwordValidationType } from "../utils/passwordValidation";

export type CountryAndCityOptions = {
  value: string;
  title: string;
};

interface SettingsViewProps {
  sections: string[];
  choosedSection: string;
  setChoosedSection: (e: string) => void;
  formUser: FormDataTypes;
  handleInputChange: (name: string, value: string) => void;
  countryOptions: CountryAndCityOptions[];
  // handleSelectedChange: (name: string, value: string) => void;
  handleSelectedChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;

  allCitiesOfCountry: CountryAndCityOptions[] | undefined;
  handleImageChange: (val: React.ChangeEvent<HTMLInputElement>) => void;
  profileImage: string | null;
  handleSubmit: (e: React.FormEvent) => void;
  securityForm: SecurityState;
  isFirstTimePassword: boolean;
  handleSecurityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validation: passwordValidationType;
  handleSecuritySave: () => void;
}

export const SettingsView = (props: SettingsViewProps) => {
  const {
    sections,
    choosedSection,
    setChoosedSection,
    formUser,
    handleInputChange,
    countryOptions,
    handleSelectedChange,
    allCitiesOfCountry,
    handleImageChange,
    profileImage,
    handleSubmit,
    securityForm,
    isFirstTimePassword,
    handleSecurityChange,
    validation,
    handleSecuritySave,
  } = props;

  console.log(formUser);

  return (
    <div className="border border-slate-300 p-8 rounded-lg shadow-lg space-y-4">
      {/* lINK FOR CHANGE SECTION */}
      <div>
        <ul className="flex space-x-16 border-b border-gray-300 dark:border-gray-500">
          {sections.map((item, i) => (
            <li
              key={i}
              onClick={() => setChoosedSection(item)}
              className={`relative capitalize text-sm  p-2 cursor-pointer transition-all duration-300 hover:scale-105 ${choosedSection === item ? "text-blue-500" : "text-gray-700 dark:text-gray-300"}`}
            >
              {item}

              {choosedSection === item && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0  right-0 h-1 bg-blue-500 rounded-t-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* SECTION DISPLAY */}
      <div className="min-h-[200px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={choosedSection}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* PROFILE SECTION */}
            {choosedSection === "edit profile" && (
              <ProfileSection
                formUser={formUser}
                onInputChange={handleInputChange}
                countryOptions={countryOptions}
                handleSelectedChange={handleSelectedChange}
                allCitiesOfCountry={allCitiesOfCountry}
                onImageChange={handleImageChange}
                profile={profileImage}
                onSubmit={handleSubmit}
              />
            )}
            {/* PREFERENCES SECTION */}
            {choosedSection === "preferences" && <PreferencesSection />}
            {/* SECURITY SECTION */}
            {choosedSection === "security" && (
              <SecuritySection
                securityForm={securityForm}
                isFirstTimePassword={isFirstTimePassword}
                handleSecurityChange={handleSecurityChange}
                validation={validation}
                handleSecuritySave={handleSecuritySave}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      {/* BUTTON SAVE */}
      <div className="flex justify-end items-center">
        <button
          type="submit"
          disabled={choosedSection === "preferences"}
          form={
            choosedSection === "edit profile" ? "profile-form" : "security-form"
          }
          className="inline-flex select-none bg-blue-500 hover:bg-blue-600 transition-colors py-1.5 w-36 items-center justify-center rounded-md text-slate-200 cursor-pointer disabled:cursor-not-allowed"
        >
          Save
        </button>
      </div>
    </div>
  );
};
