import { Button } from "@/components/ui/button";
import { PiMoneyWavyFill } from "react-icons/pi";

const PetDetails = () => {
  const title = "TolaX 50mg";
  const price = "500৳";
  const serviceType = "Medicine";
  const status = "In Stock";
  const location = "Dhaka, Bangladesh";
  const description =
    "TolaX 50mg is a friendly and playful dog, perfect for families. It loves to run, fetch, and is very loyal to its owner.";

  return (
    <div className="mt-3">
      <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-8">
        {/* Main Image */}
        <div className="w-full md:w-1/2 flex justify-center items-start">
          <img
            src="/Dog.jpg"
            alt="Night Fury"
            className="rounded-2xl max-w-full h-auto shadow-md"
          />
        </div>

        {/* Pet Details */}
        <div className="w-full md:w-1/2">
          {/* Pet Name */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>

          {/* Pet Description */}
          <p className="text-gray-600 mb-6">{description}</p>

          {/* Pet Information */}
          <div className="space-y-3">
            <p>
              <span className="font-semibold text-gray-700">Price:</span>{" "}
              {price}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Status:</span>{" "}
              {status}
            </p>
            <p>
              <span className="font-semibold text-gray-700">serviceType:</span>{" "}
              {serviceType}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Location:</span>{" "}
              {location}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex gap-4">
            <Button className="bg-green-600 hover:bg-green-700 duration-150">
              <PiMoneyWavyFill className="mr-2" />
              Purchase
            </Button>
          </div>

          {/* Details */}
          <div id="review" className="mt-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Pharmacy Details
            </h3>
            <div className="border p-4 rounded-md bg-gray-50">
              <div className="flex items-center">
                <span className="text-gray-700 font-semibold">
                  Swapna Pharmacy
                </span>
              </div>
              <p className="mt-2 text-gray-600">
                Swapna Pharmacy is a trusted pharmacy in Dhaka, Bangladesh. They
                provide quality medicines at an affordable price.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
