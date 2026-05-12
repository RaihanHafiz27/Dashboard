import { supabase } from "@/lib/supabase/supabase";

interface SignUpParams {
  email: string;
  password: string;
  fullName: string;
}

/**
 * Service to handle all Supabase Authentication logic.
 */
export const authService = {
  /**
   * Register a new user and save their full name to user_metadata.
   * @note A database trigger is expected to create a corresponding entry in the 'profiles' table.
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

  /**
   * Authenticate a user using their email and password.
   */
  async signIn({ email, password }: Omit<SignUpParams, "fullName">) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
  },

  /**
   * Terminate the current user session.
   */
  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },
};
