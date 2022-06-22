import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { RiStarSFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function DetailPage(params) {
  const [overview, setOverview] = useState(true);
  const [feature, setFeature] = useState(false);
  const [spec, setSpec] = useState(false);

  function ovrHandle() {
    setOverview(true);
    setFeature(false);
    setSpec(false);
  }
  function featHandle() {
    setOverview(false);
    setFeature(true);
    setSpec(false);
  }
  function specHandle() {
    setOverview(false);
    setFeature(false);
    setSpec(true);
  }

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div className="flex h-[60px] justify-between items-center bg-white">
        <Link to="/home" className="ml-8 text-2xl">
          <IoIosArrowBack />
        </Link>

        <Link to="#" className="mr-8 text-2xl">
          <IoCartOutline />
        </Link>
      </div>

      <div className="py-5 px-8">
        <p className="text-[#0ACF83] text-[16px] leading-5 font-bold">
          USD 350
        </p>

        <h1 className="uppercase font-bold text-[28px] leading-9">
          TMA-2 HD Wireless
        </h1>
      </div>

      <div className="px-8 mt-5">
        <div className="flex justify-between">
          <div
            className="flex flex-col justify-between items-center cursor-pointer"
            onClick={ovrHandle}
          >
            <p className="text-[16px] leading-8">Overview</p>
            <div
              className={
                overview
                  ? "h-1 w-[30px] bg-[#0ACF83] rounded-full"
                  : "h-1 w-[30px]"
              }
            ></div>
          </div>
          <div
            className="flex flex-col justify-between items-center cursor-pointer"
            onClick={featHandle}
          >
            <p className="text-[16px] leading-8">Features</p>
            <div
              className={
                feature
                  ? "h-1 w-[30px] bg-[#0ACF83] rounded-full"
                  : "h-1 w-[30px]"
              }
            ></div>
          </div>
          <div
            className="flex flex-col justify-between items-center cursor-pointer"
            onClick={specHandle}
          >
            <p className="text-[16px] leading-8">Specification</p>
            <div
              className={
                spec ? "h-1 w-[30px] bg-[#0ACF83] rounded-full" : "h-1 w-[30px]"
              }
            ></div>
          </div>
        </div>
      </div>

      {overview ? (
        <>
          <div className="relative flex">
            <MdChevronLeft
              className="opacity-50 cursor-pointer hover:opacity-100"
              onClick={slideLeft}
              size={40}
            />
            <div
              id="slider"
              className="flex mt-5 px-8 w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
              <div className=" flex">
                <div className="bg-[#F6F6F6] w-[285px] h-[391px] mr-5 rounded-xl flex justify-center items-center">
                  <img
                    src={"/headphone2.png"}
                    alt=""
                    className="h-[285px] w-[247px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                  ></img>
                </div>
                <div className="bg-[#F6F6F6] w-[285px] h-[391px] mr-5 rounded-xl flex justify-center items-center">
                  <img
                    src={"/headphone2.png"}
                    alt=""
                    className="h-[285px] w-[247px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                  ></img>
                </div>
              </div>
            </div>
            <MdChevronRight
              className="opacity-50 cursor-pointer hover:opacity-100"
              onClick={slideRight}
              size={40}
            />
          </div>

          <div className="text-[16px] leading-5 px-8 mt-6 ">Review (102)</div>

          <div className="px-8 mt-6">
            <div className="flex py-3">
              <div className="flex-1 w-44">
                <div className="overflow-hidden h-10 w-10 rounded-full mr-4">
                  <img
                    src="https://i.mydramalist.com/dN0b0_5c.jpg"
                    alt=""
                    className="w-full"
                  ></img>
                </div>
              </div>
              <div className="">
                <div className="flex justify-between">
                  <h4>Medelina</h4>
                  <p>1 Month ago</p>
                </div>
                <div className="flex">
                  <RiStarSFill className="mr-1 text-yellow-400" />
                  <RiStarSFill className="mr-1 text-yellow-400" />
                  <RiStarSFill className="mr-1 text-yellow-400" />
                  <RiStarSFill className="mr-1 text-yellow-400" />
                  <RiStarSFill className="mr-1 text-slate-100" />
                </div>
                <div className="">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex py-3">
              <div className="flex-1 w-44">
                <div className="overflow-hidden h-10 w-10 rounded-full mr-4">
                  <img
                    src="https://i.mydramalist.com/dN0b0_5c.jpg"
                    alt=""
                    className="w-full"
                  ></img>
                </div>
              </div>
              <div className="">
                <div className="flex justify-between">
                  <h4>Medelina</h4>
                  <p>1 Month ago</p>
                </div>
                <div className="flex">
                  <RiStarSFill className="mr-1 text-yellow-400" />
                  <RiStarSFill className="mr-1 text-yellow-400" />
                  <RiStarSFill className="mr-1 text-yellow-400" />
                  <RiStarSFill className="mr-1 text-yellow-400" />
                  <RiStarSFill className="mr-1 text-slate-100" />
                </div>
                <div className="">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex py-3">
              <div className="flex-1 w-44">
                <div className="overflow-hidden h-10 w-10 rounded-full mr-4">
                  <img
                    src="https://i.mydramalist.com/dN0b0_5c.jpg"
                    alt=""
                    className="w-full"
                  ></img>
                </div>
              </div>
              <div className="">
                <div className="flex justify-between">
                  <h4>Medelina</h4>
                  <p>1 Month ago</p>
                </div>
                <div className="flex">
                  <RiStarSFill className="mr-1 text-yellow-400" />
                  <RiStarSFill className="mr-1 text-yellow-400" />
                  <RiStarSFill className="mr-1 text-yellow-400" />
                  <RiStarSFill className="mr-1 text-yellow-400" />
                  <RiStarSFill className="mr-1 text-slate-100" />
                </div>
                <div className="">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-[16px] leading-5 px-8 mt-6 text-center">
            See All Review
          </div>

          <div className="h-[319px] bg-[#F6F6F6] px-8 mt-6 py-4">
            <div className="flex justify-between mt-6 cursor-pointer">
              <h4>Another product</h4>
              <p>See all</p>
            </div>

            <div className="flex mt-7 w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
              <div className="flex flex-col w-[155px] h-[213px] bg-white rounded-xl py-4 px-2 justify-between mx-7 cursor-pointer">
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
              <div className="flex flex-col w-[155px] h-[213px] bg-white rounded-xl py-4 px-2 justify-between mx-7 cursor-pointer">
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
        </>
      ) : null}

      {feature ? (
        <>
          <div className="px-8 py-2 my-6">
            <div className="">
              <h1 className="font-bold mb-3">Highly Detailed Audio</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
                <br />
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>

            <div className="mt-6">
              <div className="flex py-3 my-2">
                <div className="flex-1 w-40">
                  <div className="rounded-lg mr-4 w-[99x] h-[100px] bg-red-100">
                    <img src={"/aptx.png"} alt=""></img>
                  </div>
                </div>

                <div className="flex-2 w-96">
                  <div className="mb-2">
                    <h1 className="font-bold leading-6 text-[16px]">
                      APTX HD WIRELESS AUDIO
                    </h1>
                  </div>
                  <div className="">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex py-3">
                <div className="flex-1 w-40">
                  <div className="rounded-lg mr-4 w-[99x] h-[100px] bg-red-100">
                    <img src={"/aptx2.png"} alt=""></img>
                  </div>
                </div>

                <div className="flex-2 w-96 my-2">
                  <div className="mb-2">
                    <h1 className="font-bold leading-6 text-[16px] uppercase">
                      ultra soft with alcantara
                    </h1>
                  </div>
                  <div className="">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

      <div className="mt-6 px-8 py-4">
        <div className="cursor-pointer text-white font-bold text-center p-4 bg-[#0ACF83] h-[50px] rounded-2xl">
          Add To Cart
        </div>
      </div>
    </>
  );
}
