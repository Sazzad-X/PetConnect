"use client";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import EditProfie from "./EditProfie";
import Loading from "@/components/Loading";
export default () => {
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

  console.log(userData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="max-w-7xl mx-auto p-6 ">
          <div className="shadow-md rounded-md p-6 flex flex-col items-center text-center relative">
            <div className="absolute top-0 right-0 p-2  ">
              <EditProfie />
            </div>
            {/* Profile Image */}
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <img
                src="/profile.png"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* User Details */}
            <h1 className="text-2xl font-bold text-gray-800">
              {userData?.user?.name|| userData?.user?.username}  
            </h1>

            <p className="text-gray-600">
              <span className="font-semibold">Address: </span>{" "}
              {userData?.user?.address || "Not provided"}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Contact: </span>{" "}
              {userData?.user?.contact || "Not provided"}
            </p>

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              <Link
                href={"/dashboard"}
                className="bg-green-500 flex items-center text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
              >
                <MdOutlineDashboard className="mr-2" /> Dashboard
              </Link>
              <Link
                href={"/"}
                className="bg-red-500 flex items-center text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
              >
                <LogOut size={20} className="mr-2" /> Log out
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
