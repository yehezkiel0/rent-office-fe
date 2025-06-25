import { useEffect, useState } from "react";
import OfficeCard from "../components/OfficeCard";
import axios from "axios";
import { Office } from "../types/type";
import { Link } from "react-router-dom";
export default function BrowseOfficeWrapper() {
  const [offices, setOffices] = useState<Office[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/offices", {
        headers: {
          "X-API-KEY": "awawf2244afafakkh2",
        },
      })
      .then((response) => {
        setOffices(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data: {error}</p>;
  }
  return (
    <section
      id="Fresh-Space"
      className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[100px] mb-[120px]"
    >
      <h2 className="font-bold text-[32px] leading-[48px] text-nowrap text-center">
        Browse Our Fresh Space.
        <br />
        For Your Better Productivity.
      </h2>
      <div className="grid grid-cols-3 gap-[30px]">
        {offices.map((office) => (
          <Link to={`/office/${office.slug}`} key={office.id}>
            <OfficeCard office={office} />
          </Link>
        ))}
      </div>
    </section>
  );
}
