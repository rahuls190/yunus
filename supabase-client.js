// ═══════════════════════════════════════
//   Supabase Configuration
// ═══════════════════════════════════════

// TODO: Replace these with your actual Supabase URL and Anon Key!
const SUPABASE_URL = 'https://hruhrkxuthwjltybqyod.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhydWhya3h1dGh3amx0eWJxeW9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0MTk4MjMsImV4cCI6MjA5Mzk5NTgyM30.JcHt27aVdGzZlJbveGlLWDUIAN5b2WPI2_1KBweMFYs';

// Initialize the Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
