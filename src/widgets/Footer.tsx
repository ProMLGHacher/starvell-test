import { Container } from "@/components/layouts/Container";
import Logo from "@/components/ui/logo";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="min-h-[100px] bg-white pt-[32px] pb-[44px]">
      <Container className="grid grid-cols-[1fr_1.12fr_1fr] gap-[64px]">
        <div className="flex flex-col">
          <Logo />
          <p className="text-secondary-foreground text-sm font-normal mt-3">
            © 2024 STARVELL, лучший маркетплейс цифровых товаров и услуг
          </p>
          <p className="text-secondary-foreground text-sm font-normal mt-2">
            Дизайн сделан в 0xHearts.com
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-muted text-base font-medium">Поддержка</p>
          <Link
            className="text-secondary-foreground text-sm font-normal mt-2"
            href="/"
          >
            Написать в поддержку
          </Link>
          <Link
            className="text-secondary-foreground text-sm font-normal mt-1"
            href="/"
          >
            Политика конфиденциальности
          </Link>
          <Link
            className="text-secondary-foreground text-sm font-normal mt-1"
            href="/"
          >
            Пользовательское соглашение
          </Link>
        </div>
        <div className="flex justify-end gap-3 items-start">
          <a href="https://t.me/starve_ll" target="_blank">
            <Image src="/sm/tg.png" alt="Telegram" width={44} height={44} />
          </a>
          <a href="https://discord.gg/starve_ll" target="_blank">
            <Image src="/sm/ds.png" alt="Discord" width={44} height={44} />
          </a>
          <a href="https://vk.com/starve_ll" target="_blank">
            <Image src="/sm/vk.png" alt="VK" width={44} height={44} />
          </a>
          <a href="https://www.youtube.com/@starve_ll">
            <Image src="/sm/yt.png" alt="YouTube" width={44} height={44} />
          </a>
        </div>
      </Container>
    </footer>
  );
};
