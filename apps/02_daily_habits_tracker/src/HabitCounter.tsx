interface Props {
  timesDone: number;
  color: string;
  updateHabit: (timesDone: number) => void;
}

export default function HabitCounter({ timesDone, color, updateHabit }: Props) {
  const updateTimesDone = (val: number) => {
    if (val < 0 && timesDone === 0) {
      return;
    }

    updateHabit(timesDone + val);
  };

  return (
    <div className="m-1 flex bg-white w-40 items-center rounded-md border border-border">
      <div className="w-1/3 flex flex-col items-center text-2xl">
        <button
          className="w-full h-full cursor-pointer"
          onClick={() => updateTimesDone(-1)}
        >
          -
        </button>
      </div>
      <div
        style={{ color }}
        className="font-bold w-1/3 flex flex-col items-center text-2xl"
      >
        {timesDone}
      </div>
      <div className="w-1/3 flex flex-col items-center text-2xl">
        <button
          className="w-full h-full cursor-pointer"
          onClick={() => updateTimesDone(+1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
