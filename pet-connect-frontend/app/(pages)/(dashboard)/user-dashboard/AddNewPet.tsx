"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

const AddNewPet = () => {
  return (
    <Dialog>
      <DialogTrigger className="text-blue-600 flex items-center gap-2 text-sm ml-2">
        <div className="mb-4 bg-primary text-primary-foreground shadow hover:bg-primary/90 flex items-center px-2 py-2 rounded-md">
          <PlusIcon size={20} className="mr-2" />
          Add New Pet
        </div>
      </DialogTrigger>
      <DialogContent>
        <AddPet />
      </DialogContent>
    </Dialog>
  );
};

export default AddNewPet;

export function AddPet() {
  const [petDetails, setPetDetails] = useState({
    petName: "",
    breed: "",
    age: "",
    color: "",
    price: "",
    gender: "",
    location: "",
    description: "",
    image: null as File | null,
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setPetDetails((prev) => ({ ...prev, [id]: value }));
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      setPetDetails((prev) => ({ ...prev, image: file }));
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-start items-start">
      <Card className="w-full max-w-4xl mx-auto p-0">
        <CardHeader>
          <CardTitle>Pet Details</CardTitle>
          <CardDescription>
            Make sure all the fields are correct before saving.
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
            <div className="space-y-2">
              <Label htmlFor="image">Pet Image</Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
              {petDetails.image && (
                <div className="mt-2">
                  <img
                    src={URL.createObjectURL(petDetails.image)}
                    alt="Pet Preview"
                    className="w-32 h-32 object-cover rounded-md"
                  />
                </div>
              )}
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
