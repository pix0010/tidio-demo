import { notFound } from "next/navigation";
import BotLoader from "./BotLoader";

// 👇 Это нужный тип для функции страницы
type Props = {
  params: {
    slug: string;
  };
};

// 👇 Сам компонент страницы
export default async function DemoPage({ params }: Props) {
  let data;
  try {
    data = (await import(`../../data/${params.slug}.json`)).default;
  } catch {
    return notFound();
  }

  const {
    title,
    description,
    services = [],
    whyUs = [],
    tidioBotUrl,
    faqs = [],
  } = data;

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p className="text-lg text-gray-600 mb-6">{description}</p>

      {services.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Servicios</h2>
          <ul className="list-disc list-inside">
            {services.map((s: string, i: number) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </section>
      )}

      {whyUs.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-2">¿Por qué elegirnos?</h2>
          <ul className="list-disc list-inside">
            {whyUs.map((w: string, i: number) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((faq: { question: string; answer: string }, idx: number) => (
              <div key={idx}>
                <h3 className="font-medium text-lg">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {tidioBotUrl && <BotLoader url={tidioBotUrl} />}
    </main>
  );
}