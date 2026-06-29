import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const ServerPort = import.meta.env.VITE_SERVER_PORT;

  const HandleLogin = async (data) => {
    const { username, email, password } = data;
    try {
      const res = await axios.post(
        `${ServerPort}/login`,
        {
          username: username,
          email: email,
          password: password,
        },
        { withCredentials: true },
      );
      if (res) {
        navigate("/todo/alltodo");
      }
    } catch (error) {
      if (error.response.status === 404) {
        navigate("/signup");
      }
    }
  };

  return (
    <div className=" bg-secondary   min-h-screen overflow-hidden flex justify-center items-center">
      <div className="  flex flex-col pt-3 pb-7 bg-primary border-[0.5px] border-white/20 w-150  container mx-auto px-4 rounded-2xl">
        <h1 className="    text-center text-3xl  bg-clip-text text-transparent max-w-150 bg-gradient-to-b from-neutral-100 via-neutral-400 to-neutral-900 pt-2 font-bold tracking-wide ">
          LOGIN
        </h1>
        <form
          onSubmit={handleSubmit(HandleLogin)}
          className="flex-1 flex flex-col gap-2 h-full  pt-8 w-full mt-2 border-t-[0.5px] border-white/20 "
        >
          {/* UserName input field  */}
          <div className="w-full   flex flex-col ">
            <label className="text-sm pl-2  text-neutral-500 font-bold tracking-wide">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="bg-secondary mt-2 text-sm text-neutral-200  rounded-lg py-2 px-3 border-[0.5px] border-white/30 focus:outline-[0.5px] focus:outline-indigo-500"
              {...register("username")}
            />
            {errors && errors.username && (
              <span className="text-red-500 text-sm pl-2 pt-2">
                {errors.username.message}
              </span>
            )}
          </div>

          <span className="text-sm text-center text-neutral-700 ">
            ---- or ----
          </span>

          {/* Email input field  */}
          <div className="w-full   flex flex-col ">
            <label className="text-sm  pl-2 text-neutral-500 font-bold tracking-wide">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="bg-secondary mt-2 text-sm text-neutral-200  rounded-lg py-2 px-3 border-[0.5px] border-white/30 focus:outline-[0.5px] focus:outline-indigo-500"
              {...register("email")}
            />
            {errors && errors.email && (
              <span className="text-red-500 text-sm pl-2 pt-2">
                {errors.email.message}
              </span>
            )}
          </div>
          {/* Password input field  */}
          <div className="w-full   flex flex-col ">
            <label className="text-sm  pl-2 text-neutral-500 font-bold tracking-wide">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Password"
              className="bg-secondary mt-2 text-sm text-neutral-200  rounded-lg py-2 px-3 border-[0.5px] border-white/30 focus:outline-[0.5px] focus:outline-indigo-500"
              {...register("password")}
            />
            {errors && errors.password && (
              <span className="text-red-500 text-sm pl-2 pt-2">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="w-full   mt-4 flex justify-end items-center pr-3">
            <button
              // onClick={HandleCreateTodo}
              type="submit"
              className="flex gap-1 text-center  bg-gradient-to-r    from-indigo-500 to-violet-600 py-1 px-4 rounded-xl font-bold text-neutral-100"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};

export default Login;
