import Image from "next/image";
import { IoIosStarOutline } from "react-icons/io";
import { RiShieldCheckFill } from "react-icons/ri";

export default function Mentors() {
  return (
    <section className="mt-[7rem]">
      <div className="mx-[12rem]">
        {/* Heading */}
        <h1 className="text-[2.5rem] font-semibold mb-[2.8rem] text-center">
          <span className="text-yellow-500">Right Guidence</span>
          <span className="text-blue-950"> From the Right People</span>
        </h1>
        <p className="text-center text-[1.2rem] text-blue-950/70 font-medium mb-[2.2rem]">
          Lagends are not made by fate but by hard work and unmatched
          mentorship. Chanykya and his desciple Chandragupta are the perfect
          example of it. Mentorsity is about providing each larner his/her
          Chankya
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-[1.2rem] border-[0.188rem] rounded-t-full rounded-b-full h-[47.813rem] border-yellow-500"></div>
        <div className="absolute right-[1.2rem] border-[0.188rem] rounded-t-full rounded-b-full h-[47.813rem] border-yellow-500"></div>
        <div className="mt-[3.1rem] mx-[3.9rem] grid grid-cols-3 grid-rows-2 gap-[3.5rem]">
          <div className="relative shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] rounded-md px-[1.4rem] py-[1.9rem]">
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <Image
                  src="/pro-image.jpg"
                  width={100}
                  height={100}
                  alt="Profile Image"
                  className="rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
                />
              </div>
              <div className="col-span-2 mt-[0.9rem]">
                <h2 className="font-semibold ml-[0.6rem]">Basant Rawat</h2>
                <p className="font-medium ml-[0.6rem] mt-[0.3rem] text-[0.69rem]">
                  Senior software engineer at ebay mentor at computer
                  application
                </p>
                <div className="ml-[0.6rem] mt-[0.6rem]">
                  <IoIosStarOutline />
                </div>
              </div>
            </div>
            <p className="mt-[1.3rem] text-[0.8rem]">3+ years experiences</p>
            <p className="mt-[1.3rem] text-[0.69rem] text-slate-500 font-medium text-justify">
              Many a times we need unwavering support and a listening ear to
              help us navigate our journey. I am here to empower you. Let us
              make your goals visions and dreams turn into reality TOGETHER!
            </p>

            <div className="mt-[1.3rem] flex justify-between">
              <button className="font-medium text-[0.9rem] rounded-full border-[0.9px] border-blue-900 px-[1.1rem] py-[0.58rem]">
                View profile
              </button>
              <button className="font-medium text-[0.9rem] rounded-full bg-blue-950 text-white px-[1.2rem] py-[0.58rem] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                Book now
              </button>
            </div>
            <div className="absolute top-[0.6rem] -right-[0.6rem] py-[0.4rem] px-[0.6rem] bg-green-200 rounded-l-2xl rounded-tr-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
              <div className="flex items-center justify-center gap-[0.2rem] text-green-800">
                <RiShieldCheckFill className="text-[1.1rem]" />
                <span className="font-bold text-[0.9rem]">2280+</span>
              </div>
              <p className="text-[0.9rem] text-green-600 -mt-[0.3rem]">
                Counselling
              </p>
            </div>
          </div>
          <div className="relative shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] rounded-md px-[1.4rem] py-[1.9rem]">
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <Image
                  src="/pro-image.jpg"
                  width={100}
                  height={100}
                  alt="Profile Image"
                  className="rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
                />
              </div>
              <div className="col-span-2 mt-[0.9rem]">
                <h2 className="font-semibold ml-[0.6rem]">Basant Rawat</h2>
                <p className="font-medium ml-[0.6rem] mt-[0.3rem] text-[0.69rem]">
                  Senior software engineer at ebay mentor at computer
                  application
                </p>
                <div className="ml-[0.6rem] mt-[0.6rem]">
                  <IoIosStarOutline />
                </div>
              </div>
            </div>
            <p className="mt-[1.3rem] text-[0.8rem]">3+ years experiences</p>
            <p className="mt-[1.3rem] text-[0.69rem] text-slate-500 font-medium text-justify">
              Many a times we need unwavering support and a listening ear to
              help us navigate our journey. I am here to empower you. Let us
              make your goals visions and dreams turn into reality TOGETHER!
            </p>

            <div className="mt-[1.3rem] flex justify-between">
              <button className="font-medium text-[0.9rem] rounded-full border-[0.9px] border-blue-900 px-[1.1rem] py-[0.58rem]">
                View profile
              </button>
              <button className="font-medium text-[0.9rem] rounded-full bg-blue-950 text-white px-[1.2rem] py-[0.58rem] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                Book now
              </button>
            </div>
            <div className="absolute top-[0.6rem] -right-[0.6rem] py-[0.4rem] px-[0.6rem] bg-green-200 rounded-l-2xl rounded-tr-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
              <div className="flex items-center justify-center gap-[0.2rem] text-green-800">
                <RiShieldCheckFill className="text-[1.1rem]" />
                <span className="font-bold text-[0.9rem]">2280+</span>
              </div>
              <p className="text-[0.9rem] text-green-600 -mt-[0.3rem]">
                Counselling
              </p>
            </div>
          </div>
          <div className="relative shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] rounded-md px-[1.4rem] py-[1.9rem]">
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <Image
                  src="/pro-image.jpg"
                  width={100}
                  height={100}
                  alt="Profile Image"
                  className="rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
                />
              </div>
              <div className="col-span-2 mt-[0.9rem]">
                <h2 className="font-semibold ml-[0.6rem]">Basant Rawat</h2>
                <p className="font-medium ml-[0.6rem] mt-[0.3rem] text-[0.69rem]">
                  Senior software engineer at ebay mentor at computer
                  application
                </p>
                <div className="ml-[0.6rem] mt-[0.6rem]">
                  <IoIosStarOutline />
                </div>
              </div>
            </div>
            <p className="mt-[1.3rem] text-[0.8rem]">3+ years experiences</p>
            <p className="mt-[1.3rem] text-[0.69rem] text-slate-500 font-medium text-justify">
              Many a times we need unwavering support and a listening ear to
              help us navigate our journey. I am here to empower you. Let us
              make your goals visions and dreams turn into reality TOGETHER!
            </p>

            <div className="mt-[1.3rem] flex justify-between">
              <button className="font-medium text-[0.9rem] rounded-full border-[0.9px] border-blue-900 px-[1.1rem] py-[0.58rem]">
                View profile
              </button>
              <button className="font-medium text-[0.9rem] rounded-full bg-blue-950 text-white px-[1.2rem] py-[0.58rem] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                Book now
              </button>
            </div>
            <div className="absolute top-[0.6rem] -right-[0.6rem] py-[0.4rem] px-[0.6rem] bg-green-200 rounded-l-2xl rounded-tr-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
              <div className="flex items-center justify-center gap-[0.2rem] text-green-800">
                <RiShieldCheckFill className="text-[1.1rem]" />
                <span className="font-bold text-[0.9rem]">2280+</span>
              </div>
              <p className="text-[0.9rem] text-green-600 -mt-[0.3rem]">
                Counselling
              </p>
            </div>
          </div>
          <div className="relative shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] rounded-md px-[1.4rem] py-[1.9rem]">
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <Image
                  src="/pro-image.jpg"
                  width={100}
                  height={100}
                  alt="Profile Image"
                  className="rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
                />
              </div>
              <div className="col-span-2 mt-[0.9rem]">
                <h2 className="font-semibold ml-[0.6rem]">Basant Rawat</h2>
                <p className="font-medium ml-[0.6rem] mt-[0.3rem] text-[0.69rem]">
                  Senior software engineer at ebay mentor at computer
                  application
                </p>
                <div className="ml-[0.6rem] mt-[0.6rem]">
                  <IoIosStarOutline />
                </div>
              </div>
            </div>
            <p className="mt-[1.3rem] text-[0.8rem]">3+ years experiences</p>
            <p className="mt-[1.3rem] text-[0.69rem] text-slate-500 font-medium text-justify">
              Many a times we need unwavering support and a listening ear to
              help us navigate our journey. I am here to empower you. Let us
              make your goals visions and dreams turn into reality TOGETHER!
            </p>

            <div className="mt-[1.3rem] flex justify-between">
              <button className="font-medium text-[0.9rem] rounded-full border-[0.9px] border-blue-900 px-[1.1rem] py-[0.58rem]">
                View profile
              </button>
              <button className="font-medium text-[0.9rem] rounded-full bg-blue-950 text-white px-[1.2rem] py-[0.58rem] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                Book now
              </button>
            </div>
            <div className="absolute top-[0.6rem] -right-[0.6rem] py-[0.4rem] px-[0.6rem] bg-green-200 rounded-l-2xl rounded-tr-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
              <div className="flex items-center justify-center gap-[0.2rem] text-green-800">
                <RiShieldCheckFill className="text-[1.1rem]" />
                <span className="font-bold text-[0.9rem]">2280+</span>
              </div>
              <p className="text-[0.9rem] text-green-600 -mt-[0.3rem]">
                Counselling
              </p>
            </div>
          </div>
          <div className="relative shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] rounded-md px-[1.4rem] py-[1.9rem]">
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <Image
                  src="/pro-image.jpg"
                  width={100}
                  height={100}
                  alt="Profile Image"
                  className="rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
                />
              </div>
              <div className="col-span-2 mt-[0.9rem]">
                <h2 className="font-semibold ml-[0.6rem]">Basant Rawat</h2>
                <p className="font-medium ml-[0.6rem] mt-[0.3rem] text-[0.69rem]">
                  Senior software engineer at ebay mentor at computer
                  application
                </p>
                <div className="ml-[0.6rem] mt-[0.6rem]">
                  <IoIosStarOutline />
                </div>
              </div>
            </div>
            <p className="mt-[1.3rem] text-[0.8rem]">3+ years experiences</p>
            <p className="mt-[1.3rem] text-[0.69rem] text-slate-500 font-medium text-justify">
              Many a times we need unwavering support and a listening ear to
              help us navigate our journey. I am here to empower you. Let us
              make your goals visions and dreams turn into reality TOGETHER!
            </p>

            <div className="mt-[1.3rem] flex justify-between">
              <button className="font-medium text-[0.9rem] rounded-full border-[0.9px] border-blue-900 px-[1.1rem] py-[0.58rem]">
                View profile
              </button>
              <button className="font-medium text-[0.9rem] rounded-full bg-blue-950 text-white px-[1.2rem] py-[0.58rem] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                Book now
              </button>
            </div>
            <div className="absolute top-[0.6rem] -right-[0.6rem] py-[0.4rem] px-[0.6rem] bg-green-200 rounded-l-2xl rounded-tr-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
              <div className="flex items-center justify-center gap-[0.2rem] text-green-800">
                <RiShieldCheckFill className="text-[1.1rem]" />
                <span className="font-bold text-[0.9rem]">2280+</span>
              </div>
              <p className="text-[0.9rem] text-green-600 -mt-[0.3rem]">
                Counselling
              </p>
            </div>
          </div>
          <div className="relative shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] rounded-md px-[1.4rem] py-[1.9rem]">
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <Image
                  src="/pro-image.jpg"
                  width={100}
                  height={100}
                  alt="Profile Image"
                  className="rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
                />
              </div>
              <div className="col-span-2 mt-[0.9rem]">
                <h2 className="font-semibold ml-[0.6rem]">Basant Rawat</h2>
                <p className="font-medium ml-[0.6rem] mt-[0.3rem] text-[0.69rem]">
                  Senior software engineer at ebay mentor at computer
                  application
                </p>
                <div className="ml-[0.6rem] mt-[0.6rem]">
                  <IoIosStarOutline />
                </div>
              </div>
            </div>
            <p className="mt-[1.3rem] text-[0.8rem]">3+ years experiences</p>
            <p className="mt-[1.3rem] text-[0.69rem] text-slate-500 font-medium text-justify">
              Many a times we need unwavering support and a listening ear to
              help us navigate our journey. I am here to empower you. Let us
              make your goals visions and dreams turn into reality TOGETHER!
            </p>

            <div className="mt-[1.3rem] flex justify-between">
              <button className="font-medium text-[0.9rem] rounded-full border-[0.9px] border-blue-900 px-[1.1rem] py-[0.58rem]">
                View profile
              </button>
              <button className="font-medium text-[0.9rem] rounded-full bg-blue-950 text-white px-[1.2rem] py-[0.58rem] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                Book now
              </button>
            </div>
            <div className="absolute top-[0.6rem] -right-[0.6rem] py-[0.4rem] px-[0.6rem] bg-green-200 rounded-l-2xl rounded-tr-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
              <div className="flex items-center justify-center gap-[0.2rem] text-green-800">
                <RiShieldCheckFill className="text-[1.1rem]" />
                <span className="font-bold text-[0.9rem]">2280+</span>
              </div>
              <p className="text-[0.9rem] text-green-600 -mt-[0.3rem]">
                Counselling
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[5.5rem]">
        <button className="font-medium text-[1.5rem] rounded-full bg-blue-950 text-white px-[2rem] py-[0.58rem] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
          Browse more mentors
        </button>
      </div>
    </section>
  );
}
