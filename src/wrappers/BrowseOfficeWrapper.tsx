import { useEffect, useState } from "react";
import OfficeCard from "../components/OfficeCard";
import { Office } from "../types/type";
import { Link } from "react-router-dom";
import apiClient from "../services/apiService";

export default function BrowseOfficeWrapper() {
  const [offices, setOffices] = useState<Office[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiClient
      .get("offices")
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
    return (
      <section className="browse-office-section">
        <div className="browse-office-loading">Loading offices...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="browse-office-section">
        <div className="browse-office-error">
          Error loading offices: {error}
        </div>
      </section>
    );
  }

  return (
    <section id="Fresh-Space" className="browse-office-section">
      <div className="browse-office-header">
        <h2 className="browse-office-title font-bold text-[32px] leading-[48px] text-nowrap">
          Browse Our Fresh Space.
          <br />
          For Your Better Productivity.
        </h2>
        <a href="#" className="browse-office-explore-btn">
          View All Offices
        </a>
      </div>
      <div className="browse-office-grid-container">
        <div className="browse-office-grid">
          {offices.map((office) => (
            <Link key={office.id} to={`/office/${office.slug}`}>
              <OfficeCard office={office} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
