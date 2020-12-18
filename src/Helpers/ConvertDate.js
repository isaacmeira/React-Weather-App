import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function formatedDate(item) {
  // seg, 22 jun
  return format(new Date(item), 'EEE, d MMM  ', {
    locale: ptBR,
  });
}
