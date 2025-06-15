"use client";

import { useEffect } from "react";

export default function BotLoader({ url }: { url: string }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    document.body.appendChild(script);

    // ✅ cleanup возвращает void
    return () => {
      document.body.removeChild(script);   // теперь без «return Node»
    };
  }, [url]);

  return null; // компонент ничего не рисует
}