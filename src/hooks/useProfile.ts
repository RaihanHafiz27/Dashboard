import { supabase } from "@/lib/supabase/supabase";
import { useQuery } from "@tanstack/react-query";

export const useProfile = (userId: number) => {
  return useQuery({
    queryKey: ["profiles", userId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

      if (error) throw new Error(error.message);
      return data;
    },
  });
};
