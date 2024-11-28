import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PetCard = () => {
  return (
    <div className="rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <Card className="border border-gray-200">
        {/* Image Section */}
        <div className="aspect-video overflow-hidden rounded-t-md">
          <img
            src="/Dog.jpg"
            className="object-cover w-full h-full hover:scale-110 transition-transform duration-300 cursor-pointer "
            alt="Night Fury"
          />
        </div>

        {/* Content Section */}
        <CardContent className="p-5 space-y-4">
          {/* Title and Description */}
          <div className="space-y-2">
            <h1 className="text-lg font-semibold text-gray-800 hover:underline cursor-pointer">
              Night Fury (Dog)
            </h1>
            <p className="text-gray-500 text-sm ">
              This is a dog named Night Fury.
              This is a dog named Night Fury.
            </p>
          </div>

          {/* Price and Location */}
          <div className="flex items-center justify-between text-sm font-medium text-gray-700">
            <span className="font-bold text-lg">120tk</span>
            <span className="text-gray-600 text-xs">Talaimari, Rajshahi</span>
          </div>

          {/* Badges */}
          <div className="space-x-2">
            <Badge variant={"secondary"} className="text-xs">
              Male
            </Badge>
            <Badge variant={"secondary"} className="text-xs">
              Black
            </Badge>
            <Badge variant={"secondary"} className="text-xs">
              7 years
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PetCard;
