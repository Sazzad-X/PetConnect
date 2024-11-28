import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Cat, HeartPulse } from "lucide-react";
import CardTemp from "./CardTemp";
export default () => {
  return (
    <div className="md:mx-auto container mt-4">
      <div className="w-full">
        <img src="/petHealth.avif" className="rounded-md" alt="" />
      </div>
      <div className="mt-8 ">
        <ToggleGroup
          defaultValue="Food"
          variant="outline"
          type="single"
          className="space-x-3"
        >
          <ToggleGroupItem value="Food" aria-label="Toggle Food">
            <Cat className="w-6 h-6" />
            Food
          </ToggleGroupItem>
          <ToggleGroupItem value="Medicine" aria-label="Toggle Medicine">
            <HeartPulse className="w-6 h-6" />
            Medicine
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-4 md:mx-0 mx-4">
        {Array.from({ length: 7 }).map((_, i) => (
          <CardTemp key={i} />
        ))}
      </div>
      </div>
    </div>
  );
};
