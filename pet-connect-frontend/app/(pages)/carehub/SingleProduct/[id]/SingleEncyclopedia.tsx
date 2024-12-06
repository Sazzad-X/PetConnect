import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import { PiMoneyWavyFill } from "react-icons/pi";

export default ({ userData, params }: { userData: any; params: any }) => {
  const [encyclopedia, setEncyclopedia] = useState<any>(null);
  useEffect(() => {
    const fetchingEncyclopedia = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/adoption/public-encyclopedia/?id=${params.id}`,
          {
            headers: {
              Authorization: `Bearer ${userData.access_token}`,
            },
          }
        );
        console.log(res.data);
        setEncyclopedia(res.data);
      } catch (error: any) {
        console.log(error);
      }
    };

    fetchingEncyclopedia();
  }, [params.id, userData.access_token]);

  if (!encyclopedia) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-3">
      <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-8">
        {/* Main Image */}
        <div className="w-full md:w-1/2 flex justify-center items-start">
          <img
            src={encyclopedia.image || "/Dog.jpg"}  // Use dynamic image from API
            alt={encyclopedia.title || "Pet"}  // Use dynamic title from API
            className="rounded-2xl max-w-full h-auto shadow-md"
          />
        </div>

        {/* Pet Details */}
        <div className="w-full md:w-1/2">
          {/* Pet Name */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{encyclopedia.title}</h1>

          {/* Pet Description */}
          <p className="text-gray-600 mb-6">{encyclopedia.details}</p>
        </div>
      </div>
    </div>
  );
};
