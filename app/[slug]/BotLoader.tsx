"use client";                         // ← добавили эту строку

import { useEffect } from "react";

export default function BotLoader({ url }: { url: string }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    document.body.appendChild(script);

    return () => document.body.removeChild(script); // cleanup
  }, [url]);

  return null; // компонент ничего не рендерит
}