'use client';

import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { PropsWithChildren } from 'react';
import { capitalize } from '@/lib/utils/general';
import { ShortProductResponse } from '@mtsd-lab3/utils';
import ProductAPI from '@/lib/api/product/ProductAPI';

type Props = PropsWithChildren & {
  product: ShortProductResponse;
}

export default function ClientButton ({ children, product }: Props) {
  async function onClick () {
    try {
      await ProductAPI.addToChart(product.id);
      toast.success(`${capitalize(product.name)} added to chart`);
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return <Button onClick={onClick}>{children}</Button>;
}
