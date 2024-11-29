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

const ProductList = () => {

  const Data=[
    {title:"Night Fury",category:"Dog",price:"$250.00",status:"Published"},
    {title:"Night Fury",category:"Cat",price:"$250.00",status:"Pending"},
    {title:"Night Fury",category:"Bird",price:"$250.00",status:"Unpublished"},
    {title:"Night Fury",category:"Horse",price:"$250.00",status:"Pending"},
    {title:"Night Fury",category:"Dog",price:"$250.00",status:"Published"},
    {title:"Night Fury",category:"Cat",price:"$250.00",status:"Pending"},
    {title:"Night Fury",category:"Bird",price:"$250.00",status:"Unpublished"},
    {title:"TolaX",category:"Medicine",price:"$50.00",status:"Pending"},
  ]
  return (
    <div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Pet/Encylopedia</TableHead>
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
                    <DropdownMenuItem className="text-green-500 cursor-pointer">
                      <FcApproval className="mr-2" />
                      Approve
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-500 cursor-pointer">
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
