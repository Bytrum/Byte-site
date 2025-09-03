import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PRIVET_SUPABASE_URL ?? "";
const supabaseKey = process.env.NEXT_PRIVET_SUPABASE_ANON_KEY ?? "";

// Guard createClient so static pre-render and server builds won't crash when
// environment variables are not present during the build. In Vercel you must
// set these environment variables (Preview/Production) for the app to work at runtime.


export const supabase: SupabaseClient | null =
	supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;



if (!supabase) {
	console.warn(
		"Supabase client not initialized: set SUPABASE_URL and SUPABASE_ANON_KEY"
	);
}
