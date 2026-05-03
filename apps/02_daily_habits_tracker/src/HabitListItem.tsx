import HabitTypeIcon from "./HabitTypeIcon";
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
      <div className="flex flex-row w-1/2">
        <div
          className="rounded-full w-15 h-15 flex items-center justify-center"
          style={{ backgroundColor: `${primary}20` }}
        >
          <HabitTypeIcon icon={habitType.icon} color={primary} />
        </div>
        <div className="flex flex-col justify-between pl-5">
          <span className="font-bold">{habit.name}</span>
          <div className="flex">
            <span
              className="w-3 h-3 rounded-full block mt-1.5"
              style={{ backgroundColor: primary }}
            ></span>
            <span className="text-text-secondary pl-1">{habitType.name}</span>
          </div>
        </div>
      </div>
      <div>botones</div>
    </div>
  );
}
