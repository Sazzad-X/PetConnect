"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface PetDetails {
  title: string;
  breed: string;
  age: number;
  details: string;
  image: File | null;
}

const AddNewPet = ({ userData }: { userData: any }) => {
  return (
    <Dialog>
      <DialogTrigger className="text-blue-600 flex items-center gap-2 text-sm ml-2">
        <div className="mb-4 bg-primary text-primary-foreground shadow hover:bg-primary/90 flex items-center px-2 py-2 rounded-md">
          <PlusIcon size={20} className="mr-2" />
          Add New Pet
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="hidden">Add New Pet</DialogTitle>
        <DialogDescription></DialogDescription>
        <AddPet userData={userData} />
      </DialogContent>
    </Dialog>
  );
};

export function AddPet({ userData }: { userData: any }) {
  const [petDetails, setPetDetails] = useState<PetDetails>({
    title: "",
    breed: "",
    age: 0,
    details: "",
    image: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setPetDetails((prev) => ({ ...prev, [id]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPetDetails((prev) => ({ ...prev, image: file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/adoption/pet/`,
        petDetails,
        {
          headers: {
            Authorization: `Bearer ${userData.access_token}`,
          },
        }
      );

      toast.success("Added new pet.");
    } catch (error: any) {
      toast.error("Failed to add new pet");
    }
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
              <Label htmlFor="title">Pet Name</Label>
              <Input
                id="title"
                type="text"
                placeholder="Enter the pet's name"
                value={petDetails.title}
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
                type="number"
                placeholder="Enter the pet's age"
                value={petDetails.age}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="details">Details</Label>
              <Input
                id="details"
                type="text"
                placeholder="Enter brief details"
                value={petDetails.details}
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

export default AddNewPet;
