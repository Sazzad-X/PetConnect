"use client";
import { BiSolidEditAlt } from "react-icons/bi";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default ({ userData }: { userData: any }) => {
  const [profile, setProfile] = useState({
    name: userData.name,
    location: userData.address,
    contact: userData.contact,
  });

  useEffect(() => {
    setProfile({
      name: userData.name,
      location: userData.address,
      contact: userData.contact,
    });
  }, [userData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    // Update the profile state
    setProfile((prev) => {
      const updatedProfile = { ...prev, [id]: value };

      // Send the updated data to the server
      const access_token = JSON.parse(localStorage.getItem("user_data") || "{}")["access_token"];
      axios
        .put(
          `${process.env.NEXT_PUBLIC_BASE_URL}/adoption/profile/`,
          {
            name: updatedProfile.name,
            address: updatedProfile.location,
            contact: updatedProfile.contact,
          },
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          // Refresh the page after the API call succeeds
          location.reload();
        })
        .catch((error) => {
          console.error("Error updating profile:", error);
        });

      return updatedProfile;
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="mt-4">
          <BiSolidEditAlt className="mr-2" />
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={profile.name}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-right">
              Location
            </Label>
            <Input
              id="location"
              value={profile.location}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="contact" className="text-right">
              Contact
            </Label>
            <Input
              id="contact"
              value={profile.contact}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={() => console.log("Profile updated:", profile)}
            type="submit"
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
