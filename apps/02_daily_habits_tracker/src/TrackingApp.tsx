import { useEffect, useState } from "react";
import HabitTrackerList from "./HabitTrackerList";
import Heading from "./Heading";
import NewHabit from "./NewHabit";
import {
  insertHabit,
  loadHabits,
  deleteHabit as deleteHabitFromLocalStorage,
  saveHabits,
} from "./utils/persistence";
import type { Habit } from "./models/habit";

export default function TrackingApp() {
  const [habits, setHabits] = useState<Habit[]>(loadHabits());

  const addHabit = (habit: Habit) => {
    setHabits((prev) => [...prev, habit]);
    insertHabit(habit);
  };

  const updateHabit = (id: number, timesDone: number) => {
    setHabits((prev) => {
      const updated = prev.map((habit) =>
        habit.id !== id ? habit : { ...habit, timesDone },
      );
      saveHabits(updated);

      console.log("updated");
      return updated;
    });

    console.log({ id, timesDone, habits });
  };

  const deleteHabit = (id: number) => {
    console.log("deleting habit");
    deleteHabitFromLocalStorage(id);
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
    console.log(habits);
  };

  useEffect(() => {
    console.log("RENDER", habits);
  }, [habits]);

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
        <HabitTrackerList
          habits={habits}
          updateHabit={updateHabit}
          deleteHabit={deleteHabit}
        />
      </div>
    </div>
  );
}
