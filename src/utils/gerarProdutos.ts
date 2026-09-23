import { Produto } from '@/types/produto';
import { PRODUTOS } from '@/constants/produtos';

export const PRODUTOS_TESTE: Produto[] = Array.from({ length: 500 }, (_, index) => {
  const base = PRODUTOS[index % PRODUTOS.length];
  return {
    ...base,
    id: index + 1,
    title: `${base.title} #${index + 1}`,
  };
});
