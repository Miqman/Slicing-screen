import { useNavigate } from "react-router-dom";
import FormLoginRegis from "../components/FormLoginRegis";

export default function RegisterPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-bg-login bg-cover h-[994px]">
        <div className="flex flex-col justify-between h-[830px] px-6 text-center">
          <div className="">
            <h4 className="mt-36 text-[51px] font-bold tracking-[0.64px] text-white text-center">
              Audio
            </h4>
            <p class="leading-normal text-gray-100 text-center">
              It's modular and designed to last
            </p>
          </div>

          <div className="">
            <FormLoginRegis register={true}></FormLoginRegis>

            <div className="mt-6">
              <span className="text-white">
                If you have an account?{" "}
                <a
                  href=""
                  className="text-[#0ACF83] underline"
                  onClick={() => navigate("/")}
                >
                  Sign in here
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
