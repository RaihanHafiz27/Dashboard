import { Input } from "@/features/Profile/components/Input/Input";
import {
  OptionsType,
  Select,
} from "@/features/Profile/components/Input/Select";
import { ImageDropzone } from "../Input/ImageDropZone";
import { useFormContext } from "../context/FormContext";
import { LocationType } from "../ProfileView";
import { FormDataTypes } from "@/pages/settings";

interface ProfileEditFormProps {
  location: LocationType;
  onSubmit: (e: React.FormEvent) => void;
}

export const ProfileEditForm = (props: ProfileEditFormProps) => {
  const { location, onSubmit } = props;

  const { value } = useFormContext<FormDataTypes>();

  return (
    <form
      id="profile-form"
      onSubmit={onSubmit}
      className="flex flex-col gap-y-8"
    >
      {/* Profile Picture Section */}
      <div className="flex flex-col gap-y-3">
        <p className="font-bold text-sm text-slate-600 tracking-wider">
          Profile Picture
        </p>
        <ImageDropzone />
      </div>

      {/* Input Fields Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <Input
          name="fullName"
          label="Full Name"
          type="text"
          placeholder="-"
          maxLength={30}
        />
        <Input
          name="userName"
          label="User Name"
          type="text"
          placeholder="-"
          maxLength={30}
        />
        <Input
          name="email"
          label="Email"
          type="text"
          placeholder="-"
          maxLength={50}
        />
        <Select
          name="gender"
          label="Gender"
          placeholder="Choose Your Gender"
          dataOptions={[
            { title: "Man", value: "man" },
            { title: "Woman", value: "woman" },
          ]}
        />
        <Select
          name="statusMarried"
          label="Status"
          placeholder="Choose Your Status"
          dataOptions={[
            { title: "Single", value: "single" },
            { title: "Married", value: "married" },
          ]}
        />

        <Input
          name="phoneNumber"
          label="Phone Number"
          type="tel"
          placeholder="-"
          maxLength={30}
        />
        <Input
          name="dateOfBirth"
          label="Date of Birth"
          type="date"
          maxLength={30}
        />
        <Input
          name="placeOfBirth"
          label="Place of Birth"
          type="text"
          placeholder="-"
          maxLength={30}
        />
        <Input
          name="address"
          label="Address"
          type="text"
          placeholder="-"
          maxLength={30}
        />
        <Input
          name="postalCode"
          label="Postal Code"
          type="text"
          placeholder="-"
          maxLength={30}
        />
        <Select
          label="Country"
          name="country"
          placeholder="Choose Your Country"
          dataOptions={location.countries}
        />
        <Select
          label="City"
          name="city"
          placeholder="Choose Your City"
          dataOptions={location.allCitiesOfCountry}
          disabled={!value.country}
        />
      </div>
    </form>
  );
};
