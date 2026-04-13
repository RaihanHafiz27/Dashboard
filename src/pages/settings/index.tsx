import { ProfileType } from "@/store/profileSlice";
import { SettingsView } from "@/features/Settings/components/SettingsView";
import { useLogicSettings } from "@/features/Settings/hooks/useLogicSettings";

const settingsType = ["edit profile", "preferences", "security"];

// The data in the Settings form can be a file
export interface FormDataTypes extends Omit<ProfileType, "profileImage"> {
  profileImage: File | null;
}

const SettingsPage = () => {
  const useLogic = useLogicSettings();

  return <SettingsView sections={settingsType} {...useLogic} />;
};

export default SettingsPage;
