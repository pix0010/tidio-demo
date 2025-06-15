import { notFound } from "next/navigation";
import BotLoader from "./BotLoader";

export default async function DemoPage({ params }: { params: { slug: string } }) {
  let data: any;

  try {
    data = (await import(`../../data/${params.slug}.json`)).default;
  } catch {
    return notFound();
  }

  const { title, description, services = [], whyUs = [], tidioBotUrl } = data;

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      {description && <p className="text-lg text-gray-600 mb-6">{description}</p>}

      {services.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Servicios</h2>
          <ul className="list-disc list-inside">
            {services.map((s: string) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>
      )}

      {whyUs.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-2">¿Por qué elegirnos?</h2>
          <ul className="list-disc list-inside">
            {whyUs.map((w: string) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </section>
      )}

        {data.faqs?.length > 0 && (
    <section className="mt-8">
    <h2 className="text-2xl font-semibold mb-2">Preguntas frecuentes</h2>
    <div className="space-y-4">
      {data.faqs.map((faq: any, idx: number) => (
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