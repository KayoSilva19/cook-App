import "react-native-url-polyfill/auto"
import { createClient } from "@supabase/supabase-js"

const supaBaseURL = process.env.EXPO_PUBLIC_SUPABASE_URL ?? ""
const supaBaseKEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? ""

export const supabase = createClient(supaBaseURL, supaBaseKEY)