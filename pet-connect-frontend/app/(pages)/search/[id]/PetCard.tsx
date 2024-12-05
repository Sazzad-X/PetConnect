import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";

const PetCard = ({ item }: { item: any }) => {
  return (
    <div className="rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <Card className="border border-gray-200">
        {/* Image Section */}
        <Link href={`/singlepet/${item.id}`}>
          <div className="aspect-video overflow-hidden rounded-t-md">
            <img
              src={item.image || "/Dog.jpg"} // Fallback if no image is provided
              className="object-cover w-full h-full hover:scale-110 transition-transform duration-300 cursor-pointer"
              alt={item.title || "Pet"}
            />
          </div>
        </Link>

        {/* Content Section */}
        <CardContent className="p-5 space-y-4">
          {/* Title and Description */}
          <div className="space-y-2">
            <Link
              href={`/singlepet/${item.id}`}
              className="text-lg font-semibold text-gray-800 hover:underline cursor-pointer"
            >
              {item.title}
            </Link>
            <p className="text-gray-500 text-sm">
              {item.details}
            </p>
          </div>

          {/* Price and Location */}
          <div className="flex items-center justify-between text-sm font-medium text-gray-700">
            <span className="font-bold text-lg">{item.age} years old</span>
            <span className="text-gray-600 text-xs">
              {item.status || "Unknown Status"}
            </span>
          </div>

          {/* Badges */}
          <div className="space-x-2">
           
            <Badge variant={"secondary"} className="text-xs">
               {item.breed}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PetCard;
