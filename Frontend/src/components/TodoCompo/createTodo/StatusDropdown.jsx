import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";

const StatusDropdown = ({ Status, setStatus }) => {
  const [open, setopen] = useState(false);

  useEffect(() => {
    const close = () => setopen(false); // for interview also importtant
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <div className="h-full  relative text-neutral-50">
      <button
        onClick={(e) => {
          e.stopPropagation(); // stop the bubble up propogation
          setopen((o) => !o);
        }}
        className=" py-2 pl-2 pr-3 rounded-xl border-[0.5px] border-slate-700/80  flex bg-secondary  gap-10 "
      >
        {Status === "pending" ? "🟡 Pending" : "🟢 Completed "}
        <span>
          <FontAwesomeIcon icon={faAngleDown} />
        </span>
      </button>
      {open && (
        <div className="absolute inset-x-0.5 inset-y-12 rounded-2xl  h-29 w-50 bg-primary border-[0.5px] border-white/20 transition-all duration-700 ease-in-out">
          <button
            onClick={() => {
              setStatus("pending");
              setopen(false);
            }}
            className="w-full py-4 pr-20 border-b-[0.5px] border-white/20 rounded-2xl hover:bg-[#131725] transition-colors duration-500 ease-in-out "
          >
            🟡 Pending
          </button>
          <button
            onClick={() => {
              setStatus("completed");
              setopen(false);
            }}
            className="w-full py-4 pr-14  border-b-[0.5px] border-white/20 rounded-t-lg rounded-b-2xl hover:bg-[#131725] transition-colors duration-500 ease-in-out"
          >
            🟢 Completed{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default StatusDropdown;
