"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
const AddNewEncyloPedia = ({ userData }: { userData: any }) => {
  return (
    <Dialog>
      <DialogTrigger className="text-blue-600 flex items-center gap-2 text-sm ml-2">
        <div className="mb-4 bg-primary text-primary-foreground shadow hover:bg-primary/90 flex items-center px-2 py-2 rounded-md">
          <PlusIcon size={20} className="mr-2" />
          Add New EncyloPedia
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="hidden">asd</DialogTitle>
        <DialogDescription className="hidden">sad</DialogDescription>
        <AddEncycloPedia userData={userData} />
      </DialogContent>
    </Dialog>
  );
};

export default AddNewEncyloPedia;

function AddEncycloPedia({ userData }: { userData: any }) {
  const [Data, setData] = useState({
    image: null as File | null,
    title: "",
    details: "",
   
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setData((prev) => ({ ...prev, [id]: value }));
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      setData((prev) => ({ ...prev, image: file }));
    }
  };

  const handleSubmit =async (e: any) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/adoption/encyclopedia/`,
        Data,
        {
          headers: {
            Authorization: `Bearer ${userData.access_token}`,
          },
        }
      );

      toast.success("Added new Encyclopedia.");
    } catch (error: any) {
      toast.error("Failed to add new Encyclopedia");
    }
    console.log(Data);
    
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
                value={Data.title}
                onChange={handleChange}
                required
              />
            </div>
            
            
            <div className="space-y-2">
              <Label htmlFor="details">Details</Label>
              <Input
                id="details"
                type="text"
                placeholder="Enter a brief details"
                value={Data.details}
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
              {Data.image && (
                <div className="mt-2">
                  <img
                    src={URL.createObjectURL(Data.image)}
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
