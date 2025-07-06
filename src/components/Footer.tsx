export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-main">
        {/* Company Info */}
        <div className="footer-column">
          <div className="flex items-center gap-3">
            <h3 className="font-bold text-xl text-white">RentOffice</h3>
          </div>
          <p className="text-[#F7F7FD]/80 text-sm leading-relaxed">
            Solusi terbaik untuk kebutuhan kantor modern Anda. Temukan ruang
            kerja yang tepat untuk mengembangkan bisnis.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4 className="font-semibold text-lg text-white">Quick Links</h4>
          <div className="footer-column-links">
            <a
              href="#"
              className="footer-link text-[#F7F7FD]/80 hover:text-[#0D903A] transition-colors text-sm"
            >
              Browse Offices
            </a>
            <a
              href="#"
              className="footer-link text-[#F7F7FD]/80 hover:text-[#0D903A] transition-colors text-sm"
            >
              City Details
            </a>
            <a
              href="#"
              className="footer-link text-[#F7F7FD]/80 hover:text-[#0D903A] transition-colors text-sm"
            >
              Book Office
            </a>
            <a
              href="#"
              className="footer-link text-[#F7F7FD]/80 hover:text-[#0D903A] transition-colors text-sm"
            >
              Check Booking
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h4 className="font-semibold text-lg text-white">Services</h4>
          <div className="footer-column-links">
            <a
              href="#"
              className="footer-link text-[#F7F7FD]/80 hover:text-[#0D903A] transition-colors text-sm"
            >
              Office Rental
            </a>
            <a
              href="#"
              className="footer-link text-[#F7F7FD]/80 hover:text-[#0D903A] transition-colors text-sm"
            >
              Meeting Rooms
            </a>
            <a
              href="#"
              className="footer-link text-[#F7F7FD]/80 hover:text-[#0D903A] transition-colors text-sm"
            >
              Co-working Space
            </a>
            <a
              href="#"
              className="footer-link text-[#F7F7FD]/80 hover:text-[#0D903A] transition-colors text-sm"
            >
              Virtual Office
            </a>
          </div>
        </div>

        {/* Privacy */}
        <div className="footer-column">
          <h4 className="font-semibold text-lg text-white">Privacy</h4>
          <div className="footer-column-links">
            <a
              href="#"
              className="footer-link text-[#F7F7FD]/60 hover:text-[#0D903A] transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="footer-link text-[#F7F7FD]/60 hover:text-[#0D903A] transition-colors text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="footer-link text-[#F7F7FD]/60 hover:text-[#0D903A] transition-colors text-sm"
            >
              Support
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4 className="font-semibold text-lg text-white">Contact Info</h4>
          <div className="footer-column-links">
            <div className="footer-contact-item flex items-center gap-3">
              <img
                src="/assets/images/icons/location.svg"
                alt="Location"
                className="w-5 h-5"
              />
              <span className="text-[#F7F7FD]/80 text-sm">
                Jakarta, Indonesia
              </span>
            </div>
            <div className="footer-contact-item flex items-center gap-3">
              <img
                src="/assets/images/icons/call-green.svg"
                alt="Phone"
                className="w-5 h-5"
              />
              <span className="text-[#F7F7FD]/80 text-sm">
                +62 123 456 7890
              </span>
            </div>
            <div className="footer-contact-item flex items-center gap-3">
              <img
                src="/assets/images/icons/chat-green.svg"
                alt="Email"
                className="w-5 h-5"
              />
              <span className="text-[#F7F7FD]/80 text-sm">
                info@rentoffice.com
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#F7F7FD]/60 text-sm">
            © 2025 RentOffice. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
