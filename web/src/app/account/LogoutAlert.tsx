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
      <AlertDialogContent className="w-1/5 min-w-fit">
        <AlertDialogHeader className="m-auto">
          <AlertDialogTitle>{targetKey('logoutAlertTitle')}</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:flex md:flex justify-center">
          <AlertDialogAction onClick={onCancel} className="min-w-fit w-full sm:w-[50%] md:w-[50%] lg:w-[50%] sm:min-w-0">{targetKey('logoutAlertCancel')}</AlertDialogAction>
          <AlertDialogCancel onClick={onConfirm} className="min-w-fit w-full sm:w-[50%] md:w-[50%] lg:w-[50%] sm:min-w-0">{targetKey('logoutAlertConfirm')}</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
