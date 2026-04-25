import Link from "next/link";
import React from "react";

const LogInPage = () => {
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-300">
      <div className="p-4 rounded-xl bg-white ">
        <h2 className="font-bold text-3xl text-center mb-15">Login Your Account</h2>

        <form className="space-y-4">
          <fieldset className="fieldset">

                <legend className="fieldset-legend">E-Mail</legend>

                <input type="email" className="input" placeholder="Enter Your Email" />

          </fieldset>

          <fieldset className="fieldset">

                <legend className="fieldset-legend">Password</legend>

                <input type="password" className="input" placeholder="Enter Your Password" />

          </fieldset>

          <button className="btn btn-xs sm:btn-sm md:btn-md bg-black text-white  w-full">Log In</button>
        </form>

        <p className="font-bold mt-5 text-sm">Don't have and account? <Link href={'/register'} className="text-red-700 font-bold">Register</Link> </p>

      </div>
    </div>
  );
};

export default LogInPage;
