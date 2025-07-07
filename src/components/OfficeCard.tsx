import { Office } from "../types/type";

export default function OfficeCard({ office }: OfficeCardProps) {
  const baseURL = "http://localhost:8000/storage";

  return (
    <div className="card">
      <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden shadow-lg">
        <div className="thumbnail-container relative w-full h-[140px]">
          <p className="absolute top-5 left-5 w-fit rounded-full px-4 py-2 bg-[#0D903A] font-bold text-[10px] leading-[14px] text-[#F7F7FD]">
            Popular
          </p>
          <img
            src={`${baseURL}/${office.thumbnail}`}
            className="w-full h-full object-cover"
            alt="thumbnails"
          />
        </div>
        <div className="card-detail-container flex flex-col p-4 pb-4 gap-3">
          <h3 className="line-clamp-2 font-bold text-[20px] leading-[22px]">
            {office.name}
          </h3>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-[16px] leading-[20px]">
              Rp {office.price.toLocaleString("id-ID")}
            </p>
            <div className="flex items-center justify-end gap-2">
              <p className="font-semibold text-[10px]">
                {office.duration} days
              </p>
              <img
                src="/assets/images/icons/clock.svg"
                className="w-3 h-3"
                alt="icon"
              />
            </div>
          </div>
          <hr className="border-[#F6F5FD]" />
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-2">
              <img
                src="/assets/images/icons/location.svg"
                className="w-3 h-3"
                alt="icon"
              />
              <p className="font-semibold text-[10px]">{office.city.name}</p>
            </div>
            <div className="flex items-center justify-end gap-2">
              <p className="font-semibold text-[10px]">4.5/5</p>
              <img
                src="/assets/images/icons/Star 1.svg"
                className="w-3 h-3"
                alt="icon"
              />
            </div>
          </div>
          <hr className="border-[#F6F5FD]" />
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-2">
              <img
                src="/assets/images/icons/wifi.svg"
                className="w-3 h-3"
                alt="icon"
              />
              <p className="font-semibold text-[10px]">Fast-Connection</p>
            </div>
            <div className="flex items-center justify-end gap-2">
              <img
                src="/assets/images/icons/security-user.svg"
                className="w-3 h-3"
                alt="icon"
              />
              <p className="font-semibold text-[10px]">Secure 100%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface OfficeCardProps {
  office: Office;
}
