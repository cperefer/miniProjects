import { useParams } from "react-router";

export default function Question() {
  const { id } = useParams();
  return (
    <div>
      <div>{id}</div>
    </div>
  );
}
