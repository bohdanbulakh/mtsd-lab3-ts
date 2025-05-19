'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { PropsWithChildren } from 'react';
import { useTranslations } from 'next-intl';

type Props = PropsWithChildren<{
  onConfirm?: () => void;
  onCancel?: () => void;
}>;

export default function LogoutAlert ({
  children,
  onConfirm = () => {},
  onCancel = () => {},
}: Props) {
  const targetKey = useTranslations('account');

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="w-1/5">
        <AlertDialogHeader className="m-auto">
          <AlertDialogTitle>{targetKey('logoutAlertTitle')}</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onCancel} className="w-[50%]">{targetKey('logoutAlertCancel')}</AlertDialogAction>
          <AlertDialogCancel onClick={onConfirm} className="w-[50%]">{targetKey('logoutAlertConfirm')}</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
