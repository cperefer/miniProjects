import type { ReactElement } from "react";
import { IconContext } from "react-icons";

export default function HabitTypeIcon({
  icon,
  color,
}: {
  icon: ReactElement;
  color: string;
}) {
  return (
    <IconContext.Provider value={{ color, size: "45px" }}>
      {icon}
    </IconContext.Provider>
  );
}
