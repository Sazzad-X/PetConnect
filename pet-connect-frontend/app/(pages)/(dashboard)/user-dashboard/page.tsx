import Link from "next/link";
import DataChart from "./DataChart";
import DataTable from "./DataTable";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default () => {
  return (
    <div className="max-w-7xl mx-auto p-2 mt-8">
      <Link href="/">
        <Button className="mb-4">
          <ArrowLeft className="mr-2" />
          Back
        </Button>
      </Link>
      <DataChart />
      <DataTable />
    </div>
  );
};
