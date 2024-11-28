import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Filter from "./Filter";
import PetCard from "./PetCard";
const SearchResults = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg font-semibold">Search Result (2)</h1>
        <div className="flex items-center space-x-2">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Sort By:" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Price</SelectLabel>
                <SelectItem value="price-low">Low to High</SelectItem>
                <SelectItem value="price-high">High to Low</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="md:hidden block">
            <Sheet>
              <SheetTrigger className="border px-4 h-9 rounded-md">
                Filter
              </SheetTrigger>
              <SheetContent className="overflow-y-scroll">
                <Filter />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Grid for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-4">
        {Array.from({ length: 7 }).map((_, i) => (
          <PetCard key={i} />
        ))}
      </div>
    </>
  );
};

export default SearchResults;
