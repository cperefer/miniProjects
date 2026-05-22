import HabitCounter from "./HabitCounter";
import HabitItem from "./HabitItem";
import type { Habit } from "./models/habit";
import { habitTypes } from "./utils/HabitTypes";

interface Props {
  habit: Habit;
  updateHabit: (id: number, timesDone: number) => void;
  deleteHabit: (id: number) => void;
}

export default function HabitListItem({
  habit,
  updateHabit,
  deleteHabit,
}: Props) {
  const habitType = habitTypes.filter((type) => type.name === habit.type)[0];
  const { primary, secondary } = habitType.colors;

  const updateHabitFromCounter = (timesDone: number) => {
    updateHabit(habit.id, timesDone);
  };

  return (
    <div
      key={habit.id}
      className="flex flex-row h-20 p-3 gap-4 rounded-xl mb-3 border"
      style={{ backgroundColor: `${secondary}95`, borderColor: `${primary}20` }}
    >
      <HabitItem
        name={habit.name}
        color={primary}
        habitType={habitType.name}
        icon={habitType.icon}
      />
      <HabitCounter
        timesDone={habit.timesDone}
        color={primary}
        updateHabit={updateHabitFromCounter}
      />
      <div className="cursor-pointer" onClick={() => updateHabit(habit.id, 0)}>
        reset
      </div>
      <div className="cursor-pointer" onClick={() => deleteHabit(habit.id)}>
        delete
      </div>
    </div>
  );
}
