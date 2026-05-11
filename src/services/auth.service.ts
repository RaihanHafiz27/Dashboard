import { supabase } from "@/lib/supabase/supabase";

interface SignUpParams {
  email: string;
  password: string;
  fullName: string;
}

export const authService = {
  /**
   * Register a new user and save their full name to the metadata.
   * A database trigger will automatically create a profile in the ‘profiles’ table.
   */
  async signUp({ email, password, fullName }: SignUpParams) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { fullName },
      },
    });
    if (error) throw error;
    return data;
  },
};
