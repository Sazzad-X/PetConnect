import axios from "axios";
import { useEffect, useState } from "react";
import AppointmentDialog from "./Appointment";
import Loading from "@/components/Loading";

const SingleAdoption = ({ userData, params }: { userData: any; params: any }) => {
  const [encyclopedia, setEncyclopedia] = useState<any>([]);

  useEffect(() => {
    const fetchingPet = async () => {
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

    fetchingPet();
  }, [params.id, userData.access_token]);



  return (
    <div className="mt-3">
      {
        encyclopedia.length === 0 &&
        <Loading />
      }
      {encyclopedia && encyclopedia.length !== 0 &&
        <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-8">
          {/* Main Image */}
          <div className="w-full md:w-1/2 flex justify-center items-start">
            <img
              src={encyclopedia.image}
              alt={encyclopedia.title}
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
              <AppointmentDialog id={
                encyclopedia.id
              } />  {/* Your Appointment button or dialog */}
            </div>

          </div>
        </div>
      }
    </div>
  );
};

export default SingleAdoption;