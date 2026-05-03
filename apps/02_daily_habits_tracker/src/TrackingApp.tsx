import { useState } from "react";
import HabitTrackerList from "./HabitTrackerList";
import Heading from "./Heading";
import NewHabit from "./NewHabit";
import { insertHabit, loadHabits } from "./utils/persistence";
import type { Habit } from "./models/habit";

export default function TrackingApp() {
  const [habits, setHabits] = useState<Habit[]>(loadHabits());

  const addHabit = (habit: Habit) => {
    setHabits((prev) => [...prev, habit]);
    insertHabit(habit);
  };

  return (
    <div className="flex flex-col h-dvh justify-center items-center">
      <div className="w-4/6 bg-background border border-border rounded-xl ">
        <div className="border-b border-b-border p-5">
          <Heading
            title="✔️ Mis Hábitos"
            subtitle="Cuenta lo que haces, cada día cuenta"
          />
          <NewHabit addHabit={addHabit} />
        </div>
        <HabitTrackerList habits={habits} />
      </div>
    </div>
  );
}
