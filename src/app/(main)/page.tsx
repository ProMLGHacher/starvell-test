import { Container } from "@/components/layouts/Container";
import { Button } from "@/components/ui/button";
import { CaregorySelect } from "@/widgets/CaregorySelect";
import { Filters } from "@/widgets/Filters";
import { Header } from "@/widgets/Header";
import { Metadata } from "next";
import Image from "next/image";
import { columns } from "./columns";
import { data } from "./mock";
import { DataTable } from "./data-table";
import { Footer } from "@/widgets/Footer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProfileReportForm } from "@/widgets/ProfileReportForm";

export const metadata: Metadata = {
  title: "Робуксы Roblox",
  description: `Какой-то длинный текст, связанный с SEO-оптимизацией относительно
          данной категории, на которую вы сейчас смотрите. Какой-то длинный
          текст, связанный с SEO-оптимизацией относительно данной категории, на
          которую вы сейчас смотрите.`,
};

export default function Home() {
  return (
    <>
      <Header />
      <Container className="mt-[24px] mb-[25px] bg-white rounded-2xl px-16 py-10 relative">
        <Image
          src="/roblox.png"
          alt="Roblox Image"
          className="absolute top-0 right-0 z-[0]"
          width={418}
          height={414}
        />
        <div className="max-w-[680px] z-[1] relative">
          <h1 className="text-foreground font-semibold text-2xl">
            Робуксы Roblox
          </h1>
          <h2 className="text-secondary-foreground font-normal text-base mt-1">
            Какой-то длинный текст, связанный с SEO-оптимизацией относительно
            данной категории, на которую вы сейчас смотрите. Какой-то длинный
            текст, связанный с SEO-оптимизацией относительно данной категории,
            на которую вы сейчас смотрите.
          </h2>
          <CaregorySelect className="mt-6" />
        </div>
        <hr className="bg-divider h-[1px] mt-6 mb-4" />
        <div className="flex justify-between gap-4">
          <Filters />
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="primary" size={"lg"}>
                Продать Blox Fruits
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Жалоба на 0xHearts.com</DialogTitle>
              </DialogHeader>
              <ProfileReportForm />
            </DialogContent>
          </Dialog>
        </div>
        <DataTable columns={columns} data={data} className="mt-[31px]" />
        <Button variant="ghost" className="mt-6 w-full" size="xl">
          Показать больше предложений
        </Button>
        <hr className="bg-[#E8EBF0] h-[1px] mt-[40px] mb-[24px]" />
        <div className="text-[#6E7076] text-sm font-medium leading-5 tracking-[-0.07px]">
          Робуксы — это валюта платформы мини игр Roblox, обеспечивающая
          комфортный геймплей и расширенные возможности для игрока. Что
          естественно притягивает толпы желающих их приобрести. Сделать это
          безопасно и без переплат лучше всего на проверенной площадке, которой
          и является биржа игровых ценностей FunPay. Мы обеспечиваем комфортные
          условия для торговли робуксами Roblox без посредников, поэтому на
          нашей торговой площадке всегда присутствует:
          <ul className="list-disc list-inside">
            <li className="pl-2">
              Безопасность сделок. Они проходят в три этапа: оплата, получение
              игровой валюты, подтверждение выполнения заказа.
            </li>
            <li className="pl-2">
              Реальный рыночный курс робуксов. Формируется в условиях
              естественной конкуренции между продавцами.
            </li>
            <li className="pl-2">
              Быстрое оформление заказов. Всего за несколько кликов, с оплатой
              любым удобным для вас способом.
            </li>
          </ul>
          Если же у вас возникнут вопросы, то служба поддержки FunPay ответит на
          них в любое время суток!
          <br />
          <br />
          <span className="text-base font-medium leading-6">Как купить</span>
          <br />
          Покупка робуксов осуществляется просто, как мы писали выше, нужно
          сделать всего три действия:
          <ol className="list-decimal list-inside">
            <li className="pl-2">
              Выбрать предложение, кликнув на него, и находясь на странице
              оформления заказа, связаться с продавцом.
            </li>
            <li className="pl-2">
              Оплатить заказ на нужное количество робуксов.
            </li>
            <li className="pl-2">
              Получить игровую валюту RBX и подтвердить выполнение заказа. После
              можно оставить отзыв продавцу и оценить его работу.
            </li>
          </ol>
          Продавец получит ваши деньги только после того, как вы получите
          робуксы в Roblox и отправите системе подтверждение о выполнении
          заказа.
          <br />
          <br />
          <span className="text-base font-medium leading-6">Продавцам</span>
          <br />
          Если вы опытный продавец или начинаете свой путь с нуля — неважно, у
          вас есть замечательная возможность продать робуксы через FunPay. Чтобы
          стать продавцом нашей биржи, следуйте следующим принципам:
          <ul className="list-disc list-inside">
            <li className="pl-2">
              Выставляйте на продажу только ту сумму, что есть у вас в наличии,
              чтобы вы смогли быстро передать игровую валюту клиенту.
            </li>
            <li className="pl-2">
              Вежливо отвечайте на вопросы потенциальных покупателей.
            </li>
            <li className="pl-2">
              Ответственно относитесь к своим обязанностям и выполняйте заказы в
              кратчайшие сроки.
            </li>
            <li className="pl-2">
              Покупатель должен получить столько робуксов, сколько он указал в
              заказе.
            </li>
          </ul>
          И помните, чем больше у вас довольных клиентов, тем выше шанс
          превратить своё хобби в отличный источник дохода. Присоединяйтесь к
          FunPay!
        </div>
      </Container>
      <Footer />
    </>
  );
}
