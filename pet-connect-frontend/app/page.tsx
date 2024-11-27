import AdoptionRate from "@/components/Home/AdoptionRate";
import Hero2 from "@/components/Home/Hero2";
import PopularPetBreads from "@/components/Home/PopularPetBreads";

const page = () => {
  return (
    <div>
      <div className="mx-auto container">
        <Hero2 />
        <AdoptionRate/>
        <PopularPetBreads />
      </div>
    
    </div>
  );
};

export default page;
