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
import { useState } from "react";
import { BsCashCoin } from "react-icons/bs";

export default function AppointmentDialog() {
  const [data, setData] = useState({
    date: "",
    time: "",
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="bg-green-600 flex items-center text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
          <BsCashCoin className="mr-2" /> Apply For Appointment
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

          {/* Submit Button */}
          <div>
            <Button type="submit">Confirm Appointment</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
