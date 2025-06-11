import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function BeautySalonDemo() {
  return (
    <div className="min-h-screen p-6 grid gap-6 bg-white text-gray-800">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-2">Tu Belleza, Nuestra Pasión</h1>
        <p className="text-lg">Demo-сайт салона красоты с умным чат-ботом</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Услуги</h2>
            <ul className="list-disc list-inside">
              <li>Стрижки и укладки</li>
              <li>Маникюр и педикюр</li>
              <li>Окрашивание волос</li>
              <li>Косметология и уход за кожей</li>
              <li>Брови и ресницы</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Почему выбирают нас?</h2>
            <ul className="list-disc list-inside">
              <li>Опытные мастера</li>
              <li>Индивидуальный подход</li>
              <li>Лучшие бренды косметики</li>
              <li>Уютная атмосфера</li>
              <li>Онлайн-запись через бот</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Оставьте заявку</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
          <Input placeholder="Ваше имя" />
          <Input placeholder="Телефон или WhatsApp" />
          <Button className="mt-2 sm:mt-0">Записаться</Button>
        </div>
      </section>

      <section className="text-center mt-8">
        <h2 className="text-2xl font-bold mb-2">💬 Онлайн-консультант</h2>
        <p>Чат-бот ответит на ваши вопросы 24/7: цены, услуги, запись</p>
        <div className="mt-4">
          <iframe
            src="https://www.tidio.com/popup-builder/demo/" // заменим на реальный bot URL позже
            width="100%"
            height="500"
            style={{ border: "1px solid #ccc", borderRadius: "12px" }}
            title="Demo chatbot"
          ></iframe>
        </div>
      </section>
    </div>
  );
}