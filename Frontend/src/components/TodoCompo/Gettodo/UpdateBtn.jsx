import { IconEdit } from "@tabler/icons-react";

const UpdateBtn = ({ id, navigate }) => {
  const handleUpdate = () => {
    if (id) {
      navigate(`/todo/Edittodo/${id}`);
    }
  };

  return (
    <button
      onClick={handleUpdate}
      className="py-1.5 px-2.5 sm:px-4 rounded-lg bg-purple-600/20 hover:opacity-70"
      aria-label="Update todo"
    >
      <span className="text-sm font-bold text-purple-500 flex justify-center items-center gap-1">
        <IconEdit stroke={2} className="h-5" />
        <span className="hidden sm:inline">Update</span>
      </span>
    </button>
  );
};

export default UpdateBtn;
