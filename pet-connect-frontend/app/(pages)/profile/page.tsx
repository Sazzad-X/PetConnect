"use client";
import { LogOut } from "lucide-react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import EditProfie from "./EditProfie";
import Loading from "@/components/Loading";
export default () => {
  const [userData, setUserData] = useState<any>({
    name: "N/A",
    address: "N/A",
    contact: "N/A",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const User_Data = JSON.parse(localStorage.getItem("user_data") || "{}");
    setIsAdmin(User_Data.is_admin);

    if (!User_Data.access_token) {
      router.push("/login");
    } else {
      if (!User_Data.is_admin) {
        try {

          axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/adoption/profile/`,
            {
              headers: {
                Authorization: `Bearer ${User_Data.access_token}`,
              },
            }
          ).then((res) => {
            setUserData(res.data);
            console.log(res.data);
          });
        } catch (error: any) {
          console.log(error);
        }
      }
      else {
        setUserData({
          name: "ADMIN",
          address: "",
          contact: "",
        });
      }
    }
    setIsLoading(false);
  }, [router]);

  const logout = () => {
    localStorage.removeItem("user_data");
    location.reload();
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="max-w-7xl mx-auto p-6 ">
          <div className="shadow-md rounded-md p-6 flex flex-col items-center text-center relative">
            <div className="absolute top-0 right-0 p-2  ">
              <EditProfie userData={
                userData
              } />
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
              {userData?.name || "N/A"}
            </h1>

            {!isAdmin &&
              <p className="text-gray-600">
                <span className="font-semibold">Address: </span>{" "}
                {userData?.address || "Not provided"}
              </p>
            }
            {
              !isAdmin &&
              <p className="text-gray-600">
                <span className="font-semibold">Contact: </span>{" "}
                {userData?.contact || "Not provided"}
              </p>}

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
                <LogOut onClick={
                  logout
                } size={20} className="mr-2" /> Log out
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
