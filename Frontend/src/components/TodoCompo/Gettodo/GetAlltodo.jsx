import React, { useState, useEffect } from "react";
import { IconClockHour4 } from "@tabler/icons-react";
import { useNavigate } from "react-router";
import axios from "axios";
import { UpdateBtn, DeleteBtn, StatusCompo, SeletedBtn } from "../../index";

const GetAlltodo = () => {
  const [Alltodo, setAlltodo] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const ServerPort = import.meta.env.VITE_SERVER_PORT;

  const GetAlltodoFromServer = async () => {
    try {
      const res = await axios.get(`${ServerPort}/todo/alltodo`, {
        withCredentials: true,
      });

      if (res) {
        setAlltodo(res.data.AllTodos);
      }
    } catch (error) {
      if (error.response.status === 403) {
        navigate("/");
      }
      console.log(error.response);
    }
    setLoading(false);
  };
  useEffect(() => {
    setTimeout(() => {
      GetAlltodoFromServer();
    }, 500);
  }, []);

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
    <div className="min-h-screen overflow-hidden bg-primary py-6 sm:py-10">
      <div className="w-[95%] sm:w-[90%] mx-auto border-[0.5px] border-white/10 rounded-xl">
        {/* header */}
        <div className="w-full flex flex-col sm:flex-row sm:justify-evenly items-center gap-4 px-4 sm:px-6 py-4 sm:py-2">
          <div className="w-full sm:w-1/2 text-center sm:text-left pt-0 sm:pt-2">
            <h1 className="text-xl sm:text-2xl text-neutral-300 font-bold">
              My Todos
            </h1>
            <p className="text-neutral-500 text-[12px]">
              Manage your tasks and track your time
            </p>
          </div>
          <div className="w-full sm:w-1/2 flex gap-3 sm:gap-4 justify-center sm:justify-end pt-0 sm:pt-2">
            <button
              onClick={hadleLogout}
              className="flex-1 sm:flex-none py-1.5 sm:py-1 px-4 text-sm font-bold text-neutral-500 bg-neutral-950 border-[0.5px] rounded-xl border-red-500/40 hover:border-red-500"
            >
              Logout
            </button>
            <button
              onClick={() => navigate("/todo/createtodo")}
              className="flex-1 sm:flex-none flex gap-1 justify-center items-center text-center bg-gradient-to-r from-indigo-500 to-violet-600 py-1.5 sm:py-1 px-4 rounded-2xl font-bold text-neutral-50"
            >
              CreateTodo
            </button>
          </div>
        </div>

        {/* main card */}
        <div className="w-full h-full p-3 sm:p-6 container mx-auto px-2 sm:px-4">
          <div className="w-full bg-secondary border-[0.5px] border-white/10 rounded-xl overflow-hidden">
            {/* Main card header — table-style, only shown from lg up */}
            <div className="hidden lg:flex w-full items-center text-neutral-50 text-sm font-bold py-3 rounded-t-xl bg-primary/90 border-b-[0.5px] border-white/10">
              <div className="w-[50%] flex justify-center">
                <h1>Todo</h1>
              </div>
              <div className="w-[10%] flex justify-center">
                <h1>Time</h1>
              </div>
              <div className="w-[15%] flex justify-center">
                <h1>Status</h1>
              </div>
              <div className="flex-1 flex justify-center">
                <h1>Action</h1>
              </div>
            </div>

            {/* List of Alltodo */}
            {loading ? (
              <p className="text-center text-3xl sm:text-5xl md:text-7xl text-neutral-300 font-bold py-10">
                Loading...
              </p>
            ) : Alltodo.length > 0 ? (
              Alltodo.map((todo, idx) => {
                return (
                  <div
                    key={idx}
                    className="w-full flex flex-col lg:flex-row items-stretch lg:items-center border-t-[0.5px] border-white/10 px-3 lg:px-0 py-3 lg:py-0 gap-3 lg:gap-0"
                  >
                    {/* Todo title and task */}
                    <div className="w-full lg:w-[50%] flex items-center">
                      <div className="w-14 sm:w-20 flex justify-center items-center shrink-0">
                        <SeletedBtn
                          ServerPort={ServerPort}
                          todo={todo}
                          GetAlltodoFromServer={GetAlltodoFromServer}
                        />
                      </div>
                      <div className="flex-1 pl-2 sm:pl-4 py-2 min-w-0">
                        <h1 className="text-neutral-100 text-base sm:text-lg font-bold truncate">
                          {todo.title}
                        </h1>
                        <h2 className="text-neutral-500 text-sm truncate">
                          {todo.task}
                        </h2>
                      </div>
                    </div>

                    {/* todo time, status, action */}
                    <div className="w-full lg:w-[50%] flex flex-wrap items-center justify-between lg:justify-evenly gap-2 pl-14 lg:pl-0">
                      {/* timer */}
                      <div className="flex gap-1 justify-center items-center">
                        <span className="text-amber-700">
                          <IconClockHour4 stroke={2} className="h-5" />
                        </span>
                        <span className="text-sm text-neutral-300 pb-0.5">
                          {todo.estimatedtime} min
                        </span>
                      </div>
                      {/* status */}
                      <div className="flex justify-center items-center">
                        <StatusCompo status={todo.status} />
                      </div>
                      {/* Action */}
                      <div className="flex justify-center items-center gap-3 sm:gap-5">
                        <UpdateBtn id={todo._id} navigate={navigate} />
                        <DeleteBtn
                          ServerPort={ServerPort}
                          id={todo._id}
                          GetAlltodoFromServer={GetAlltodoFromServer}
                        />
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1 className="text-center text-3xl sm:text-5xl md:text-7xl text-neutral-300 font-bold py-10">
                No Todo Created
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAlltodo;
