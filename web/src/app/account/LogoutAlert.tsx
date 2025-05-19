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

type Props = PropsWithChildren<{
  onConfirm?: () => void;
  onCancel?: () => void;
}>;

export default function LogoutAlert ({
  children,
  onConfirm = () => {},
  onCancel = () => {},
}: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="w-1/5">
        <AlertDialogHeader className="m-auto">
          <AlertDialogTitle>Do you really want to logout?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onCancel} className="w-[50%]">Cancel</AlertDialogAction>
          <AlertDialogCancel onClick={onConfirm} className="w-[50%]">Continue</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
