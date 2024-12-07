"use client";
import { useEffect } from "react";
import PetsCardTemp from "../PetsCardTemp";
import axios from "axios";
import { useState } from "react";
import Loading from "@/components/Loading";

const PopularPetBreads = () => {
  const [pet, setPet] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/adoption/public-pet/`,
      )
      .then((res) => {
        setPet(res.data);
      })

  }, []);

  return (
    <div className="p-2">
      {
        pet.length === 0 &&
        <Loading />
      }
      <h2 className="text-3xl font-semibold mb-12 text-center">
        Pets up for Adoption
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
        {
          pet && pet.length !== 0 &&
          <>
            {pet.map((petData, i) => (
              <PetsCardTemp key={i} petData={petData} />
            ))}
          </>
        }
      </div>
    </div>
  );
};

export default PopularPetBreads;

