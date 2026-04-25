'use client'
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LogInPage = () => {

    const {register, handleSubmit , formState:{errors}} = useForm();


    const handleLogInFunc =(data) =>
    {
        
        console.log(data);

    }

    console.log(errors);


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

                <input {...register("password",{required:"Password Required for log in."})} type="password" className="input" placeholder="Enter Your Password" />
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
