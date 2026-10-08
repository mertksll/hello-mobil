import { useState } from "react";
export default function CanliRozet({ etiket = "Kahve molası sayacı" }: { etiket?: string }) {
  const [count, setCount] = useState(0);
  return (
    <button className="about-counter" onClick={() => setCount((c) => c + 1)}>
      {etiket}: <span aria-live="polite">{count}</span> +
    </button>
  );
}
