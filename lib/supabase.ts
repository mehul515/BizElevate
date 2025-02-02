// lib/supabase.ts
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Access environment variables from the .env.local file
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Initialize Supabase client
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);
