"use client";
import Link from "next/link";
import DataChart from "./DataChart";
import DataTable from "./DataTable";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

export default ({ userData }: { userData: any }) => {
  const [encyclopedia, setEncyclopedia] = useState([]);
  const [adoption, setAdoption] = useState([]);
  const [appointment, setAppointment] = useState([]);

  useEffect(() => {
    const fetchingEncyclopedia = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/adoption/encyclopedia/`,
          {
            headers: {
              Authorization: `Bearer ${userData.access_token}`,
            },
          }
        );
        // console.log(res.data);
        setEncyclopedia(res.data);
      } catch (error: any) {
        console.log(error);
      }
    };
    //
    const fetchingAdoption = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/adoption/pet/`,
          {
            headers: {
              Authorization: `Bearer ${userData.access_token}`,
            },
          }
        );
        // console.log(res.data);
        setAdoption(res.data);
      } catch (error: any) {
        console.log(error);
      }
    };

    const fetchingAppointment = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/adoption/pet-application/`,
          {
            headers: {
              Authorization: `Bearer ${userData.access_token}`,
            },
          }
        );
        // console.log(res.data);
        setAppointment(res.data);
      } catch (error: any) {
        console.log(error);
      }
    }

    fetchingEncyclopedia();
    fetchingAdoption();
    fetchingAppointment();
  }, []);
  return (
    <div className="max-w-7xl mx-auto p-2 mt-8">
      <Link href="/">
        <Button className="mb-4">
          <ArrowLeft className="mr-2" />
          Back
        </Button>
      </Link>
      <DataChart encyclopedia={encyclopedia} adoption={adoption} />
      <DataTable
        application={appointment}
        encyclopedia={encyclopedia}
        adoption={adoption}
        userData={userData}
      />
    </div>
  );
};
