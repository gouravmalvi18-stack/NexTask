import React from "react";
import { IconStopwatch } from "@tabler/icons-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const SetTimerMin = ({ min, setmin }) => {
  function handleDecrement() {
    if (min > 0) {
      setmin(min - 1);
    }
  }
  return (
    <div className="h-full w-28 gap-3 text-neutral-400  flex justify-center items-center  relative">
      <input
        type="text"
        disabled
        value={min}
        className=" h-full w-full pl-3 pb-2 bg-secondary border-[0.5px] border-slate-700/80  rounded-lg"
      />
      <div className=" absolute flex flex-col   text-neutral-100 inset-y-0 left-13 h-full ">
        <button
          onClick={() => setmin(min + 1)}
          className="px-1 rounded-tr-lg text-[12px] bg-primary border-[0.5px] border-slate-700/80 "
        >
          {<FontAwesomeIcon icon={faAngleUp} />}
        </button>
        <button
          onClick={handleDecrement}
          className=" px-1 rounded-br-lg text-[12px] bg-primary border-[0.5px] border-slate-700/80"
        >
          {<FontAwesomeIcon icon={faAngleDown} />}
        </button>
      </div>
      <p className="font-bold">min</p>
    </div>
  );
};

const TimerCompo = ({ min, setmin }) => {
  return (
    <div className=" w-full flex justify-center  gap-2  pr-15">
      <span className="h-10 w-10  border-[0.5px] border-slate-700/80 bg-secondary rounded-xl flex justify-center items-center">
        <IconStopwatch className="text-violet-500  " stroke={2} />
      </span>
      <div className=" flex-1 flex    gap-2 ">
        {/* for min  */}
        <SetTimerMin min={min} setmin={setmin} />
      </div>
    </div>
  );
};

export default TimerCompo;
