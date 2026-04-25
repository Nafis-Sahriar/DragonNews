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
        
        // console.log(data);

        const {email,password} = data;

        // console.log(email, password);

        const { data:res, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
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

    // console.log(errors);


  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-300">
      <div className="p-10 rounded-xl bg-white ">
        <h2 className="font-bold text-3xl text-center mb-15">Login Your Account</h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleLogInFunc)}>
          <fieldset className="fieldset">

                <legend className="fieldset-legend">E-Mail</legend>

                <input {...register("email", {required:"Email is required to log in."})} type="email" className="input" placeholder="Enter Your Email" />
                {errors.email? <p className="text-red-700">{errors.email.message}</p>:<></>}

          </fieldset>

          <fieldset className="fieldset">

                <legend className="fieldset-legend">Password</legend>

                <input {...register("password",{required:"Password Required for log in."})} type={isShowPassword? "text" : "password"} className="input" placeholder="Enter Your Password" />
                
                <div onClick={()=>setShowPassword(!isShowPassword)} className="flex items-center gap-2 hover:cursor-pointer">
                     {isShowPassword? <p className="flex items-center gap-2"><FaEyeSlash />Hide Password</p> : <p className="flex items-center gap-2"> <FaEye  />Show Password</p>}
                </div>
               

                {errors.password && <p className="text-red-700">{errors.password.message}</p>}

          </fieldset>

          <button className="btn btn-xs sm:btn-sm md:btn-md bg-black text-white  w-full">Log In</button>
        </form>

            <p className="font-bold mt-5 text-sm">Don&apos;t have an account? <Link href={'/register'} className="text-red-700 font-bold">Register</Link></p>

      </div>
    </div>
  );
};

export default LogInPage;
