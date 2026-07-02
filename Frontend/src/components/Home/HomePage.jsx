import React from "react";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#0c0c15]">
      <nav className="mx-auto px-4 sm:px-5 flex items-center justify-between w-full h-16 sm:h-20 border-b-[0.5px] border-[#2a2a3e] bg-[#13131f]">
        <h1 className="text-lg sm:text-xl text-neutral-300 font-extrabold tracking-widest">
          NexTask
        </h1>

        <div className="hidden md:flex flex-1 h-full justify-center gap-10 text-sm text-neutral-500 items-center">
          <h3>Feature</h3>
          <h3>Pricing</h3>
          <h3>About</h3>
        </div>

        <div className="flex gap-2 sm:gap-3 items-center">
          <button
            onClick={() => navigate("/login")}
            className="border-[0.5px] border-violet-600/30 py-1.5 px-3 sm:px-5 text-neutral-100 text-xs sm:text-sm bg-[#0c0c15] rounded-xl font-bold hover:border-violet-600 cursor-pointer"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="py-1.5 px-3 sm:px-3.5 text-neutral-100 text-xs sm:text-sm bg-indigo-800 hover:opacity-80 rounded-xl font-bold cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-12 sm:pt-20 max-w-180 flex flex-col gap-6 sm:gap-8 justify-center items-center min-h-[calc(100vh-4rem)] sm:h-120 sm:min-h-0 pb-12">
        <div className="px-5 sm:px-9 py-2 rounded-2xl bg-[#6366f11f] border-[0.5px] border-[#6366f14d] text-[10px] text-[#818cf8] text-center">
          <li className="list-none sm:list-item">
            Simple Task Management — Free to start
          </li>
        </div>

        <div className="w-full flex flex-col gap-4 sm:gap-6 font-bold my-2 sm:my-5 justify-center items-center text-center">
          <h1 className="text-neutral-50 text-3xl sm:text-4xl md:text-5xl leading-tight">
            Manage your tasks.
          </h1>
          <h1 className="bg-clip-text text-transparent pb-2 sm:pb-5 bg-gradient-to-r from-indigo-400 via-indigo-400 to-indigo-900 text-3xl sm:text-4xl md:text-5xl leading-tight">
            Ship more every day.
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-4 sm:px-0">
          <button className="py-2 px-7 text-neutral-100 text-sm bg-indigo-800 hover:opacity-80 rounded-xl font-bold cursor-pointer w-full sm:w-auto">
            See how it works
          </button>
          <button className="border-[0.5px] border-violet-600/30 py-2 px-7 text-neutral-100 text-sm bg-[#0c0c15] rounded-xl font-bold hover:border-violet-600 cursor-pointer w-full sm:w-auto">
            Get started free
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
