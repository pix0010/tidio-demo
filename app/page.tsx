import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-6 bg-white text-gray-800">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">AI-боты для локального бизнеса</h1>
        <p className="text-lg text-gray-600">
          Автоматизация чатов на сайте, в WhatsApp и Instagram
        </p>
      </header>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <DemoCard title="Alma Masajes Valencia" slug="alma" />
        <DemoCard title="Cobre 29 Massage & Spa" slug="Cobre29" />
        {/* Добавляй новые карточки по мере создания json-файлов */}
      </section>

      <footer className="text-center mt-16 text-gray-500 text-sm">
        © {new Date().getFullYear()} AI Bots by YourName
      </footer>
    </main>
  );
}

function DemoCard({ title, slug }: { title: string; slug: string }) {
  return (
    <Link
      href={`/${slug}`}
      className="border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition block text-center"
    >
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-gray-500 text-sm">Посмотреть демо</p>
    </Link>
  );
}
