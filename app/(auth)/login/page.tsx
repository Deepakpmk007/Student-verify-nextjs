import React from "react";

export default function page() {
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center gap-5 font-mono sm:px-4 ">
      <h2 className="text-3xl font-bold">Admin Login</h2>
      <div className="md:bg-slate-200 p-8 rounded-md w-screen h-auto md:w-[30vw] flex flex-col justify-center md:h-[50vh] gap-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-xl font-semibold">
            username
          </label>
          <input type="text" className="input rounded-lg" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-xl font-semibold">
            Password
          </label>
          <input type="text" className="input rounded-lg" />
        </div>
        <button className="py-4 px-10 bg-blue-400 rounded-lg mt-4 text-lg font-semibold hover:bg-blue-500 transition-all ">
          Login
        </button>
      </div>
    </div>
  );
}
