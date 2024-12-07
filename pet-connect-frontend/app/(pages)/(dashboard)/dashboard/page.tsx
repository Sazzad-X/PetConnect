"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import UserDashboard from "../user-dashboard/UserDashboard";
import AdminDashboard from "../admin-dashboard/AdminDashboard";
import Loading from "@/components/Loading";
const Page = () => {
  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const router = useRouter();
  useEffect(() => {
    const User_Data = localStorage.getItem("user_data");
    if (!User_Data) {
      router.push("/login");
    } else {
      setUserData(JSON.parse(User_Data));
    }
    setIsLoading(false);
  }, [router]);

  return (
    <>
      {isLoading ? (
        <Loading/>
      ) : (
        <>{userData?.is_user ? <UserDashboard userData={userData} /> : <AdminDashboard userData={userData} />}</>
      )}
    </>
  );
};

export default Page;
