import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const CardTemp = ({ item }: { item: any }) => {
  return (
    <div className="rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-white">
      <Card className="border border-gray-200">
        {/* Image Section */}
        <Link href={`/carehub/SingleProduct/${item?.id || "#"}`}>
          <div className="aspect-video overflow-hidden rounded-t-md bg-gray-100">
            <img
              src={item?.image || "/Dog.jpg"}
              className="object-cover w-full h-full hover:scale-110 transition-transform duration-300 cursor-pointer"
              alt={item?.title || "Product Image"}
            />
          </div>
        </Link>

        {/* Content Section */}
        <CardContent className="p-5 space-y-4">
          {/* Title and Description */}
          <div className="space-y-2">
            <Link
              href={`/carehub/SingleProduct/${item?.id || "#"}`}
              className="text-lg font-semibold text-gray-800 hover:underline cursor-pointer"
            >
              {item?.title || "No Title Available"}
            </Link>
            <p className="text-gray-500 text-sm">
              {item?.details || "No details available for this product."}
            </p>
          </div>

          {/* Price and Location (Optional Placeholder) */}
          <div className="flex items-center justify-between text-sm font-medium text-gray-700">
            <span className="font-bold text-lg">{item?.price ? `${item.price} $` : "Price not specified"}</span>
            {/* <span className="text-gray-600 text-xs underline">SuperShop, Rajshahi</span> */}
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
           
           
            <Badge variant={"secondary"} className="text-xs">
               {new Date(item?.updated_at || Date.now()).toLocaleDateString()}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardTemp;
