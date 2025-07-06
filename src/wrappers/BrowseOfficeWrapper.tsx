import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
      <div className="browse-office-container">
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
        <div className="browse-office-swiper-container">
          <div className="swiper w-full">
            <div className="swiper-wrapper">
              <Swiper
                direction="horizontal"
                slidesPerView="auto"
                spaceBetween={30}
                slidesOffsetAfter={30}
                slidesOffsetBefore={30}
                className="browse-office-swiper"
              >
                {offices.map((office) => (
                  <SwiperSlide
                    key={office.id}
                    className="!w-fit first-of-type:pl-[calc((100%-1130px-60px)/2)] last-of-type:pr-[calc((100%-1130px-60px)/2)]"
                  >
                    <Link to={`/office/${office.slug}`}>
                      <OfficeCard office={office} />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
