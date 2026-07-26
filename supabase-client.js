// ═══════════════════════════════════════
//   Supabase Configuration
// ═══════════════════════════════════════

const SUPABASE_URL = 'https://qsemcyacudtqqqpfuieq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzZW1jeWFjdWR0cXFxcGZ1aWVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0MjYzMjksImV4cCI6MjA5NDAwMjMyOX0.OOiRJ9olDGXmYP5Tn2fAEmJBHlQ556w1TouTT695SN4'; // <-- Paste the new key here

// Initialize the Supabase client
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
