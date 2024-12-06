"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { toast } from "sonner";

export default function AppointmentDialog({ id }: { id: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("user_data")!);
    console.log(data);
    try {
      if (data.date === "" || data.time === "" || data.message === "") {
        toast.error("Please fill in all the fields!");
        return;
      }
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/adoption/pet-application/`,
        {
          pet: id,
          meeting_time: `${data.date}T${data.time}:00`,
          message: data.message,
        },
        {
          headers: {
            Authorization: `Bearer ${userData.access_token}`,
          },
        }
      );
      setIsOpen(false); // Close the dialog after successful submission
      toast.success("Appointment submitted successfully!");
    } catch (error) {
      console.error("Error submitting appointment:", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div
          onClick={() => setIsOpen(true)}
          className="bg-green-600 flex items-center text-white px-6 py-2 rounded-md hover:bg-green-700 transition cursor-pointer"
        >
          <FaRegCheckCircle className="mr-2" /> Apply For Appointment
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Schedule an Appointment</DialogTitle>
          <DialogDescription>
            Please select a date and time for your appointment.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* Date Picker */}
          <div>
            <label
              htmlFor="appointment-date"
              className="block text-sm font-medium text-gray-700"
            >
              Select Date
            </label>
            <input
              onChange={handleChange}
              value={data.date}
              type="date"
              name="date"
              id="appointment-date"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>

          {/* Time Picker */}
          <div>
            <label
              htmlFor="appointment-time"
              className="block text-sm font-medium text-gray-700"
            >
              Select Time
            </label>
            <input
              onChange={handleChange}
              type="time"
              name="time"
              value={data.time}
              id="appointment-time"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="appointment-time"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="message"
              value={data.message}
              id="appointment-time"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>

          {/* Submit Button */}
          <div>
            <Button type="submit">Confirm Appointment</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}