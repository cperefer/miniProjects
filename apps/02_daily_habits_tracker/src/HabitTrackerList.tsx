import HabitListItem from "./HabitListItem";
import type { Habit } from "./models/habit";

interface Props {
  habits: Habit[];
  updateHabit: (id: number, timesDone: number) => void;
  deleteHabit: (id: number) => void;
}

export default function HabitTrackerList({
  habits,
  updateHabit,
  deleteHabit,
}: Props) {
  return (
    <div className="p-5">
      {!habits.length ? (
        <h2 className="pl-2 text-xl">Añade un hábito para empezar</h2>
      ) : (
        <div className="pl-2">
          <div className="flex flex-row justify-between">
            <h2 className="text-xl block w-fit">Hoy</h2>
            <button className="p-2 border border-primary/20 text-primary font-bold rounded-xl cursor-pointer block w-fit bg-primary-light">
              🔄️ Reset diario
            </button>
          </div>
          <div className="mt-4">
            <div>
              {habits.map((habit) => (
                <HabitListItem
                  habit={habit}
                  updateHabit={updateHabit}
                  deleteHabit={deleteHabit}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
