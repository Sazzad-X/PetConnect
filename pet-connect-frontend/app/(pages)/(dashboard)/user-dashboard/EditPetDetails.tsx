"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaRegEdit } from "react-icons/fa";
export default () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger className="text-blue-600 flex items-center gap-2 text-sm ml-3 mt-1">
          <FaRegEdit size={17} className="mr-2" />
          Edit
        </DialogTrigger>
        <DialogContent>
          <PostPetEdit
            initialPetData={{
              petName: "Buddy",
              breed: "Golden Retriever",
              age: "2 years",
              color: "Golden",
              price: "500",
              gender: "Male",
              location: "Dhaka, Bangladesh",
              description: "Friendly and playful pet.",
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function PostPetEdit({ initialPetData }: { initialPetData: any }) {
  const [petDetails, setPetDetails] = useState({
    petName: initialPetData?.petName || "",
    breed: initialPetData?.breed || "",
    age: initialPetData?.age || "",
    color: initialPetData?.color || "",
    price: initialPetData?.price || "",
    gender: initialPetData?.gender || "",
    location: initialPetData?.location || "",
    description: initialPetData?.description || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setPetDetails((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Replace with API call for updating pet details
    console.log("Updated pet details:", petDetails);
  };

  return (
    <div className="flex justify-start items-start">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Edit Pet Details</CardTitle>
          <CardDescription>
            Update the details of the pet. Make sure all the fields are correct
            before saving.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            <div className="space-y-2">
              <Label htmlFor="petName">Pet Name</Label>
              <Input
                id="petName"
                type="text"
                placeholder="Enter the pet's name"
                value={petDetails.petName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="breed">Breed</Label>
              <Input
                id="breed"
                type="text"
                placeholder="Enter the pet's breed"
                value={petDetails.breed}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="text"
                placeholder="Enter the pet's age"
                value={petDetails.age}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="color">Color</Label>
              <Input
                id="color"
                type="text"
                placeholder="Enter the pet's color"
                value={petDetails.color}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                type="number"
                placeholder="Enter the price"
                value={petDetails.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <select
                id="gender"
                className="w-full border rounded-md p-2"
                value={petDetails.gender}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                type="text"
                placeholder="Enter the location"
                value={petDetails.location}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                type="text"
                placeholder="Enter a brief description"
                value={petDetails.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-span-full">
              <Button type="submit" className="w-full">
                Save Changes
              </Button>
            </div>
          </form>
        </CardContent>
        
      </Card>
    </div>
  );
}
