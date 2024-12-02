import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent
} from "@/components/ui/card";
import Link from "next/link";

const CardTemp = () => {
  return (
    <div className="rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <Card className="border border-gray-200">
        {/* Image Section */}
        <Link href="/carehub/SingleProduct/1">
        <div className="aspect-video overflow-hidden rounded-t-md">
          <img
            src="/Dog.jpg"
            className="object-cover w-full h-full hover:scale-110 transition-transform duration-300 cursor-pointer "
            alt="Night Fury"
          />
        </div>
        </Link>

        {/* Content Section */}
        <CardContent className="p-5 space-y-4">
          {/* Title and Description */}
          <div className="space-y-2">
            <Link href={"/carehub/SingleProduct/1"} className="text-lg font-semibold text-gray-800 hover:underline cursor-pointer">
            Premium Adult Wet Cat Food (Cat)
            </Link>
            <p className="text-gray-500 text-sm ">
             Lorem ipsum dolor sperspiciatis ullam repellat illum eaque possimus, numquam distinctio soluta?
            </p>
          </div>

          {/* Price and Location */}
          <div className="flex items-center justify-between text-sm font-medium text-gray-700">
            <span className="font-bold text-lg">120tk</span>
            <span className="text-gray-600 text-xs underline">SuperShop, Rajshahi</span>
          </div>

          {/* Badges */}
          <div className="space-x-2">
            <Badge variant={"secondary"} className="text-xs">
              Dog
            </Badge>
            <Badge variant={"secondary"} className="text-xs">
              Adult
            </Badge>
            <Badge variant={"secondary"} className="text-xs">
              Protein , Fiver
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardTemp;
