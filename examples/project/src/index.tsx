import { useState } from "react";

export default function Page() {
  const [a, setA] = useState(1);
  return <div>{a}</div>;
}

export const b = 2;
