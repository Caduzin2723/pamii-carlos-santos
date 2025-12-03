import "react-native-url-polyfill";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zzyfpqaemmfmnyuomcmm.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6eWZwcWFlbW1mbW55dW9tY21tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3MDAyNjUsImV4cCI6MjA4MDI3NjI2NX0.RkakRiaRalkoQHMWkep61Wa09J_r8p4YUZOxWV6XNAs";

export const supabase = createClient(supabaseUrl, supabaseKey);