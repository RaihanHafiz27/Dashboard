import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PreferencesSection } from "@/features/Settings/components/section/PreferencesSection";
import { SecuritySection } from "@/features/Settings/components/section/SecuritySection";
import { ProfileSection } from "@/features/Settings/components/section/ProfileSection";
import { City, Country } from "country-state-city";

const settingsType = ["edit profile", "preferences", "security"];

export interface formDataType {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  phoneNumber: string;
  dateOfBirth: string;
  address: string;
  profileImage: File | null;
  city: string;
  postalCode: string;
  country: string;
}

const SettingsPage = () => {
  const [choosedSection, setChoosedSection] = useState<string>("edit profile");
  const [formData, setFormData] = useState<formDataType>({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
    dateOfBirth: "",
    address: "",
    profileImage: null,
    postalCode: "",
    city: "",
    country: "",
  });

  const allCountries = Country.getAllCountries();

  const countryOptions = useMemo(() => {
    return allCountries.map((c) => ({ value: c.isoCode, title: c.name }));
  }, []);

  const cityOptions = useMemo(() => {
    if (!formData.country) return [];
    const citiesOfCountry = City.getCitiesOfCountry(formData.country);
    return citiesOfCountry?.map((city) => ({
      value: `${city.name}-${city.latitude}`,
      title: city.name,
    }));
  }, [formData.country]);

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      // ADDITIONAL LOGIC: If the country changes, clear the city
      ...(name === "country" ? { city: "" } : {}),
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        profileImage: file,
      }));
    }
  };

  const [preview, setPreview] = useState<string>("");

  useEffect(() => {
    if (!formData.profileImage || !(formData.profileImage instanceof File)) {
      setPreview("");
      return;
    }

    const objectUrl = URL.createObjectURL(formData.profileImage);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [formData.profileImage]);

  console.log(formData.country);
  console.log(formData.city);
  console.log(formData.dateOfBirth);
  console.log(formData.fullName);
  console.log(formData.email);
  console.log(formData.profileImage);
  console.log(preview);

  return (
    <div className="border border-slate-300 p-8 rounded-lg shadow-lg space-y-4">
      <div className="">
        <ul className="flex space-x-16 border-b border-gray-300 dark:border-gray-500">
          {settingsType.map((item, i) => (
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
                formData={formData}
                // handleChange={handleChange}
                handleChange={handleInputChange}
                countryOptions={countryOptions}
                selectedCountry={formData.country}
                // setSelectedCountry={setSelectedCountry}
                setSelectedCountry={(val) => handleSelectChange("country", val)}
                allCitiesOfCountry={cityOptions}
                setSelectedCity={(val) => handleSelectChange("city", val)}
                handleImage={handleImageChange}
                profile={preview}
              />
            )}
            {/* PREFERENCES SECTION */}
            {choosedSection === "preferences" && <PreferencesSection />}
            {/* SECURITY SECTION */}
            {choosedSection === "security" && <SecuritySection />}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-end items-center">
        <button
          type="button"
          disabled
          className="flex bg-blue-500 py-1.5 w-36 items-center justify-center rounded-md text-slate-200 disabled:cursor-not-allowed"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
