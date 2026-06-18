import { supabase } from '../data/supabase'

export async function getCurrentUser() {
  const { data } = await supabase.auth.getUser()
  return data?.user
}