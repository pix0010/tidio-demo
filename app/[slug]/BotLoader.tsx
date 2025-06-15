// app/[slug]/BotLoader.tsx
import { useEffect } from "react";

export default function BotLoader({ url }: { url: string }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    document.body.appendChild(script);

    // ✅ функция очистки — удаляем скрипт
    return () => {
      document.body.removeChild(script);
    };
  }, [url]);

  return null; // компонент ничего не рендерит
}