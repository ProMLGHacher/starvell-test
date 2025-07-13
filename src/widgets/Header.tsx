import { SearchIcon } from "@/components/icons/Search";
import { Container } from "@/components/layouts/Container";
import { NavLink, NavLinkItem } from "@/components/navlink";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/ui/logo";

export const Header = () => {
  return (
    <header className="bg-white ">
      <Container className="flex items-center justify-between py-3">
        <div className="flex items-center gap-[50px]">
          <Logo />
          <Input
            prefix={<SearchIcon color="#9A9BA3" />}
            type="search"
            placeholder="Поиск игр и приложений..."
            wrapperClassName="w-96 h-[32px]"
            className="text-[14px] placeholder:text-[14px]"
          />
        </div>
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-4">
            <NavLink
              content={
                <>
                  <NavLinkItem href="/">Пункт меню</NavLinkItem>
                  <NavLinkItem href="/">Пункт меню</NavLinkItem>
                  <NavLinkItem href="/">Пункт меню</NavLinkItem>
                  <NavLinkItem href="/">Пункт меню</NavLinkItem>
                </>
              }
              trigger={<span>Поддержка</span>}
            />
            <NavLink
              content={
                <>
                  <NavLinkItem href="/">Пункт меню</NavLinkItem>
                  <NavLinkItem href="/">Пункт меню</NavLinkItem>
                  <NavLinkItem href="/">Пункт меню</NavLinkItem>
                  <NavLinkItem href="/">Пункт меню</NavLinkItem>
                </>
              }
              trigger={<span>Русский</span>}
            />
            <NavLink
              content={
                <>
                  <NavLinkItem href="/">Пункт меню</NavLinkItem>
                  <NavLinkItem href="/">Пункт меню</NavLinkItem>
                  <NavLinkItem href="/">Пункт меню</NavLinkItem>
                  <NavLinkItem href="/">Пункт меню</NavLinkItem>
                </>
              }
              trigger={<span>RUB</span>}
            />
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost">Вход</Button>
            <Button variant="primary">Регистрация</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
