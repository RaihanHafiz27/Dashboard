import { supabase } from "@/lib/supabase/supabase";
import { FormDataTypes } from "@/pages/settings";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (updateData: FormDataTypes) => {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      let imageUrl = updateData.profileImage;

      if (updateData.profileImage instanceof File) {
        const { data, error: uploadError } = await supabase.storage
          .from("avatars")
          .upload(`public/${Date.now()}`, updateData.profileImage);

        if (uploadError) throw uploadError;
        imageUrl = data.path;
      }
      const { data, error } = await supabase.from("profiles").upsert({
        id: 1,

        ...updateData,
        profileImage: imageUrl,
      });

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      alert("Profile updated successfully!");
    },
  });
};
