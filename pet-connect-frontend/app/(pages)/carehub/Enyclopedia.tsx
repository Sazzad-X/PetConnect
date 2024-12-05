"use client"
import { useEffect, useState } from "react";
import CardTemp from "./CardTemp";
import axios from "axios";

export default ({userData}:{userData:any}) => {
    const [encyclopedia, setEncyclopedia] = useState([]);
    useEffect(() => {
      const fetchingEncyclopedia = async () => {
        try {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/adoption/public-encyclopedia/`,
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
  
      fetchingEncyclopedia();
    }, []);
    return (
        <div className="md:mx-auto container mt-4">
          <div className="w-full">
            <img src="/petHealth.avif" className="rounded-md" alt="" />
          </div>
          
          <div className="mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-4 md:mx-0 mx-4">
              {encyclopedia.map((item, i) => (
                <CardTemp item={item} key={i} />
              ))}
            </div>
          </div>
        </div>
    );
}