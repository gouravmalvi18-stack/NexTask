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

  return (
    <div className="min-h-screen overflow-hidden bg-primary py-10 ">
      <div className=" w-[90%] mx-auto border-[0.5px] border-white/10 rounded-xl">
        {/* header  */}
        <div className=" w-full flex  justify-evenly items-center px-6">
          <div className=" w-1/2 pt-2">
            <h1 className="text-2xl text-neutral-300   font-bold">My Todos</h1>
            <p className="text-neutral-500 text-[12px]">
              Manage your tasks and track your time
            </p>
          </div>
          <div className=" h-full w-1/2 flex justify-end items-center  pt-2">
            <button
              onClick={() => navigate("/todo/createtodo")}
              className="flex gap-1 text-center  bg-gradient-to-r    from-indigo-500 to-violet-600 py-1 px-4 rounded-2xl font-bold text-neutral-50"
            >
              CreateTodo
            </button>
          </div>
        </div>
        {/* main card  */}
        <div className=" w-full h-full p-6 container mx-auto px-4">
          <div className=" w-full  bg-secondary border-[0.5px]  border-white/10 rounded-xl">
            {/* Main card header */}
            <div className="min-w-[500px] w-full flex items-center text-neutral-50 text-sm font-bold py-3 rounded-t-xl bg-primary/90 border-b-[0.5px] border-white/10">
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
            {/* List of Alltodo  */}
            {loading ? (
              <p className="text-center text-7xl text-neutral-300 font-bold">
                Loading...
              </p>
            ) : Alltodo.length > 0 ? (
              Alltodo.map((todo, idx) => {
                return (
                  <div
                    key={idx}
                    className=" container mx-auto px-4   w-full flex items-center  border-t-[0.5px] border-white/10"
                  >
                    {/* Todo title and task  */}
                    <div className="w-[50%] h-full flex  ">
                      {/* Seleted btn  */}
                      <div className=" w-20  flex justify-center items-center">
                        <SeletedBtn
                          ServerPort={ServerPort}
                          todo={todo}
                          GetAlltodoFromServer={GetAlltodoFromServer}
                        />
                      </div>
                      <div className="flex-1  h-full pl-4 py-2">
                        <h1 className="text-neutral-100 text-lg font-bold">
                          {todo.title}
                        </h1>
                        <h2 className="text-neutral-500 text-sm ">
                          {todo.task}
                        </h2>
                      </div>
                    </div>
                    {/* todo time and status and action  */}
                    <div className="w-[50%] h-full  flex  justify-evenly items-center">
                      {/* timer  */}
                      <div className="  w-[20%] gap-1 flex  justify-center items-center">
                        <span className="text-amber-700">
                          <IconClockHour4 stroke={2} className="h-5" />
                        </span>
                        <span className="text-sm text-neutral-300 pb-0.5">
                          {todo.estimatedtime} min
                        </span>
                      </div>
                      {/* status  */}
                      <div className=" w-[30%] flex justify-center items-center ">
                        <StatusCompo status={todo.status} />
                      </div>
                      {/* Action  */}
                      <div className=" flex-1 flex justify-center items-center gap-5">
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
              <h1 className="text-center text-7xl text-neutral-300 font-bold">
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
