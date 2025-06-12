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
      <section>
  <h2 className="text-2xl font-bold mb-2">О салоне</h2>
  <p className="mb-4">
    Добро пожаловать в наш уютный салон красоты в Валенсии! Мы предлагаем широкий спектр процедур по уходу за волосами, кожей и ногтями.
    Наша команда — это опытные мастера с индивидуальным подходом к каждому клиенту.
  </p>
  <p className="mb-4">
    Мы работаем только с профессиональной косметикой: L Oréal, Wella, OPI, Dermalogica и другими топовыми брендами.
    Уютная атмосфера, внимательное отношение и качественный результат — наш стандарт.
  </p>
</section>

<section>
  <h2 className="text-2xl font-bold mb-2 mt-6">Часы работы</h2>
  <ul className="list-disc list-inside">
    <li>Понедельник – Пятница: 10:00 – 20:00</li>
    <li>Суббота: 10:00 – 18:00</li>
    <li>Воскресенье: выходной</li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-bold mb-2 mt-6">Контакты</h2>
  <p>Адрес: Carrer de l’Art, 17, Valencia</p>
  <p>Телефон (WhatsApp): +34 600 000 000</p>
  <p>Email: contacto@salonbelleza.com</p>
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
  <p>
    Наш чат-бот доступен в правом нижнем углу. Он поможет вам выбрать услугу,
    записаться или уточнить стоимость — работает 24/7.
  </p>
</section>
    </div>
  );
}