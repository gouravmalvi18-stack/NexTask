import { IconCheck } from "@tabler/icons-react";

import axios from "axios";

const SeletedBtn = ({ GetAlltodoFromServer, ServerPort, todo }) => {
  const isCompleted = todo.status === "completed"; //  todo.status = pending / complete // iscompleted = false

  const HandleToggle = async () => {
    const newStatus = isCompleted ? "pending" : "completed"; // newStatus = Completed

    try {
      const res = await axios.patch(
        `${ServerPort}/todo/alltodo`,
        { id: todo._id, status: newStatus },
        { withCredentials: true },
      );
      if (res) {
        GetAlltodoFromServer();
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <button
      onClick={HandleToggle}
      className=" h-6 w-7 rounded-lg border-[0.5px] border-white/10"
    >
      {isCompleted && (
        <span>
          <IconCheck
            stroke={2}
            className="text-green-400 bg-green-600/20 h-full w-full rounded-lg"
          />
        </span>
      )}
    </button>
  );
};

export default SeletedBtn;
