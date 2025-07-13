import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ChevronDownIcon } from "lucide-react";

type NavLinkProps = {
  content: React.ReactNode;
  trigger: React.ReactNode;
};

export const NavLink = ({ content, trigger }: NavLinkProps) => {
  return (
    <Popover>
      <PopoverTrigger className="cursor-pointer text-sm font-normal flex items-center gap-1 text-secondary-foreground data-[state=open]:text-muted data-[state=open]:[&_svg]:rotate-180">
        {trigger}
        <ChevronDownIcon className="transition-transform duration-180 size-4" />
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="max-w-[168px] p-1 flex flex-col gap-0"
      >
        {content}
      </PopoverContent>
    </Popover>
  );
};

export const NavLinkItem = ({
  href,
  children,
  ...props
}: React.ComponentProps<typeof Link>) => {
  return (
    <Link
      className="p-2 text-muted hover:bg-background rounded-lg"
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};
