// import { Database } from '@/database.types';
import { createClient } from '@supabase/supabase-js';

const LogssupabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const LogssupabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabaseLogs = createClient(
  // export const supabaseLogs = createClient<Database>(
  LogssupabaseUrl,
  LogssupabaseAnonKey,
  {
    auth: {
      persistSession: true,
      storageKey: 'CustomApp',
      storage: window.localStorage,
      flowType: 'pkce',
    },
  },
);
