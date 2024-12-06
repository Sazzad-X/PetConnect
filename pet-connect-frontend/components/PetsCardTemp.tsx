import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const PetsCardTemp = ({ petData }: { petData: any }) => {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardContent className="p-4">
        <Link href={`/singlepet/${petData.id}`}>
          <div className="aspect-square relative rounded-lg overflow-hidden mb-4 cursor-pointer">
            <Image
              src={petData.image}
              alt="Buddy the Golden Retriever"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Link>
        <Link
          href={`/singlepet/${petData.id}`}
          className="text-xl font-semibold mb-2 cursor-pointer hover:underline"
        >
          {
            petData.title
          }
        </Link>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {petData.breed}
          </span>
          <span className="text-sm font-medium text-slate-600">
            {
              petData.age
            } years old
          </span>
        </div>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">          
          <span>
            {
              petData.details.length > 10 ? petData.details.slice(0, 10) + "..." : petData.details
            }
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default PetsCardTemp;
