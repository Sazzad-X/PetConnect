import {
    Card,
    CardContent
} from "@/components/ui/card";
import { MapPin } from "lucide-react";
import Image from "next/image";
const PetsCardTemp = () => {
    return (
        <Card className="w-full max-w-sm mx-auto">
        <CardContent className="p-4">
          <div className="aspect-square relative rounded-lg overflow-hidden mb-4">
            <Image
              src="/Dog.jpg"
              alt="Buddy the Golden Retriever"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Night Fury</h3>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Golden Retriever
            </span>
            <span className="text-sm font-medium text-slate-600">2 years old</span>
          </div>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <MapPin className="h-4 w-4 mr-1" />
            <span>San Francisco, CA</span>
          </div>
        </CardContent>
      </Card>
    );
}

export default PetsCardTemp;