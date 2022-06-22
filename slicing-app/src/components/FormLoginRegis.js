import { AiFillApple } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

export default function FormLoginRegis({ register }) {
  const navigate = useNavigate();
  return (
    <>
      <div class="mb-6">
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[50px]"
          placeholder="✉ Email"
          required
        />
      </div>

      <div class="mb-6">
        <input
          type="password"
          id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[50px]"
          required
          placeholder="🔒 Password"
        />
      </div>

      {register ? null : (
        <div className="mb-6">
          <a href="" className="text-white font-light">
            Forgot Password
          </a>
        </div>
      )}

      <button
        type="submit"
        className="text-white bg-[#0ACF83] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-[50px]"
        onClick={() => navigate("/home")}
      >
        {register ? "Sign up" : "Sign in"}
      </button>

      {register ? (
        <div className=" flex justify-center mt-12">
          <div className=" flex justify-center items-center h-[52px] w-[52px] bg-slate-50 shadow-sm rounded-lg mx-2">
            <AiFillApple className="w-[30px] h-[30px]"></AiFillApple>
          </div>
          <div className=" flex justify-center items-center h-[52px] w-[52px] bg-slate-50 shadow-sm rounded-lg mx-2">
            <FaFacebookF className="w-[30px] h-[30px] text-blue-500"></FaFacebookF>
          </div>
          <div className=" flex justify-center items-center h-[52px] w-[52px] bg-slate-50 shadow-sm rounded-lg mx-2">
            <FcGoogle className="w-[30px] h-[30px] text-blue-500"></FcGoogle>
          </div>
        </div>
      ) : null}
    </>
  );
}
