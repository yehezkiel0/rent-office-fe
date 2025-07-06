import { City } from "../types/type";

export default function CityCard({ city }: CityCardProps) {
  const baseURL = "http://localhost:8000/storage";
  return (
    <div className="city-card">
      <div className="city-card-overlay"></div>
      <div className="city-card-content">
        <h3 className="city-card-title">{city.name}</h3>
        <p className="city-card-subtitle">
          {city.officeSpaces_count} Office
          {city.officeSpaces_count !== 1 ? "s" : ""}
        </p>
      </div>
      <img
        src={`${baseURL}/${city.photo}`}
        className="city-card-image"
        alt={`${city.name} city view`}
      />
    </div>
  );
}

interface CityCardProps {
  city: City;
}
