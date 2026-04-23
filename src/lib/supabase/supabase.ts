import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// The exclamation mark (!) above is to tell TS that we are sure this variable exists
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
