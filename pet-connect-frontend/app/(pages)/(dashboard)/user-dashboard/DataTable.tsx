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
import { MdDeleteForever } from "react-icons/md";
import AddNewPet from "./AddNewPet";
import EditProduct from "./EditPetDetails";
import EditEncyclopediaDetails from "./EditEncyclopediaDetails";
import AddNewEncyloPedia from "./AddNewEncyloPedia";
import axios from "axios";
import { toast } from "sonner";

const ProductList = ({
  encyclopedia,
  adoption,
  userData,
}: {
  encyclopedia: any;
  adoption: any;
  userData: any;
}) => {
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
      </div>
      <Table>
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
      </Table>
    </div>
  );
};

export default ProductList;
