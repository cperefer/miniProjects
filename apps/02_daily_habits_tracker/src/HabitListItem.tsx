import HabitCounter from "./HabitCounter";
import HabitItem from "./HabitItem";
import type { Habit } from "./models/habit";
import { habitTypes } from "./utils/HabitTypes";

export default function HabitListItem({ habit }: { habit: Habit }) {
  const habitType = habitTypes.filter((type) => type.name === habit.type)[0];
  const { primary, secondary } = habitType.colors;

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
      <HabitCounter timesDone={habit.timesDone} color={primary} />
      <div>reset</div>
      <div>delete</div>
    </div>
  );
}
