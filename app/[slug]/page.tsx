import { notFound } from "next/navigation";
import BotLoader from "./BotLoader";

type Props = {
  params: {
    slug: string;
  };
};

interface DemoData {
  title: string;
  description: string;
  services?: string[];
  whyUs?: string[];
  faqs?: { question: string; answer: string }[];
  tidioBotUrl: string;
}

export default async function DemoPage({ params }: Props) {
  let data: DemoData;

  try {
    data = (await import(`../../data/${params.slug}.json`)).default;
  } catch (err) {
    return notFound();
  }

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
      {data.description && <p className="text-lg text-gray-600 mb-6">{data.description}</p>}

      {data.services?.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Servicios</h2>
          <ul className="list-disc list-inside">
            {data.services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>
      )}

      {data.whyUs?.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-2">¿Por qué elegirnos?</h2>
          <ul className="list-disc list-inside">
            {data.whyUs.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </section>
      )}

      {data.faqs?.length > 0 && (
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {data.faqs.map((faq, idx) => (
              <div key={idx}>
                <h3 className="font-medium text-lg">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <BotLoader url={data.tidioBotUrl} />

      <p className="text-center text-gray-500 text-sm mt-10">
        El bot aparecerá en la esquina inferior derecha 👇
      </p>
    </main>
  );
}