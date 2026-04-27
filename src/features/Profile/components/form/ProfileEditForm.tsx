import { Input } from "@/features/Profile/components/Input/Input";
import {
  OptionsType,
  Select,
} from "@/features/Profile/components/Input/Select";
import { ImageDropzone } from "../Input/ImageDropZone";
import { useFormContext } from "../context/FormContext";
import { LocationType } from "../ProfileView";

interface ProfileEditFormProps {
  location: LocationType;
}

export const ProfileEditForm = (props: ProfileEditFormProps) => {
  const { location } = props;

  const { value } = useFormContext();

  return (
    <form className="flex flex-col gap-y-8">
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
        <Input
          name="password"
          label="Password"
          type="password"
          placeholder="-"
          maxLength={30}
          readOnly
        />
        <Select
          name="gender"
          label="Gender"
          placeholder="Choose Gender"
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
          placeholder="Choose Country"
          dataOptions={location.countries}
        />
        <Select
          label="City"
          name="city"
          placeholder="Choose City"
          dataOptions={location.allCitiesOfCountry}
          disabled={!value.country}
        />
      </div>
    </form>
  );
};
