import { createClient } from "@supabase/supabase-js";


const URL = "https://wuhafzcjcexkvplrowaz.supabase.co"
const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1aGFmemNqY2V4a3ZwbHJvd2F6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxNjMzNjYsImV4cCI6MjAyMjczOTM2Nn0.B_fWipTKUJCjZ3VO4VED8mCcSKPD799wZGV8o83eUYQ"

export const supabase = createClient(URL, KEY);