import PetsCardTemp from "../PetsCardTemp";

const PopularPetBreads = () => {
  return (
    <div className="p-2">
      <h2 className="text-3xl font-semibold mb-12 text-center">
        Popular Pet Breeds
      </h2>
      <h4 className="font-semibold text-xl mb-4">Dogs:</h4>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
        {Array.from({ length: 7 }).map((_, i) => (
          <PetsCardTemp key={i} />
        ))}
      </div>
      <h4 className="font-semibold text-xl mb-4">Cats:</h4>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
        {Array.from({ length: 7 }).map((_, i) => (
          <PetsCardTemp key={i} />
        ))}
        
      </div>
    </div>
  );
};

export default PopularPetBreads;

