import { formDataType } from "@/pages/settings";
import Image from "next/image";
import { InputProfile } from "../input/InputProfile";
import { LocationPicker } from "../input/LocationPicker";
import { Camera } from "lucide-react";

const profileFields = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "-",
  },
  {
    name: "userName",
    label: "User Name",
    type: "text",
    placeholder: "-",
  },
  {
    name: "email",
    label: "Email",
    type: "text",
    placeholder: "-",
  },
  { name: "password", label: "Password", type: "text", placeholder: "-" },
  {
    name: "phoneNumber",
    label: "Phone Number",
    type: "text",
    placeholder: "-",
  },
  {
    name: "dateOfBirth",
    label: "Date of Birth",
    type: "date",
    // placeholder: "11/22/33",
  },
  {
    name: "address",
    label: "Address",
    type: "text",
    placeholder: "-",
  },
  {
    name: "postalCode",
    label: "Postal Code",
    type: "text",
    placeholder: "-",
  },
];

export const ProfileSection = ({
  formData,
  handleChange,
  countryOptions,
  selectedCountry,
  setSelectedCountry,
  allCitiesOfCountry,
  setSelectedCity,
}: {
  formData: formDataType;
  handleChange: any;
  countryOptions: any[];
  selectedCountry: string;
  setSelectedCountry: (val: string) => void;
  allCitiesOfCountry: any;
  setSelectedCity: (val: string) => void;
}) => {
  return (
    <div className="flex gap-14 py-4 space-y-8">
      <div className="flex flex-col items-center space-y-2">
        <div className="relative bg-gray-300 w-28 h-28 rounded-full overflow-hidden grid place-items-center">
          {false ? (
            <Image
              src={"/images/profile.jpg"}
              alt="profile"
              fill
              className="object-cover"
            />
          ) : (
            <Camera
              size={48}
              strokeWidth={1.5}
              fill="#314158"
              className="text-gray-300"
            />
          )}
        </div>
        <button className="capitalize text-blue-500 text-sm">edit photo</button>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-6">
        {profileFields.map((field) => (
          <InputProfile
            key={field.name}
            {...field}
            value={formData[field.name as keyof formDataType]}
            onChange={handleChange}
          />
        ))}
        {/* select */}

        <LocationPicker
          label="Country"
          name="country"
          id="country"
          onChange={(val) => {
            setSelectedCountry(val);
            setSelectedCity("");
          }}
          placeholder="Choose Country"
          dataOptions={countryOptions}
        />
        <LocationPicker
          label="City"
          name="city"
          id="city"
          onChange={setSelectedCity}
          placeholder={selectedCountry ? "Choose City" : "Select country first"}
          disabled={!selectedCountry}
          dataOptions={allCitiesOfCountry}
        />
      </div>
    </div>
  );
};
