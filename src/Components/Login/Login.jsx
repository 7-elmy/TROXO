import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline, IoLockClosedOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
export default function Login() {
  let [showPassword, setShowPassword] = useState(false);
  return (
    <section>
      <div className="p-3">
        <img src={logo} alt="logo" loading="lazy" />
      </div>
      <div className="flex justify-center items-center h-[90vh] p-8 md:p-0">
        <div className="">
          <h1 className="font-roboto text-[40px] font-bold leading-[48px] text-left text-[#4D1A2D]">
            Get Started Now
          </h1>
          <p className="font-roboto text-[14px] font-medium leading-[20px] text-[#7E7D80] text-left ">
            {" "}
            Please enter your information to access your account.
          </p>
<form className="form-control space-y-8 mt-8">

          <label className="input input-bordered border border-gray-400 rounded-md p-1 flex items-center gap-2 relative my-3">
        
            <MdOutlineEmail className="size-4 text-base-content/40 text-gray-400"/>
            <input
            //   value={values.password}
              type={showPassword ? "text" : "password"}
              className="grow placeholder:text-[#92929D] p-1 placeholder:font-poppins placeholder:text-[14px] outline-none bg-transparent  placeholder:leading-[27px] placeholder:text-left"
              placeholder="Enter Your Email"
            //   onChange={handleChange}
            //   onBlur={handleBlur}
              name="password"
            />
         
          </label>

          <div>
          <label className="input input-bordered border border-gray-400 rounded-md p-1 flex items-center gap-2 relative my-3">
            {/* <CiLock className="size-4 text-base-content/40 text-gray-400"/> */}
            <IoLockClosedOutline className="size-4 text-base-content/40 text-gray-400" />
            <input
            //   value={values.password}
              type={showPassword ? "text" : "password"}
              className="grow placeholder:text-[#92929D] p-1 placeholder:font-poppins placeholder:text-[14px] outline-none bg-transparent  placeholder:leading-[27px] placeholder:text-left"
              placeholder="Enter Your Password"
            //   onChange={handleChange}
            //   onBlur={handleBlur}
              name="password"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? (
                <IoEyeOutline  className="size-4 text-base-content/4 text-gray-400"/>
              ) : (
                <FaRegEyeSlash className="size-4 text-base-content/4 text-gray-400" />
              
              )}
            </button>
          </label>
          <Link to={"/forget-password"} className="text-gray-500 text-[12px] font-roboto  font-normal  text-left">Forget Password</Link>

          </div>



          <button className="w-full bg-[#FFDDDD] text-[#4D1A2D] text-center p-2 rounded-md">Login</button>

</form>
<div className="flex justify-center items-center gap-8 my-4">
    <hr className="border  w-[20%]" />
    <span className="text-gray-300">or</span>
    <hr className="border  w-[20%]" />
   
</div>

<p className="font-roboto text-[16px] my-6 font-normal leading-[27.2px] text-center text-gray-300 ">Don't have an account?<Link to="/auth/signup">Signup Free!</Link> </p>
        </div>
      </div>
    </section>
  );
}
