'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const RegisterPage = () => {

    const {register, handleSubmit , formState:{errors}} = useForm();

    const HandleRegisterFunc =async (data) =>
    {
        const {name, email, password, photoURL} = data;
        console.log(name);

        const {data:res, error} = await authClient.signUp.email({
            name:name,
            email:email,
            password:password,
            image: photoURL,
            callbackURL: "/login"
        })

        console.log(res, error);

        if(error)
        {
            toast.warning(error.message)
        }
        if(res)
        {
           toast.success("Successfully Signed Up.")
        }
    }

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100 px-3 sm:px-4">

      <div className="w-full max-w-md sm:max-w-lg p-5 sm:p-8 md:p-10 rounded-xl bg-white shadow-md space-y-5">

        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl text-center">
          Register Your Account
        </h2>

        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit(HandleRegisterFunc)}>

          <fieldset className="fieldset space-y-1">

                <legend className="fieldset-legend text-sm sm:text-base">Name</legend>

                <input
                  {...register("name", {required:"Name Can Not Be Empty"})}
                  type="text"
                  className="input w-full text-sm sm:text-base"
                  placeholder="Enter Your Full-Name"
                />

                {errors.name? <p className="text-red-700 text-xs sm:text-sm">{errors.name.message}</p>:<></>}

          </fieldset>


          <fieldset className="fieldset space-y-1">

                <legend className="fieldset-legend text-sm sm:text-base">Photo URL</legend>

                <input
                  {...register("photoURL", {required:"Need Photo URL : If you Do not have, just type something."})}
                  type="text"
                  className="input w-full text-sm sm:text-base"
                  placeholder="Enter Your Photo URL"
                />

                {errors.photoURL? <p className="text-red-700 text-xs sm:text-sm">{errors.photoURL.message}</p>:<></>}

          </fieldset>


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
                  type="password"
                  className="input w-full text-sm sm:text-base"
                  placeholder="Enter your password"
                />

                {errors.password && <p className="text-red-700 text-xs sm:text-sm">{errors.password.message}</p>}

          </fieldset>

          <button className="btn w-full bg-black text-white text-sm sm:text-base py-2 sm:py-3">
            Register
          </button>

        </form>

        <p className="font-semibold text-xs sm:text-sm text-center">
          Already Registered?{" "}
          <Link href={'/login'} className="text-green-700 font-bold">
            Log In
          </Link>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;