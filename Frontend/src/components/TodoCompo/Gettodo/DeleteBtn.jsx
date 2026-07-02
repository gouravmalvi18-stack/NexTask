import { IconTrash } from "@tabler/icons-react";
import axios from "axios";

const DeleteBtn = ({ id, GetAlltodoFromServer, ServerPort }) => {
  const handleDelete = async () => {
    try {
      const res = await axios.delete(`${ServerPort}/todo/alltodo`, {
        data: { id: id },
        withCredentials: true,
      });
      if (res) {
        GetAlltodoFromServer();
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <button
      onClick={handleDelete}
      className="py-1.5 px-2.5 sm:px-4 rounded-lg bg-red-600/20"
      aria-label="Delete todo"
    >
      <span className="text-sm font-bold text-red-500 flex justify-center items-center gap-1">
        <IconTrash stroke={2} className="h-5" />
        <span className="hidden sm:inline">Delete</span>
      </span>
    </button>
  );
};

export default DeleteBtn;
