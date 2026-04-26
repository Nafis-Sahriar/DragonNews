'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const LogInPage = () => {

    const [isShowPassword, setShowPassword] = useState(false);

    const {register, handleSubmit , formState:{errors}} = useForm();

    const handleLogInFunc =async (data) =>
    {
        const {email,password} = data;

        const { data:res, error } = await authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: true,
            callbackURL: "/",
        });

        if(error)
        {
            toast.warning(error.message)
        }
        if(res)
        {
            toast.success(" Welcome! ")
        }
    }

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100 px-3 sm:px-4">

      <div className="w-full max-w-md sm:max-w-lg p-5 sm:p-8 md:p-10 rounded-xl bg-white shadow-md space-y-5">

        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl text-center">
          Login Your Account
        </h2>

        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit(handleLogInFunc)}>

          <fieldset className="fieldset space-y-1">

                <legend className="fieldset-legend text-sm sm:text-base">E-Mail</legend>

                <input 
                  {...register("email", {required:"Email is required to log in."})}
                  type="email"
                  className="input w-full text-sm sm:text-base"
                  placeholder="Enter Your Email"
                />

                {errors.email? <p className="text-red-700 text-xs sm:text-sm">{errors.email.message}</p>:<></>}

          </fieldset>

          <fieldset className="fieldset space-y-1">

                <legend className="fieldset-legend text-sm sm:text-base">Password</legend>

                <input 
                  {...register("password",{required:"Password Required for log in."})}
                  type={isShowPassword? "text" : "password"}
                  className="input w-full text-sm sm:text-base"
                  placeholder="Enter Your Password"
                />
                
                <div 
                  onClick={()=>setShowPassword(!isShowPassword)}
                  className="flex items-center gap-2 hover:cursor-pointer text-xs sm:text-sm text-gray-600"
                >
                     {isShowPassword
                       ? <p className="flex items-center gap-2"><FaEyeSlash />Hide Password</p>
                       : <p className="flex items-center gap-2"><FaEye />Show Password</p>
                     }
                </div>

                {errors.password && <p className="text-red-700 text-xs sm:text-sm">{errors.password.message}</p>}

          </fieldset>

          <button className="btn w-full bg-black text-white text-sm sm:text-base py-2 sm:py-3">
            Log In
          </button>

        </form>

        <p className="font-semibold text-xs sm:text-sm text-center">
          Don&apos;t have an account?{" "}
          <Link href={'/register'} className="text-red-700 font-bold">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default LogInPage;