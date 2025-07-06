import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BrowseCityWrapper from "../wrappers/BrowseCityWrapper";
import BrowseOfficeWrapper from "../wrappers/BrowseOfficeWrapper";

export default function Browse() {
  return (
    <>
      <Navbar />
      <header className="flex flex-col w-full">
        <section
          id="Hero-Banner"
          className="hero-section relative flex h-[720px] -mb-[93px] overflow-hidden"
        >
          <div
            id="Hero-Text"
            className="hero-content relative flex flex-col w-full max-w-[650px] h-fit rounded-[30px] border border-[#E0DEF7] p-10 gap-[30px] bg-white/95 backdrop-blur-sm mt-[70px] ml-[calc((100%-1130px)/2)] z-10 shadow-2xl"
          >
            <div className="hero-badge flex items-center w-fit rounded-full py-2 px-4 gap-[10px] bg-[#000929] animate-pulse">
              <img
                src="/assets/images/icons/crown-white.svg"
                className="w-5 h-5"
                alt="icon"
              />
              <span className="font-semibold text-white">
                We’ve won top productivity 500 fortunes
              </span>
            </div>
            <h1 className="hero-title font-extrabold text-[50px] leading-[60px] bg-gradient-to-r from-[#000929] to-[#0D903A] bg-clip-text text-transparent">
              All Great Offices.
              <br />
              Grow Your Business.
            </h1>
            <p className="hero-description text-lg leading-8 text-[#000929]/80">
              Kantor yang tepat dapat memberikan impact pekerjaan menjadi lebih
              baik dan sehat dalam tumbuhkan karir.
            </p>
            <div className="hero-actions flex items-center gap-5">
              <a
                href="#"
                className="hero-btn-primary flex items-center rounded-full p-[20px_26px] gap-3 bg-[#0D903A] hover:bg-[#0B7A31] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <img
                  src="/assets/images/icons/slider-horizontal-white.svg"
                  className="w-[30px] h-[30px]"
                  alt="icon"
                />
                <span className="font-bold text-xl leading-[30px] text-[#F7F7FD]">
                  Explore Now
                </span>
              </a>
              <a
                href="#"
                className="hero-btn-secondary flex items-center rounded-full border border-[#000929] p-[20px_26px] gap-3 bg-white hover:bg-[#F7F7FD] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <img
                  src="/assets/images/icons/video-octagon.svg"
                  className="w-[30px] h-[30px]"
                  alt="icon"
                />
                <span className="font-semibold text-xl leading-[30px]">
                  Watch Story
                </span>
              </a>
            </div>
          </div>
          <div
            id="Hero-Image"
            className="hero-image absolute right-0 w-[calc(100%-((100%-1130px)/2)-305px)] h-[720px] rounded-bl-[40px] overflow-hidden"
          >
            <div className="hero-image-overlay absolute inset-0 bg-gradient-to-l from-transparent via-[#0D903A]/10 to-[#0D903A]/20 z-10"></div>
            <img
              src="/assets/images/backgrounds/banner.png"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              alt="hero background"
            />
          </div>
        </section>
        <section className="stats-section flex flex-col pt-[100px] pb-10 px-[120px] gap-10 bg-[#0D903A] relative overflow-hidden">
          {/* Background Pattern */}
          <div className="stats-background-pattern absolute inset-0 opacity-10">
            <div className="stats-pattern-grid"></div>
          </div>

          <div className="stats-logos-container logo-container flex items-center justify-center flex-wrap max-w-[1130px] h-[38px] mx-auto gap-[60px] relative z-10">
            <img
              src="/assets/images/logos/TESLA.svg"
              alt="clients logo"
              className="stats-logo hover:scale-110 transition-transform duration-300 filter brightness-0 invert opacity-80 hover:opacity-100"
            />
            <img
              src="/assets/images/logos/Libra 2.svg"
              alt="clients logo"
              className="stats-logo hover:scale-110 transition-transform duration-300 filter brightness-0 invert opacity-80 hover:opacity-100"
            />
            <img
              src="/assets/images/logos/Binance logo.svg"
              alt="clients logo"
              className="stats-logo hover:scale-110 transition-transform duration-300 filter brightness-0 invert opacity-80 hover:opacity-100"
            />
            <img
              src="/assets/images/logos/Facebook 7.svg"
              alt="clients logo"
              className="stats-logo hover:scale-110 transition-transform duration-300 filter brightness-0 invert opacity-80 hover:opacity-100"
            />
            <img
              src="/assets/images/logos/Microsoft 6.svg"
              alt="clients logo"
              className="stats-logo hover:scale-110 transition-transform duration-300 filter brightness-0 invert opacity-80 hover:opacity-100"
            />
          </div>
          <div className="stats-metrics-container flex justify-center gap-[50px] relative z-10">
            <div className="stats-metric-item flex flex-col gap-[2px] text-center group">
              <p className="stats-metric-label text-xl leading-[30px] text-[#F7F7FD] group-hover:text-white transition-colors duration-300">
                Comfortable Space
              </p>
              <p className="stats-metric-value font-bold text-[38px] leading-[57px] text-white group-hover:scale-110 transition-transform duration-300">
                580M+
              </p>
            </div>
            <div className="stats-metric-item flex flex-col gap-[2px] text-center group">
              <p className="stats-metric-label text-xl leading-[30px] text-[#F7F7FD] group-hover:text-white transition-colors duration-300">
                Startups Succeed
              </p>
              <p className="stats-metric-value font-bold text-[38px] leading-[57px] text-white group-hover:scale-110 transition-transform duration-300">
                98%
              </p>
            </div>
            <div className="stats-metric-item flex flex-col gap-[2px] text-center group">
              <p className="stats-metric-label text-xl leading-[30px] text-[#F7F7FD] group-hover:text-white transition-colors duration-300">
                Countries
              </p>
              <p className="stats-metric-value font-bold text-[38px] leading-[57px] text-white group-hover:scale-110 transition-transform duration-300">
                90+
              </p>
            </div>
            <div className="stats-metric-item flex flex-col gap-[2px] text-center group">
              <p className="stats-metric-label text-xl leading-[30px] text-[#F7F7FD] group-hover:text-white transition-colors duration-300">
                Supportive Events
              </p>
              <p className="stats-metric-value font-bold text-[38px] leading-[57px] text-white group-hover:scale-110 transition-transform duration-300">
                139M+
              </p>
            </div>
          </div>
        </section>
      </header>
      <BrowseCityWrapper />
      <section id="Benefits" className="benefits-section">
        <div className="benefits-container">
          <div className="benefits-header">
            <h2 className="font-bold text-[32px] leading-[48px] text-nowrap">
              We Might Good <br />
              For Your Business
            </h2>
          </div>
          <div className="benefits-grid">
            <div className="benefits-card">
              <div className="benefits-icon-wrapper">
                <img
                  src="/assets/images/icons/security-user.svg"
                  className="benefits-icon"
                  alt="Privacy First Design"
                />
              </div>
              <div className="benefits-content">
                <h3 className="benefits-title">Privacy-First Design</h3>
                <p className="benefits-description">
                  Advanced security protocols and privacy controls to protect
                  your business data and operations.
                </p>
              </div>
            </div>
            <div className="benefits-card">
              <div className="benefits-icon-wrapper">
                <img
                  src="/assets/images/icons/group.svg"
                  className="benefits-icon"
                  alt="Easy Move Access"
                />
              </div>
              <div className="benefits-content">
                <h3 className="benefits-title">Easy Move Access</h3>
                <p className="benefits-description">
                  Seamless transition and flexible access solutions for your
                  team's changing needs.
                </p>
              </div>
            </div>
            <div className="benefits-card">
              <div className="benefits-icon-wrapper">
                <img
                  src="/assets/images/icons/3dcube.svg"
                  className="benefits-icon"
                  alt="Flexibility Spaces"
                />
              </div>
              <div className="benefits-content">
                <h3 className="benefits-title">Flexibility Spaces</h3>
                <p className="benefits-description">
                  Adaptable workspace configurations that grow and evolve with
                  your business requirements.
                </p>
              </div>
            </div>
            <div className="benefits-card">
              <div className="benefits-icon-wrapper">
                <img
                  src="/assets/images/icons/cup.svg"
                  className="benefits-icon"
                  alt="Top-Rated Office"
                />
              </div>
              <div className="benefits-content">
                <h3 className="benefits-title">Top-Rated Office</h3>
                <p className="benefits-description">
                  Premium office spaces with excellent ratings and testimonials
                  from satisfied businesses.
                </p>
              </div>
            </div>
            <div className="benefits-card">
              <div className="benefits-icon-wrapper">
                <img
                  src="/assets/images/icons/coffee.svg"
                  className="benefits-icon"
                  alt="Extra Snacks Available"
                />
              </div>
              <div className="benefits-content">
                <h3 className="benefits-title">Extra Snacks Available</h3>
                <p className="benefits-description">
                  Complimentary refreshments and snacks to keep your team
                  energized throughout the day.
                </p>
              </div>
            </div>
            <div className="benefits-card">
              <div className="benefits-icon-wrapper">
                <img
                  src="/assets/images/icons/home-trend-up.svg"
                  className="benefits-icon"
                  alt="Sustain for Business"
                />
              </div>
              <div className="benefits-content">
                <h3 className="benefits-title">Sustain for Business</h3>
                <p className="benefits-description">
                  Eco-friendly and sustainable office solutions that align with
                  your corporate values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BrowseOfficeWrapper />
      <Footer />
    </>
  );
}
