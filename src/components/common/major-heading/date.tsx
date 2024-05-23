import { DateType } from "@/types";
import { format } from "date-fns";
import { ptBR } from 'date-fns/locale';

export default function Date({ date }: { date?: DateType }) {
  if (date === undefined) {
    return;
  }

  return (
    <span className="date">
      {format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
    </span>
  )
}