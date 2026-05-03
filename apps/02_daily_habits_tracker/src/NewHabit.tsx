import { useState } from "react";
import type { Habit } from "./models/habit";
import { habitTypes } from "./utils/HabitTypes";

export default function NewHabit({
  addHabit,
}: {
  addHabit: (newHabit: Habit) => void;
}) {
  const [habit, setHabit] = useState("");
  const [type, setType] = useState("9999");

  // habits tiene que ser un estado global, este handler tiene que llamar a una funcion superior.
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (type === "9999") {
      return;
    }

    const newHabit: Habit = {
      id: Math.floor(Math.random() * 100000) + 1,
      type,
      name: habit,
      createdAt: Date.now(),
      timesDone: 0,
    };

    addHabit(newHabit);
  };

  return (
    <div className="border border-border rounded-xl bg-white p-4">
      <form className="flex justify-between">
        <input
          type="text"
          value={habit}
          className="w-100 border border-border rounded-xl p-2"
          placeholder="Nuevo hábito..."
          onChange={({ target }) => setHabit(target.value)}
        />
        <select
          value={type}
          onChange={({ target }) => setType(target.value)}
          className="w-40 border border-border rounded-xl p-2 hover:border-border hover:cursor-pointer foucs:outline-none focus:border-border form-select appearance-none"
        >
          <option value="9999">Tipo</option>
          {habitTypes.map(({ name, id }) => (
            <option
              key={id}
              value={name}
              className={`before:content-['·'] before:w-20 before:h-20`}
            >
              {/* <span className="block w-2 h-2 bg-amber-500"></span> */}
              {name}
            </option>
          ))}
        </select>
        <button
          onClick={handleClick}
          className="bg-primary text-white p-3 px-5 rounded-md cursor-pointer"
        >
          + Añadir
        </button>
      </form>
    </div>
  );
}
