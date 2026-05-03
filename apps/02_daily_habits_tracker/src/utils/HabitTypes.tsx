import { HiOutlineAcademicCap } from "react-icons/hi2";
import type { HabitType } from "../models/habitType";
import { TbDroplet } from "react-icons/tb";
import { CiDumbbell } from "react-icons/ci";

export const habitTypes: HabitType[] = [
  {
    name: "Salud",
    id: "0",
    colors: { primary: "#22C55E", secondary: "#DCFCE7" },
    icon: <CiDumbbell />,
  },
  {
    name: "Productividad",
    id: "1",
    colors: { primary: "#3B82F6", secondary: "#DBEAFE" },
  },
  {
    name: "Personal",
    id: "2",
    colors: { primary: "#F59E0B", secondary: "#FEF3C7" },
  },
  {
    name: "Aprendizaje",
    id: "3",
    colors: { primary: "#8B5CF6", secondary: "#EDE9FE" },
    icon: <HiOutlineAcademicCap />,
  },
  {
    name: "Otros",
    id: "4",
    colors: { primary: "#EC4899", secondary: "#FCE7F3" },
    icon: <TbDroplet />,
  },
];
