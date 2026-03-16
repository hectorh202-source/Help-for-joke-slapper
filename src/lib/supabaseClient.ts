import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://aayplapnmjbtiqpmuvjs.supabase.co";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const EFFECTIVE_SUPABASE_ANON_KEY = SUPABASE_ANON_KEY ?? "SUPABASE_ANON_KEY_MISSING";

if (!SUPABASE_ANON_KEY) {
  // eslint-disable-next-line no-console
  console.warn(
    "VITE_SUPABASE_ANON_KEY is not set. Supabase authentication will not work until this is configured.",
  );
}

export const supabase = createClient(SUPABASE_URL, EFFECTIVE_SUPABASE_ANON_KEY, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});

