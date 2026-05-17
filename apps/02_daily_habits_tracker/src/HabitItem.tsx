import HabitTypeIcon from "./HabitTypeIcon";

export default function HabitItem({ name, color, icon, habitType }) {
  return (
    <div className="flex flex-row w-1/2">
      <div
        className="rounded-full w-15 h-15 flex items-center justify-center"
        style={{ backgroundColor: `${color}20` }}
      >
        <HabitTypeIcon icon={icon} color={color} />
      </div>
      <div className="flex flex-col justify-between pl-5">
        <span className="font-bold">{name}</span>
        <div className="flex">
          <span
            className="w-3 h-3 rounded-full block mt-1.5"
            style={{ backgroundColor: color }}
          ></span>
          <span className="text-text-secondary pl-1">{habitType}</span>
        </div>
      </div>
    </div>
  );
}
