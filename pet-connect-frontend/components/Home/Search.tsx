"use client";

import { Search } from "lucide-react";
import * as React from "react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
export default function SearchBar() {
  const [category, setCategory] = React.useState("all");
  const [searchTerm, setSearchTerm] = React.useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search/${category}?q=${searchTerm}`);

  };

  return (
    <div>
      <div className="w-full max-w-4xl mx-auto border p-2 rounded-full shadow-md">
        <form
          onSubmit={handleSearch}
          className="flex flex-row items-center gap-4 bg-white rounded-lg"
        >
          <div className="w-full sm:flex-1 border-r">
            <Input
              type="text"
              placeholder="Enter pet name, breed..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-md outline-none border-none focus-visible:outline-none focus-visible:ring-0 shadow-none"
            />
          </div>

          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full sm:w-[180px] rounded-md outline-none border-none focus:outline-none focus-visible:outline-none focus-visible:ring-0   shadow-none ">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Pets</SelectItem>
              <SelectItem value="dogs">Dogs</SelectItem>
              <SelectItem value="cats">Cats</SelectItem>
              <SelectItem value="birds">Birds</SelectItem>
              <SelectItem value="other">Other Pets</SelectItem>
            </SelectContent>
          </Select>
          <Button size={"icon"} className="rounded-r-full md:px-0 px-2">
            <Search className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
