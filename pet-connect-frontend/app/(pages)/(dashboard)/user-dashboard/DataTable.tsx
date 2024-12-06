"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDeleteForever, MdOutlineDashboard } from "react-icons/md";
import AddNewPet from "./AddNewPet";
import EditProduct from "./EditPetDetails";
import EditEncyclopediaDetails from "./EditEncyclopediaDetails";
import AddNewEncyloPedia from "./AddNewEncyloPedia";
import axios from "axios";
import { toast } from "sonner";
import { MdOutlinePageview } from "react-icons/md";
import { useState } from "react";


const ProductList = ({
  encyclopedia,
  adoption,
  userData,
  application
}: {
  encyclopedia: any;
  adoption: any;
  userData: any;
  application: any;
}) => {
  const [isApplicantion, setIsApplicantion] = useState(false);
  const handleDeleteAdopt = async (id: any) => {
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/adoption/pet/${id}`,
        {
          headers: {
            Authorization: `Bearer ${userData.access_token}`,
          },
        }
      );

      toast.success("Pet Deleted");
      console.log(userData.access_token);
      // refresh the page
      location.reload();
    } catch (error: any) {
      toast.error("Error Occured");
    }
    console.log(userData);
  };

  const handleDeleteEncyclopedia = async (id: any) => {
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/adoption/encyclopedia/${id}`, {
        headers: {
          Authorization: `Bearer ${userData.access_token}`,
        },
      }
      );

      toast.success("Encyclopedia Deleted");
      location.reload();
    } catch (error: any) {
      toast.error("Error Occured");
    }
    console.log(userData);
  };

  return (
    <div>
      <div className="flex items-center space-x-3">
        {/* addPet */}
        <AddNewPet userData={userData} />
        {/* addEncylopedia */}
        <AddNewEncyloPedia userData={userData} />
        <div className="text-blue-600 flex items-center gap-2 text-sm ml-2">
          <div
            onClick={() => setIsApplicantion(!isApplicantion)}
            className="mb-4 bg-primary text-primary-foreground shadow hover:bg-primary/90 flex items-center px-2 py-2 rounded-md cursor-pointer">
            <MdOutlinePageview size={20} className="mr-2" />
            {
              isApplicantion ? "Show Other Records" : "Show Applications"
            }
          </div>
        </div>
      </div>
      <Table>


        {
          !isApplicantion ?
            <>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Display Pet Data */}
                {adoption.map((item: any, index: any) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell>{item.breed}</TableCell>
                    <TableCell>{item.status}</TableCell>
                    <TableCell className="text-right flex items-end justify-end cursor-pointer ">
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <BsThreeDotsVertical size={18} />
                        </DropdownMenuTrigger>

                        <DropdownMenuContent>
                          <DropdownMenuItem
                            onClick={() => handleDeleteAdopt(item.id)}
                            className="text-red-500 cursor-pointer"
                          >
                            <MdDeleteForever className="mr-2" />
                            Delete
                          </DropdownMenuItem>

                          <EditProduct
                            data={item}
                          />
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
                {/* Display Encyclopedia Data */}
                {encyclopedia.map((item: any, index: any) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell>Encyclopedia</TableCell>
                    <TableCell>{item.approved ? "Approved" : "Pending"}</TableCell>
                    <TableCell className="text-right flex items-end justify-end cursor-pointer ">
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <BsThreeDotsVertical size={18} />
                        </DropdownMenuTrigger>

                        <DropdownMenuContent>
                          <DropdownMenuItem
                            onClick={() => handleDeleteEncyclopedia(item.id)}
                            className="text-red-500 cursor-pointer"
                          >
                            <MdDeleteForever className="mr-2" />
                            Delete
                          </DropdownMenuItem>

                          <EditEncyclopediaDetails data={item} />
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </>
            :
            <>
              <TableHeader>
                <TableRow>
                  <TableHead>Applicant</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Meeting time</TableHead>
                  <TableHead>Pet</TableHead>
                  <TableHead className="text-right">Image</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Display Application Data */}
                {application.map((item: any, index: any) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.adopter.email}</TableCell>
                    <TableCell>{item.message}</TableCell>
                    <TableCell>{new Date(
                      item.meeting_time
                    ).toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true })}</TableCell>
                    <TableCell>{item.pet.title}</TableCell>
                    <TableCell className="text-right">
                      <img src={item.pet.image} alt="pet" className="w-16 h-16 object-cover float-right" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </>
        }
      </Table>
    </div>
  );
};

export default ProductList;
