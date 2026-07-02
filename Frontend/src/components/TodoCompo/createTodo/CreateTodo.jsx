import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";

//components
import { StatusDropdown, TimerCompo } from "../../index";

//icon
import { IconArrowLeft, IconFileText, IconPlus } from "@tabler/icons-react";

const CreateTodo = () => {
  const ServerPort = import.meta.env.VITE_SERVER_PORT;
  const navigate = useNavigate();

  //All States
  const [Title, setTitle] = useState("");
  const [Task, setTask] = useState("");
  const [Status, setStatus] = useState("pending");
  const [min, setmin] = useState(0);

  // handler
  const HandleCreateTodo = async () => {
    try {
      const res = await axios.post(
        `${ServerPort}/todo/createtodo`,
        {
          title: Title,
          task: Task,
          status: Status,
          estimatedtime: min,
        },
        { withCredentials: true },
      );
      if (res) {
        setTitle("");
        setTask("");
        setStatus("pending");
        navigate("/todo/alltodo");
      }
    } catch (error) {
      if (error.response.status === 403) {
        navigate("/");
      }
      const msg = error.response.data.message;
      toast.error(msg);
    }
  };
  const hadleLogout = async () => {
    try {
      const res = await axios.delete(`${ServerPort}/todo/createtodo`, {
        withCredentials: true,
      });
      if (res) {
        navigate("/");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="min-h-screen bg-primary flex justify-center items-center py-8 px-3 sm:px-4">
      <div className="py-5 w-full max-w-[960px] md:w-240 h-auto md:h-150 mx-auto bg-secondary border border-white/9 rounded-2xl">
        {/* Header */}
        <div className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-0 px-4 md:px-0">
          <div className="w-full md:w-[50%] flex items-center">
            <div className="w-12 md:w-17 flex justify-center items-center shrink-0">
              <button
                onClick={() => navigate("/todo/alltodo")}
                className="text-neutral-50 bg-primary border border-white/9 px-2 py-2 rounded-lg"
              >
                <span>{<IconArrowLeft stroke={2} />}</span>
              </button>
            </div>
            <div className="h-full flex-1 min-w-0 md:w-100">
              <h1 className="text-white text-xl sm:text-2xl font-bold">
                Add New Todo
              </h1>
              <p className="text-neutral-500 text-sm sm:text-base">
                Create a new Task and Track Your progress
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-15">
            <button
              onClick={hadleLogout}
              className="hover:border-red-500 py-1.5 md:py-1 px-4 text-sm font-bold text-neutral-500 bg-neutral-950 border-[0.5px] rounded-xl border-red-500/40 w-full md:w-auto"
            >
              Logout
            </button>
          </div>
        </div>

        {/* main card */}
        <div className="h-auto md:h-[80%] w-full p-4 sm:p-5">
          <div className="h-full w-full flex flex-col gap-y-3 bg-primary rounded-2xl border border-white/9">
            {/* Title compo */}
            <div className="h-auto md:h-[20%] w-full py-4 px-4 sm:px-7">
              <label className="block text-lg sm:text-2xl font-semibold text-white mb-2">
                Title <span className="text-red-500">*</span>
              </label>
              <div className="bg-secondary flex items-center gap-3 rounded-lg px-4 focus-within:ring-[0.5px] focus-within:ring-indigo-500">
                <span className="text-violet-500 text-sm">☰</span>
                <input
                  className="flex-1 bg-transparent outline-none text-white text-sm py-3.5 placeholder-gray-600"
                  value={Title}
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="eg :- Start Backend"
                />
              </div>
            </div>
            {/* Task compo */}
            <div className="h-auto md:h-[50%] w-full py-1 px-4 sm:px-7 mt-3">
              <label className="block text-lg sm:text-2xl font-semibold text-white mb-2">
                Task <span className="text-red-500">*</span>
              </label>
              <div className="bg-secondary flex gap-2 rounded-lg pt-2 pl-4 pr-1 focus-within:ring-[0.5px] focus-within:ring-indigo-500">
                <span className="text-violet-500 text-sm h-6 w-7 text-center mt-0.5">
                  {<IconFileText stroke={2} />}
                </span>
                <textarea
                  value={Task}
                  onChange={(e) => setTask(e.target.value)}
                  placeholder="e.g :- Study routing, middleware, and request handling in Express.js"
                  rows={5}
                  className="w-full resize-none bg-transparent scrollbar-none outline-none text-white text-sm placeholder-gray-600 py-2 leading-relaxed"
                />
              </div>
            </div>
            {/* Status compo */}
            <div className="h-auto md:h-[50%] w-full flex flex-col md:flex-row justify-center items-stretch md:items-center gap-4 md:gap-0 py-2 md:py-0">
              <div className="h-full w-full md:w-[40%] flex flex-col gap-y-2 px-4 sm:px-9">
                <label className="text-sm font-bold pl-1 text-neutral-200">
                  Status
                </label>
                <StatusDropdown Status={Status} setStatus={setStatus} />
              </div>
              {/* Timer compo */}
              <div className="h-full w-full md:w-[50%] px-4 sm:px-9 md:px-0">
                <label className="block text-sm font-semibold text-white mb-2">
                  Time for Task <span className="text-red-500">*</span>
                </label>
                <TimerCompo min={min} setmin={setmin} />
              </div>
            </div>
          </div>
          <div className="w-full mt-4 flex justify-center md:justify-end">
            <button
              onClick={HandleCreateTodo}
              className="flex gap-1 justify-center items-center text-center bg-gradient-to-r from-indigo-500 to-violet-600 py-2 px-4 rounded-2xl font-bold text-neutral-50 w-full md:w-auto"
            >
              <span>
                <IconPlus className="h-6 py-0.75" stroke={3} />
              </span>
              AddTodo
            </button>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};
export default CreateTodo;
