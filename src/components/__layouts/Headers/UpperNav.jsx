import Image from "next/image";

const UpperNavbar = () => {
  return (
    <nav className="container py-[7px] bg-primary hidden md:block">
      <div className="flex justify-between">
        <div className="flex items-center gap-x-[15px]">
          <Image
            src="/assets/gokundu_home/clock.png"
            width={18}
            height={18}
            alt="clock icon"
            className="w-[18px] h-[18px]"
          />
          <p className="text-xs  xl:text-sm font-bold text-white">
            Open Hours: SAT - FRI (09:00 AM - 09:00 PM )
          </p>
        </div>

        <div className="flex items-center gap-x-2 xl:gap-x-4 5xl:gap-x-5">
          <span className="text-xs xl:text-sm font-bold text-white">
          Follow Us:
          </span>
          <div className="flex items-center gap-x-[15px]">
            <Image
              src="/assets/gokundu_home/f.png"
              width={20}
              height={20}
              alt="facebook icon"
              className="w-[20px] h-[20px]"
            />
            <Image
              src="/assets/gokundu_home/x.png"
              width={20}
              height={20}
              alt="x icon"
              className="w-[20px] h-[20px]"
            />
            <Image
              src="/assets/gokundu_home/i.png"
              width={20}
              height={20}
              alt="instragram icon"
              className="w-[20px] h-[20px]"
            />
            <Image
              src="/assets/gokundu_home/l.png"
              width={20}
              height={20}
              alt="linkdin icon"
              className="w-[20px] h-[20px]"
            />
            <Image
              src="/assets/gokundu_home/g.png"
              width={20}
              height={20}
              alt="google icon"
              className="w-[20px] h-[20px]"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UpperNavbar;
