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
import { FcApproval } from "react-icons/fc";
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
  const handleApprovedEncyclopedia = async (id: any) => {
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/administrator/encyclopedia-approval/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${userData.access_token}`,
          },
        }
      );

      toast.success("Encyclopedia Approved");
    } catch (error: any) {
      toast.error("Error Occured");
    }
    console.log(userData);
  };
  const handleApprovedAdopt = async (id: any) => {
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/administrator/pet-approval/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${userData.access_token}`,
          },
        }
      );

      toast.success("Adopt Approved");
      console.log(userData.access_token);
    } catch (error: any) {
      toast.error("Error Occured");
    }
    console.log(userData);
  };
  const handleDeleteEncyclopedia = async (id: any) => {
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/administrator/encyclopedia-approval/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${userData.access_token}`,
          },
        }
      );

      toast.success("Encyclopedia Deleted");
    } catch (error: any) {
      toast.error("Error Occured");
    }
    console.log(userData);
  };
  const handleDeleteAdopt = async (id: any) => {
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/administrator/pet-approval/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${userData.access_token}`,
          },
        }
      );

      toast.success("Adopt Deleted");
      console.log(userData.access_token);
    } catch (error: any) {
      toast.error("Error Occured");
    }
    console.log(userData);
  };

  return (
    <div>
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
          {/* // Display Pet Adoption Data */}
          {adoption?.map((item: any, index: any) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>{item.breed}</TableCell>
              <TableCell>{item.approved ? "Approved" : "Pending"}</TableCell>
              <TableCell className="text-right flex items-end justify-end cursor-pointer">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <BsThreeDotsVertical size={18} />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent>
                    <DropdownMenuItem
                      onClick={() => handleApprovedAdopt(item.id)}
                      className="text-green-500 cursor-pointer"
                    >
                      <FcApproval className="mr-2" />
                      Approve
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDeleteAdopt(item.id)}
                      className="text-red-500 cursor-pointer"
                    >
                      <MdDeleteForever className="mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
          {/* Display Encyclopedia Data */}
          {encyclopedia?.map((item: any, index: any) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>Encyclopedia</TableCell>
              <TableCell>{item.approved ? "Approved" : "Pending"}</TableCell>
              <TableCell className="text-right flex items-end justify-end cursor-pointer">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <BsThreeDotsVertical size={18} />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent>
                    <DropdownMenuItem
                      onClick={() => handleApprovedEncyclopedia(item.id)}
                      className="text-green-500 cursor-pointer"
                    >
                      <FcApproval className="mr-2" />
                      Approve
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDeleteEncyclopedia(item.id)}
                      className="text-red-500 cursor-pointer"
                    >
                      <MdDeleteForever className="mr-2" />
                      Delete
                    </DropdownMenuItem>
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
