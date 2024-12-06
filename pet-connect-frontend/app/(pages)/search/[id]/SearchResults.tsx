"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import PetCard from "./PetCard";

const SearchResults = ({ userData, query }: { userData: any, query: string | null }) => {
  const [adoption, setAdoption] = useState([]);

  useEffect(() => {
    const fetchingAdoption = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/adoption/public-pet/`,
          {
            headers: {
              Authorization: `Bearer ${userData.access_token}`,
            },
          }
        );
        console.log(res.data);

        // Filter out responses containing "query" in res.title
        const filteredAdoption = res.data.filter((item: any) => item.title.includes(query));

        setAdoption(filteredAdoption);
      } catch (error: any) {
        console.log(error);
      }
    };

    fetchingAdoption();
  }, [userData]);

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg font-semibold">Search Result ({adoption.length})</h1>
      </div>

      {/* Grid for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {adoption.map((item, i) => (
          <PetCard item={item} key={i} />
        ))}
      </div>
    </>
  );
};

export default SearchResults;