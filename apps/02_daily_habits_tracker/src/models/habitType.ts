import type { ReactElement } from "react";

export interface HabitType {
  name: string;
  id: string;
  icon?: ReactElement;
  colors: {
    primary: string;
    secondary: string;
  };
}
