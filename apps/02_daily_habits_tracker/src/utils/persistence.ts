import type { Habit } from "../models/habit";

const HABITS = "habits";

function loadHabits(): Habit[] {
  if (localStorage.getItem(HABITS) === null) {
    return [];
  }

  return JSON.parse(localStorage.getItem(HABITS));
}

function insertHabit(habit: Habit) {
  const savedHabits = loadHabits();

  if (savedHabits.length === 0) {
    localStorage.setItem(HABITS, JSON.stringify([habit]));
    return;
  }

  savedHabits.push(habit);

  localStorage.setItem(HABITS, JSON.stringify(savedHabits));
  console.log("Insertado nuevo hábito");
}

function deleteHabit(id: number) {
  const savedHabits = loadHabits();

  const filteredHabits = savedHabits.filter((habit) => habit.id !== id);

  localStorage.setItem(HABITS, JSON.stringify(filteredHabits));
}

function clearHabits() {
  localStorage.removeItem(HABITS);
}

export { loadHabits, insertHabit, deleteHabit, clearHabits };
