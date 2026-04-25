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

        //  Function ta async kora hoyeche, jeno await kore amra auth function implement korte pari. 

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

    // console.log(errors);


  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-300">
      <div className="px-10 py-10 rounded-xl bg-white ">
        <h2 className="font-bold text-3xl text-center mb-15">Register Your Account</h2>

        <form className="space-y-4" onSubmit={handleSubmit(HandleRegisterFunc)}>

              <fieldset className="fieldset">

                <legend className="fieldset-legend">Name</legend>

                <input {...register("name", {required:"Name Can Not Be Empty"})} type="text" className="input" placeholder="Enter Your Full-Name" />
                {errors.name? <p className="text-red-700">{errors.name.message}</p>:<></>}

          </fieldset>


             <fieldset className="fieldset">

                <legend className="fieldset-legend">Photo URL</legend>

                <input {...register("photoURL", {required:"Need Photo URL : If you Do not have, just type something."})} type="text" className="input" placeholder="Enter Your Photo URL" />
                {errors.photoURL? <p className="text-red-700">{errors.photoURL.message}</p>:<></>}

          </fieldset>






          <fieldset className="fieldset">

                <legend className="fieldset-legend">E-Mail</legend>

                <input {...register("email", {required:"Email is required to log in."})} type="email" className="input" placeholder="Enter Your Email" />
                {errors.email? <p className="text-red-700">{errors.email.message}</p>:<></>}

          </fieldset>

          <fieldset className="fieldset">

                <legend className="fieldset-legend">Password</legend>

                <input {...register("password",{required:"Password Required for log in."})} type="password" className="input" placeholder="Enter your password" />
                {errors.password && <p className="text-red-700">{errors.password.message}</p>}

          </fieldset>

          <button className="btn btn-xs sm:btn-sm md:btn-md bg-black text-white  w-full">Register</button>
        </form>

            <p className="font-bold mt-5 text-sm">Already Registered? <Link href={'/login'} className="text-green-700 font-bold">Log In</Link></p>

      </div>
    </div>
  );
};

export default RegisterPage;
