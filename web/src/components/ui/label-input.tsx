import { ComponentProps, PropsWithChildren } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';

type Props = PropsWithChildren<ComponentProps<'input'>>;

export function LabelInput ({ children, ...props }: Props) {
  return (
    <div className="grid gap-2">
      <Label className="text-lg">{children}</Label>
      {props.value ? (
        <Input disabled className={'disabled:opacity-100'} {...props} />
      ) : (
        <>
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-4/5" />
        </>
      )}
    </div>
  );
}
