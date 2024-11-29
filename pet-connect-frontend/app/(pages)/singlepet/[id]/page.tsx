import Appointment from "./Appointment";

const PetDetails = () => {
  const petName = "Night Fury (Dog)";
  const petPrice = "5,000৳";
  const breed = "Golden Retriber";
  const status = "In Stock";
  const age = "2 Years";
  const color = "Black";
  const gender = "Male";
  const location = "Dhaka, Bangladesh";
  const description =
    "Night Fury is a friendly and playful dog, perfect for families. It loves to run, fetch, and is very loyal to its owner.";

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
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{petName}</h1>

          {/* Pet Description */}
          <p className="text-gray-600 mb-6">{description}</p>

          {/* Pet Information */}
          <div className="space-y-3">
            <p>
              <span className="font-semibold text-gray-700">Price:</span>{" "}
              {petPrice}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Status:</span>{" "}
              {status}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Breed:</span>{" "}
              {breed}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Age:</span> {age}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Color:</span>{" "}
              {color}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Gender:</span>{" "}
              {gender}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Location:</span>{" "}
              {location}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex gap-4">
            <Appointment />
          </div>

          {/* Reviews */}
          <div id="review" className="mt-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Pet Owner Review
            </h3>
            <div className="border p-4 rounded-md bg-gray-50">
              <div className="flex items-center">
                <span className="text-gray-700 font-semibold">John Doe</span>
              </div>
              <p className="mt-2 text-gray-600">
                "Great Pet! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quaerat perspiciatis repellendus eos, alias veniam at
                sapiente aut suscipit magnam aperiam."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
