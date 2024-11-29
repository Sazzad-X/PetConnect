const AdoptionRate = () => {
  const rates = [
    { type: "Dogs", rate: 75, color: "bg-blue-500" },
    { type: "Cats", rate: 60, color: "bg-green-500" },
    { type: "Birds", rate: 40, color: "bg-yellow-500" },
    { type: "Other", rate: 25, color: "bg-purple-500" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 mb-12">
      {/* Title */}
      <h2 className="text-3xl font-semibold mb-16 text-center">
        Adoption Rates
      </h2>

      {/* Adoption Rate Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {rates.map((rate, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg text-center ${rate.color} text-white`}
          >
            <h3 className="text-lg font-bold mb-2">{rate.type}</h3>
            <p className="text-5xl font-extrabold mb-2">{rate.rate}%</p>
            <p className="text-sm">Adoption Rate</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdoptionRate;
