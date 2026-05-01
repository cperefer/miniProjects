import HabitTrackerList from "./HabitTrackerList";
import Heading from "./Heading";
import NewHabit from "./NewHabit";

export default function TrackingApp() {
  return (
    <div className="flex flex-col h-dvh justify-center items-center">
      <div className="w-4/6 bg-background border border-border rounded-xl ">
        <div className="border-b border-b-border p-5">
          <Heading
            title="✔️ Mis Hábitos"
            subtitle="Cuenta lo que haces, cada día cuenta"
          />
          <NewHabit />
        </div>
        <HabitTrackerList />
      </div>
    </div>
  );
}
