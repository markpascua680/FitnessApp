import AppTabs from "@/components/tabs/app-tabs";
import { getCurrentUser } from "@/api/auth";
import { useEffect } from "react";
import { router } from "expo-router";

export default function Layout() {

useEffect(() => {
  async function checkAuth() {
    const user = await getCurrentUser();
    console.log('Current user:', user);
    if (!user) {
      router.replace('/login');
    }
  }
  
  checkAuth();
}, []);

  return (
    <AppTabs/>
  );
}
