import { useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <SideBar></SideBar>
      <div className="flex flex-col">
        <div className="px-8">
          <div className="mt-5">
            <p className="text-[16px] leading-5">Hi, Andrea</p>
            <h1 className="font-bold text-[24px] leading-8">
              What are you looking for today?
            </h1>
          </div>
          <div class="my-6">
            <input
              type="email"
              id="email"
              class="bg-[gray-50] border border-[#BABABA] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-[#BABABA] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[50px]"
              placeholder="🔎  Search Headphone"
              required
            />
          </div>
        </div>

        <div className="bg-[#F6F6F6] rounded-t-3xl py-5 relative flex flex-col ">
          <div className="flex mt-7 justify-between overflow-x-auto mx-7 space-x-8">
            <div className="bg-[#0ACF83] p-0 px-3 font-light text-white rounded-xl text-[14px] leading-5 text-center cursor-pointer">
              Headphone
            </div>
            <div className="font-light text-[#7F7F7F] rounded-xl text-[14px] leading-5 text-center cursor-pointer">
              Headband
            </div>
            <div className="font-light text-[#7F7F7F] rounded-xl text-[14px] leading-5 text-center cursor-pointer">
              Earpads
            </div>
            <div className="font-light text-[#7F7F7F] rounded-xl text-[14px] leading-5 text-center cursor-pointer">
              Cable
            </div>
          </div>

          <div className="mt-7 w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide flex">
            <div
              className="bg-white flex flex-row justify-between p-5 rounded-xl mr-8 mx-7 cursor-pointer"
              onClick={() => navigate("/detail/1")}
            >
              <div className="flex flex-col justify-between w-1/2 break-words">
                <h1 className="font-bold text-[22px] leading-8">
                  TMA-2 Modular Headphone
                </h1>
                <p className="text-[#0ACF83] font-bold">Shop now ➡</p>
              </div>
              <div className="w-[117px] h-[135px]">
                <img src={"/headphone.png"} alt="" className=""></img>
              </div>
            </div>
            <div className="bg-white flex flex-row justify-between p-5 rounded-xl mr-8 mx-7 cursor-pointer">
              <div className="flex flex-col justify-between w-1/2 break-words">
                <h1 className="font-bold text-[22px] leading-8">
                  TMA-2 Modular Headphone
                </h1>
                <p className="text-[#0ACF83] font-bold">Shop now ➡</p>
              </div>
              <div className="w-[117px] h-[135px]">
                <img src={"/cable.png"} alt="" className=""></img>
              </div>
            </div>
          </div>

          <div className="flex justify-between px-7 mt-6">
            <h4 className="font-bold text-[16px]">Featured Product</h4>
            <p className="text-[14px]">See All</p>
          </div>

          <div className="flex mt-7 w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
            <div
              className="flex flex-col w-[155px] h-[213px] bg-white rounded-xl py-4 px-2 justify-between mx-7 cursor-pointer"
              onClick={() => navigate("/detail/1")}
            >
              <div className="flex justify-center">
                <img
                  src={"/headphone.png"}
                  alt=""
                  height={125}
                  width={125}
                ></img>
              </div>
              <div>
                <h3 className="text-[14px]">TMA-2 HD Wireless</h3>
                <p className="font-bold text-[12px]">USD 350</p>
              </div>
            </div>
            <div
              className="flex flex-col w-[155px] h-[213px] bg-white rounded-xl py-4 px-2 justify-between mx-7 cursor-pointer "
              onClick={() => navigate("/detail/1")}
            >
              <div className="flex justify-center">
                <img src={"/cable.png"} alt="" height={125} width={125}></img>
              </div>
              <div>
                <h3 className="text-[14px]">TMA-2 HD Wireless</h3>
                <p className="font-bold text-[12px]">USD 350</p>
              </div>
            </div>
            <div className="flex flex-col w-[155px] h-[213px] bg-white rounded-xl py-5 px-2 justify-between mx-7 cursor-pointer">
              <div className="flex justify-center">
                <img src={"/cable.png"} alt="" height={125} width={125}></img>
              </div>
              <div>
                <h3 className="text-[14px]">TMA-2 HD Wireless</h3>
                <p className="font-bold text-[12px]">USD 350</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
