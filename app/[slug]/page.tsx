import { notFound } from "next/navigation";
import BotLoader from "./BotLoader";

interface DemoData {
  title: string;
  description: string;
  services?: string[];
  whyUs?: string[];
  tidioBotUrl: string;
  faqs?: { question: string; answer: string }[];
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function DemoPage({ params }: PageProps) {
  let data: DemoData;

  try {
    data = (await import(`../../data/${params.slug}.json`)).default;
  } catch {
    return notFound();
  }

  const { title, description, services = [], whyUs = [], tidioBotUrl, faqs = [] } = data;

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      {description && <p className="text-lg text-gray-600 mb-6">{description}</p>}

      {services.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Servicios</h2>
          <ul className="list-disc list-inside">
            {services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>
      )}

      {whyUs.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-2">¿Por qué elegirnos?</h2>
          <ul className="list-disc list-inside">
            {whyUs.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx}>
                <h3 className="font-medium text-lg">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {tidioBotUrl && <BotLoader url={tidioBotUrl} />}

      <p className="text-center text-gray-500 text-sm mt-10">
        El bot aparecerá en la esquina inferior derecha 👇
      </p>
    </main>
  );
}