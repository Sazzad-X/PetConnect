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
const AddNewEncyloPedia = () => {
  return (
    <Dialog>
      <DialogTrigger className="text-blue-600 flex items-center gap-2 text-sm ml-2">
        <div className="mb-4 bg-primary text-primary-foreground shadow hover:bg-primary/90 flex items-center px-2 py-2 rounded-md">
          <PlusIcon size={20} className="mr-2" />
          Add New EncyloPedia
        </div>
      </DialogTrigger>
      <DialogContent>
        <AddEncycloPedia />
      </DialogContent>
    </Dialog>
  );
};

export default AddNewEncyloPedia;

function AddEncycloPedia() {
  const [Details, setDetails] = useState({
    image: null as File | null,
    title: "",
    description: "",
    price: "",
    serviceType: "",
    location: "",
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setDetails((prev) => ({ ...prev, [id]: value }));
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      setDetails((prev) => ({ ...prev, image: file }));
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(Details);
    
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
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                type="text"
                placeholder="Enter the pet's name"
                value={Details.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="serviceType">Service Type</Label>
              <select
                id="serviceType"
                className="w-full border rounded-md p-2"
                value={Details.serviceType}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Service Type
                </option>
                <option value="Medicine">Medicine</option>
                <option value="Food">Food</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                type="text"
                placeholder="Enter the location"
                value={Details.location}
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
                value={Details.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">Image</Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
              {Details.image && (
                <div className="mt-2">
                  <img
                    src={URL.createObjectURL(Details.image)}
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
