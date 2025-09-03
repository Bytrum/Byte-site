import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

// Guard createClient so static pre-render and server builds won't crash when
// environment variables are not present during the build. In Vercel you must
// set these environment variables (Preview/Production) for the app to work at runtime.

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true
  }
})



if (!supabase) {
	console.warn(
		"Supabase client not initialized: set SUPABASE_URL and SUPABASE_ANON_KEY"
	);
}
