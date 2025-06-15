'use client';

import { useEffect } from 'react';

export default function BotLoader({ url }: { url: string }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, [url]);

  return null; // ничего не рендерим, только подключаем скрипт
}