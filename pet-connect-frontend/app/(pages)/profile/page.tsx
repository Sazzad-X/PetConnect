import { LogOut } from "lucide-react";
import Link from "next/link";
import { MdOutlineDashboard } from "react-icons/md";
import EditProfie from "./EditProfie";

export default () => {
  const name = "Night Fury";
  // const age = "2";
  const location = "Dhaka, Bangladesh";
  const contact = "+880123456789";

  return (
    <div className="max-w-7xl mx-auto p-6 ">
      <div className="shadow-md rounded-md p-6 flex flex-col items-center text-center relative">
        <div className="absolute top-0 right-0 p-2  ">
            <EditProfie/>
        </div>
        {/* Profile Image */}
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
          <img
            src="/Dog.jpg"
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* User Details */}
        <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
        {/* <p className="text-gray-600">
          <span className="font-semibold">Age:</span> {age}
        </p> */}
        <p className="text-gray-600">
          <span className="font-semibold">Location:</span> {location}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Contact:</span> {contact}
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <Link href={'/user-dashboard'} className="bg-green-500 flex items-center text-white px-6 py-2 rounded-md hover:bg-green-600 transition">
            <MdOutlineDashboard className="mr-2" /> Dashboard
          </Link>
          <Link href={"/"} className="bg-red-500 flex items-center text-white px-6 py-2 rounded-md hover:bg-red-600 transition">
            <LogOut size={20} className="mr-2" /> Log out
          </Link>
        </div>
      </div>
    </div>
  );
};
