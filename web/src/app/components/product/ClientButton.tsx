'use client';

import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { PropsWithChildren } from 'react';
import { capitalize } from '@/lib/utils/general';
import { ShortProductResponse } from '@mtsd-lab3/utils';
import ProductAPI from '@/lib/api/product/ProductAPI';
import { useRouter } from 'next/navigation';

type Props = PropsWithChildren & {
  product: ShortProductResponse;
};

export default function ClientButton ({ children, product }: Props) {
  const router = useRouter();

  async function onClick () {
    try {
      await ProductAPI.addToChart(product.id);
      toast.success(`${capitalize(product.name)} added to chart`);
    } catch (error: any) {
      if (error.status === 401) {
        toast.info('Please, log in to add products to chart');
        router.push('/login');
      } else {
        toast.error(error.message);
      }
    }
  }

  return <Button onClick={onClick}>{children}</Button>;
}
