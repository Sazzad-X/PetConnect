"use client";
import Loading from "@/components/Loading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SingleEncyclopedia from "./SingleEncyclopedia";
const PetDetails = ({ params }: { params: { id: string } }) => {
  console.log("params:",params);
  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  useEffect(() => {
    
  }, [router]);
  
    
  return (
    <>{isLoading ? <Loading /> : <SingleEncyclopedia params={params} userData={userData} />}</>
   
  );
};

export default PetDetails;
