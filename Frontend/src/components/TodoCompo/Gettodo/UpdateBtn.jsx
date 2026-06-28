import { IconEdit } from "@tabler/icons-react";
import { useNavigate } from "react-router";
import axios from "axios";

const UpdateBtn = ({ id, navigate }) => {
  const handleUpdate = () => {
    if (id) {
      navigate(`/todo/Edittodo/${id}`);
    }
  };

  return (
    <button
      onClick={handleUpdate}
      className=" py-1.5 px-4 rounded-lg bg-purple-600/20 hover:opacity-70"
    >
      <span className="text-sm font-bold text-purple-500 flex justify-center items-center gap-1">
        <IconEdit stroke={2} className="h-5" />
        Update
      </span>
    </button>
  );
};

export default UpdateBtn;
