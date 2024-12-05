"use client";
import Filter from "./Filter";
import SearchResults from "./SearchResults";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
const page = () => {
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
        <Loading />
      ) : (
        <section>
          <div className="container mx-auto flex flex-col lg:flex-row gap-6 p-4">
            {/* Left Filter Section */}
            <section className="basis-1/4 lg:basis-1/5 bg-white rounded-lg p-2 hidden md:block">
              <Filter />
            </section>

            {/* Right Content Section */}
            <section className="flex-1">
              <SearchResults userData={userData} />
            </section>
          </div>
        </section>
      )}
    </>
  );
};

export default page;
