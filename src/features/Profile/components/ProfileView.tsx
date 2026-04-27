import { SetStateAction } from "react";
import { HeaderSection } from "./section/HeaderSection";
import { PersonalSection } from "./section/PersonalSection";
import { AboutSummarySection } from "./section/AboutSummarySection";
import { ModalForm } from "./modal/ModalForm";
import { ProfileEditForm } from "./form/ProfileEditForm";
import { FormDataTypes } from "@/pages/settings";
import { FormProvider } from "./context/FormContext";
import { OptionsType } from "./Input/Select";

export interface LocationType {
  countries: OptionsType[];
  allCitiesOfCountry: OptionsType[] | undefined;
}

export interface ProfileViewProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  formUser: FormDataTypes;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  location: LocationType;
  profileUser: any;
}

export const ProfileView = (props: ProfileViewProps) => {
  const { isOpen, setIsOpen, formUser, onChange, location, profileUser } =
    props;

  console.log(formUser);

  return (
    <div className="min-h-screen space-y-6">
      <HeaderSection
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        profileUser={[{ email: "abd@", phone: "0012910", location: "askas" }]}
      />
      <div className="grid grid-cols-[6fr_4fr] gap-6">
        <PersonalSection profileUser={[]} />
        <AboutSummarySection />
      </div>
      {isOpen && (
        <ModalForm isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
          <FormProvider value={formUser} onChange={onChange}>
            <ProfileEditForm location={location} />
          </FormProvider>
        </ModalForm>
      )}
    </div>
  );
};
