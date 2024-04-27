import TouristsSpotCard from "../TouristsSpotCard/TouristsSpotCard";

export default function TouristsSpot({ data }) {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold md:mt-4 py-4">
        Explore The World With Us
      </h1>
      
      <div className="grid md:grid-cols-2 w-full gap-4">
        {data?.map((item) => (
          <TouristsSpotCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
