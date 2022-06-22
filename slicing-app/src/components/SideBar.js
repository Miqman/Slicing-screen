import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { MdCollectionsBookmark } from "react-icons/md";
import { useState } from "react";
import { FiBarChart2 } from "react-icons/fi";

export default function SideBar() {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);

  function showSidebar() {
    setSidebar(!sidebar);
  }
  function btnHome() {
    navigate(`/`);
  }
  return (
    <>
      <div className="flex h-[60px] justify-between items-center bg-white">
        <Link to="#" className="ml-8 text-2xl">
          <FiBarChart2 className="rotate-90" onClick={showSidebar} />
        </Link>
        <div className="flex items-center">
          <div className="h-[26px] w-[25px] bg-[#0ACF83] text-center rounded-full">
            🔘
          </div>
          <h4 className="font-bold ml-1">Audio</h4>
        </div>
        <div className="overflow-hidden h-10 w-10 rounded-full mr-8">
          <img
            src="https://i.mydramalist.com/dN0b0_5c.jpg"
            alt=""
            className="w-full"
          ></img>
        </div>
      </div>
      <nav
        className={
          sidebar
            ? "flex w-[450px] h-screen justify-center fixed top-0 duration-300 left-0 bg-cyan-500"
            : "flex w-[450px] h-screen justify-center fixed duration-700 top-0 left-[-120%] "
        }
      >
        <ul className="w-full" onClick={showSidebar}>
          <li className="w-full h-[60px] flex justify-start items-center bg-cyan-500">
            <Link to="#" className="ml-8 text-2xl">
              <IoMdClose />
            </Link>
          </li>
          <li className="flex justify-start items-center h-[60px] py-2 pl-[16px]">
            <Link
              to="/"
              onClick={btnHome}
              className=" flex items-center px-4 rounded text-white font-bold w-[95%] h-full hover:bg-cyan-400"
            >
              <IoHome className="text-[20px] ml-8" />
              <span className="ml-[16px]">Home</span>
            </Link>
          </li>
          <li className="flex justify-start items-center h-[60px] py-2 pl-[16px]">
            <Link
              to="/"
              onClick={btnHome}
              className=" flex items-center px-4 rounded text-white font-bold w-[95%] h-full hover:bg-cyan-400"
            >
              <MdCollectionsBookmark className="text-[20px] ml-8" />
              <span className="ml-[16px]">Collection</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
