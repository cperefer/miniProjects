import { useEffect, useState } from "react";
import type { Habit } from "../models/habit";
import { loadHabits } from "../utils/persistence";

export default function useSavedHabits() {
  const [habits, setHabits] = useState<Habit[]>([]);

  useEffect(() => {
    setHabits(loadHabits());
  }, []);

  return habits;
}
