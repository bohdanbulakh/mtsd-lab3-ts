import { ShortProductResponse } from '@mtsd-lab3/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { capitalize } from '@/lib/utils/general';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import ClientButton from '@/app/components/product/ClientButton';

type Props = {
  product: ShortProductResponse;
};

export default function ProductCard ({ product }: Props) {
  return (
    <Card className="min-w-60 min-h-40 max-w-96">
      <CardHeader className="text-2xl">
        {product.icon && (
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <Image
              src={product.icon}
              alt={product.name}
              fill
              className="h-full w-full rounded-md object-cover"
            />
          </AspectRatio>
        )}
      </CardHeader>
      <CardContent>
        <CardDescription className="text-xl">
          {capitalize(product.name)}
        </CardDescription>
        <div className="flex gap-2">
          <Label className="mr-auto text-xl">{product.price}$</Label>
          <ClientButton product={product}>Add to cart</ClientButton>
        </div>
      </CardContent>
    </Card>
  );
}
