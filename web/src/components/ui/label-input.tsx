import { ComponentProps, PropsWithChildren } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

type Props = PropsWithChildren<
  ComponentProps<'input'> & {
    value: string;
  }
>;

export function LabelInput ({ children, ...props }: Props) {
  return (
    <div className="grid gap-2">
      <Label className="text-lg">{children}</Label>
      <Input disabled className={'disabled:opacity-100'} {...props} />
    </div>
  );
}
