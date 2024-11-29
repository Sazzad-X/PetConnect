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
import AddNewEncyloPedia from "./AddNewEncyloPedia";


const ProductList = () => {
  const Data = [
    {
      title: "Night Fury",
      category: "Dog",
      price: "$250.00",
      status: "Published",
    },
    {
      title: "Night Fury",
      category: "Cat",
      price: "$250.00",
      status: "Pending",
    },
    {
      title: "Night Fury",
      category: "Bird",
      price: "$250.00",
      status: "Unpublished",
    },
    {
      title: "Night Fury",
      category: "Horse",
      price: "$250.00",
      status: "Pending",
    },
    {
      title: "Night Fury",
      category: "Dog",
      price: "$250.00",
      status: "Published",
    },
    {
      title: "Night Fury",
      category: "Cat",
      price: "$250.00",
      status: "Pending",
    },
    {
      title: "Night Fury",
      category: "Bird",
      price: "$250.00",
      status: "Unpublished",
    },
    {
      title: "Night Fury",
      category: "Horse",
      price: "$250.00",
      status: "Pending",
    },
  ];
  return (
    <div>
      <div className="flex items-center space-x-3">
        {/* addPet */}
        <AddNewPet />
        {/* addEncylopedia */}
        <AddNewEncyloPedia />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Pet Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Data.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell className="text-right flex items-end justify-end cursor-pointer ">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <BsThreeDotsVertical size={18} />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent>
                    <DropdownMenuItem className="text-red-500 cursor-pointer">
                      <MdDeleteForever className="mr-2" />
                      Delete
                    </DropdownMenuItem>

                    <EditProduct />
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
