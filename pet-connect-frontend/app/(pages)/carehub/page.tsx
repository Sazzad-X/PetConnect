"use client";
import Loading from "@/components/Loading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Enyclopedia from "./Enyclopedia";
const Page = () => {
  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  useEffect(() => {
    const User_Data = localStorage.getItem("user_data");
    if (User_Data) {
      setUserData(JSON.parse(User_Data));
    }
    setIsLoading(false);
  }, [router]);
  return <>{isLoading ? <Loading /> : <Enyclopedia userData={userData} />}</>;
};

export default Page;