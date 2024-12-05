"use client";
import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog";
import { FaRegEdit } from "react-icons/fa";

export default ({ data }: { data: any }) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger className="text-blue-600 flex items-center gap-2 text-sm ml-3 mt-1">
          <FaRegEdit size={17} className="mr-2" />
          Edit
        </DialogTrigger>
        <DialogContent>
          <EditEncyclopediaDetails
            initialPetData={{
              id: data.id,
              title: data.title,
              details: data.details,
              image: data.image,
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
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

export function EditEncyclopediaDetails({ initialPetData }: { initialPetData: any }) {
  const [petDetails, setPetDetails] = useState({
    id: initialPetData.id,
    title: initialPetData.title,
    details: initialPetData.details,
    image: initialPetData.image,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setPetDetails((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(initialPetData);

    const access_token = JSON.parse(localStorage.getItem("user_data") || "{}")["access_token"];
    axios
      .put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/adoption/encyclopedia/${initialPetData.id}`,
        {
          title: petDetails.title,
          details: petDetails.details,
          image: initialPetData.image,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        toast.success("Encyclopedia Updated");
        // Refresh the page after the API call succeeds
        location.reload();
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });

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
              <Label htmlFor="petName">Title</Label>
              <Input
                id="title"
                type="text"
                placeholder="Enter the title"
                value={petDetails.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="details"
                type="text"
                placeholder="Enter a brief description"
                value={petDetails.details}
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
