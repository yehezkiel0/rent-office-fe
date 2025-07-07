import { Swiper, SwiperSlide } from "swiper/react";
import CityCard from "../components/CityCard";
import { useEffect, useState } from "react";
import { City } from "../types/type";
import { Link } from "react-router-dom";
import apiClient from "../services/apiService";
import { Autoplay } from "swiper/modules";
export default function BrowseCityWrapper() {
  const [cities, setCities] = useState<City[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiClient
      .get("/cities")
      .then((response) => {
        setCities(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="cities-section">
        <div className="cities-loading">Loading cities...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="cities-section">
        <div className="cities-error">Error loading cities: {error}</div>
      </section>
    );
  }

  return (
    <section id="Cities" className="cities-section">
      <div className="cities-header">
        <h2 className="cities-title font-bold text-[32px] leading-[48px] text-nowrap">
          You Can Choose <br />
          Our Favorite Cities
        </h2>
        <a href="#" className="cities-explore-btn">
          Explore All Cities
        </a>
      </div>
      <div className="cities-container">
        <div className="cities-swiper-container">
          <Swiper
            modules={[Autoplay]}
            direction="horizontal"
            slidesPerView="auto"
            spaceBetween={30}
            slidesOffsetAfter={30}
            slidesOffsetBefore={30}
            className="cities-swiper"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
          >
            {cities.map((city) => (
              <SwiperSlide
                key={city.id}
                className="!w-fit first-of-type:pl-[calc((100%-1130px-60px)/2)] last-of-type:pr-[calc((100%-1130px-60px)/2)]"
              >
                <Link to={`/city/${city.slug}`}>
                  <CityCard city={city} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
