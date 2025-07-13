import { UploadIcon } from "@/components/icons/Upload";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ProfileReportForm() {
  return (
    <form className="flex flex-col">
      <label htmlFor="reason" className="flex flex-col gap-1">
        <span className="text-secondary-foreground text-sm font-normal">
          Причина жалобы
        </span>
        <Select>
          <SelectTrigger
            id="reason"
            className="border-[#E8EBF0] shadow-none h-[40px] w-full"
          >
            <SelectValue placeholder="Выберите причину" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
          </SelectContent>
        </Select>
      </label>
      <label htmlFor="description" className="flex flex-col gap-1 mt-4">
        <span className="text-secondary-foreground text-sm font-normal">
          Описание
        </span>
        <Textarea
          id="description"
          placeholder="Введите ваш текст"
          className="border-[#E8EBF0] shadow-none h-[116px] w-full placeholder:text-secondary-foreground text-base"
        />
      </label>
      <label htmlFor="evidence" className="flex flex-col gap-1 mt-4">
        <span className="text-secondary-foreground text-sm font-normal">
          Доказательства
        </span>
        <div className="relative h-[116px] dashed-border transition-all duration-300 focus-within:shadow-[0_0_0_3px_#0000001A] ">
          <input
            type="file"
            className="absolute top-0 left-0 w-full h-full opacity-0 z-10 m-0"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <UploadIcon className="size-[24px]" />
            <p className="text-muted text-base font-medium text-center mt-3">
              Выберите файл или перетащите его сюда
            </p>
            <p className="text-secondary-foreground text-sm font-normal text-center mt-1">
              JPEG или PNG до 5 MB
            </p>
          </div>
        </div>
      </label>
      <div className="grid grid-cols-2 gap-2 mt-5">
        <Button variant="ghost" size={"xl"}>
          Мне нужна поддержка
        </Button>
        <Button variant="primary" size={"xl"}>
          Пожаловаться
        </Button>
      </div>
    </form>
  );
}
