import axios from "axios";
import { useEffect, useState } from "react";
import AppointmentDialog from "./Appointment";

export default ({ userData, params }: { userData: any; params: any }) => {
  const [encyclopedia, setEncyclopedia] = useState<any>(null); 

  useEffect(() => {
    const fetchingEncyclopedia = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/adoption/public-pet/?id=${params.id}`,
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

 

  return (
    <div className="mt-3">
      <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-8">
        {/* Main Image */}
        <div className="w-full md:w-1/2 flex justify-center items-start">
          <img
            src={encyclopedia.image || "/Dog.jpg"}  
            alt={encyclopedia.title || "Pet"}  
            className="rounded-2xl max-w-full h-auto shadow-md"
          />
        </div>

        {/* Pet Details */}
        <div className="w-full md:w-1/2">
          {/* Pet Name */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{encyclopedia.title}</h1>

          {/* Pet Description */}
          <p className="text-gray-600 mb-6">{encyclopedia.details}</p>

          {/* Pet Information */}
          <div className="space-y-3">
            
            <p>
              <span className="font-semibold text-gray-700">Status:</span> {encyclopedia.status}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Breed:</span> {encyclopedia.breed}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Age:</span> {encyclopedia.age}
            </p>
            
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex gap-4">
            <AppointmentDialog />  {/* Your Appointment button or dialog */}
          </div>

         
        </div>
      </div>
    </div>
  );
};