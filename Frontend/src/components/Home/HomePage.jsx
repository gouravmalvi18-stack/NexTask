import React from "react";
import { useNavigate } from "react-router";
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#0c0c15] ">
      <nav className=" mx-auto px-5 flex  items-center w-full h-20 border-b-[0.5px]  border-[#2a2a3e] bg-[#13131f] ">
        <h1 className="ml-8 w-[30%] text-xl text-neutral-300 font-extrabold tracking-widest">
          NexTask
        </h1>
        <div className="w-[35%] h-full flex justify-center gap-10 text-sm  text-neutral-500  items-center ">
          <h3>Feature</h3>
          <h3>Pricing</h3>
          <h3>About</h3>
        </div>
        <div className=" flex-1 h-full flex pr-6 gap-3 items-center justify-end  ">
          <button
            onClick={() => navigate("/login")}
            className="border-[0.5px] border-violet-600/30 py-1.5 px-5 text-neutral-100 text-sm bg-[#0c0c15]  rounded-xl font-bold hover:border-violet-600 cursor-pointer"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className=" py-1 px-3.5 text-neutral-100 text-sm bg-indigo-800 hover:opacity-80 rounded-xl font-bold cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-20 max-w-180 flex flex-col gap-8 justify-center items-center h-120">
        <div className="px-9 py-2 rounded-2xl bg-[#6366f11f] border-[0.5px] border-[#6366f14d] text-[10px] text-[#818cf8]">
          <li> Simple Task Mangement — Free to start</li>
        </div>
        <div className="h-20 w-full flex flex-col  gap-6 font-bold my-5 justify-center items-center text-5xl leading-8">
          <h1 className="text-neutral-50">Manage your tasks.</h1>
          <h1 className="bg-clip-text text-transparent pb-5  bg-gradient-to-r    from-indigo-400 via-indigo-400 to-indigo-900">
            Ship more every day.
          </h1>
        </div>
        <div className="    pr-6 flex gap-3  ">
          <button className=" py-2 px-7 text-neutral-100 text-sm bg-indigo-800 hover:opacity-80 rounded-xl font-bold cursor-pointer">
            See how it works
          </button>
          <button className="border-[0.5px] border-violet-600/30 py-2 px-7 text-neutral-100 text-sm bg-[#0c0c15]  rounded-xl font-bold hover:border-violet-600 cursor-pointer">
            Get started free
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
