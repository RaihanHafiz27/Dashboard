import { FormDataTypes } from "@/pages/settings";
import Image from "next/image";
import { Camera } from "lucide-react";
import React, { useRef } from "react";
import { useProfile } from "@/hooks/useProfile";

export type CountryAndCityOptions = {
  value: string;
  title: string;
};

export type textFields = keyof Omit<FormDataTypes, "profileImage">;

export interface FieldType {
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
    type: "password",
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

type ProfileSectionProps = {
  formUser: FormDataTypes;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  countryOptions: CountryAndCityOptions[];
  // handleSelectedChange: (name: string, value: string) => void;
  handleSelectedChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  allCitiesOfCountry: CountryAndCityOptions[] | undefined;
  onImageChange: (val: React.ChangeEvent<HTMLInputElement>) => void;
  profile: string | null;
  onSubmit: (e: React.FormEvent) => void;
};

export const ProfileSection = (props: ProfileSectionProps) => {
  const {
    formUser,
    onInputChange,
    countryOptions,
    handleSelectedChange,
    allCitiesOfCountry,
    onImageChange,
    profile,
    onSubmit,
  } = props;

  const {
    data: profileData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useProfile(1);

  console.log(profileData);

  return (
    <form
      id="profile-form"
      onSubmit={onSubmit}
      // onSubmit={(e) => {
      //   (e.preventDefault(), alert("Hello from profile"));
      // }}
    >
      <div className="flex gap-14 py-4 space-y-8">
        <div className="flex flex-col items-center space-y-2">
          <div className="relative bg-gray-300 w-28 h-28 rounded-full overflow-hidden grid place-items-center select-none">
            {profile ? (
              <Image
                src={profile}
                alt="profile picture"
                fill
                unoptimized
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

          <label
            htmlFor="profile-upload"
            className="cursor-pointer text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors inline-flex select-none"
          >
            Edit Photo
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={onImageChange}
            />
          </label>
        </div>
        {/* <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-6">
          {profileFields.map((field) => (
            <InputProfile
              key={field.name}
              {...field}
              value={
                profileData ? profileData[field.name] : formUser[field.name]
              }
              onChange={onInputChange}
              maxLength={field.maxLetters}
              readOnly={field.name === "password"}
            />
          ))}

          <LocationPicker
            label="Country"
            name="country"
            id="country"
         
            onChange={handleSelectedChange}
            placeholder="Choose Country"
            dataOptions={countryOptions}
            value={formUser.country}
          />
          <LocationPicker
            label="City"
            name="city"
            id="city"
         
            onChange={handleSelectedChange}
            placeholder={
              formUser.country ? "Choose City" : "Select country first"
            }
            disabled={!formUser.country}
            dataOptions={allCitiesOfCountry || []}
            value={formUser.city}
          />
        </div> */}
      </div>
    </form>
  );
};
