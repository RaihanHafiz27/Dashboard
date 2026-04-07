import { formDataType } from "@/pages/settings";
import Image from "next/image";
import { InputProfile } from "../input/InputProfile";
import { LocationPicker } from "../input/LocationPicker";
import { Camera } from "lucide-react";
import { useRef } from "react";

type textFields = keyof Omit<formDataType, "profileImage">;

interface FieldType {
  name: textFields;
  label: string;
  type: string;
  placeholder?: string;
  maxLetters: number;
}

const profileFields: FieldType[] = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "-",
    maxLetters: 40,
  },
  {
    name: "userName",
    label: "User Name",
    type: "text",
    placeholder: "-",
    maxLetters: 10,
  },
  {
    name: "email",
    label: "Email",
    type: "text",
    placeholder: "-",
    maxLetters: 50,
  },
  {
    name: "password",
    label: "Password",
    type: "text",
    placeholder: "-",
    maxLetters: 10,
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    type: "tel",
    placeholder: "-",
    maxLetters: 15,
  },
  {
    name: "dateOfBirth",
    label: "Date of Birth",
    type: "date",
    // placeholder: "11/22/33",
    maxLetters: 10,
  },
  {
    name: "address",
    label: "Address",
    type: "text",
    placeholder: "-",
    maxLetters: 50,
  },
  {
    name: "postalCode",
    label: "Postal Code",
    type: "text",
    placeholder: "-",
    maxLetters: 6,
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
  handleImage,
  profile,
}: {
  formData: formDataType;
  handleChange: any;
  countryOptions: any[];
  selectedCountry: string;
  setSelectedCountry: (val: string) => void;
  allCitiesOfCountry: any;
  setSelectedCity: (val: string) => void;
  handleImage: (e: any) => void;
  profile: string;
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleEditClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current?.click();
    }
  };

  return (
    <div className="flex gap-14 py-4 space-y-8">
      <div className="flex flex-col items-center space-y-2">
        <div className="relative bg-gray-300 w-28 h-28 rounded-full overflow-hidden grid place-items-center">
          {profile ? (
            <Image src={profile} alt="profile" fill className="object-cover" />
          ) : (
            <Camera
              size={48}
              strokeWidth={1.5}
              fill="#314158"
              className="text-gray-300"
            />
          )}
        </div>
        {/* <button className="capitalize text-blue-500 text-sm">edit photo</button> */}
        <div>
          <button
            onClick={handleEditClick}
            className="capitalize text-blue-500 text-sm"
          >
            edit photo
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            // onChange={(e) => handleChange("profile", e.target.files)}
            onChange={(e) => handleImage(e)}
          />
        </div>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-6">
        {profileFields.map((field) => (
          <InputProfile
            key={field.name}
            {...field}
            value={formData[field.name]}
            // onChange={handleChange}
            onChange={(e: any) => handleChange(field.name, e.target.value)}
            // onChange={(val: any) => handleChange(field.name, val)}
            maxLength={field.maxLetters}
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
