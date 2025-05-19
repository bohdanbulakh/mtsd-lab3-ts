'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuthentication } from '@/hooks/use-authentication/useAuthentication';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useCallback } from 'react';
import { toast } from 'sonner';
import AuthApi from '@/lib/api/auth/AuthApi';
import { useTranslations } from 'next-intl';
import { LabelInput } from '@/components/ui/label-input';
import LogoutAlert from '@/app/account/LogoutAlert';

export default function AccountPage () {
  const targetKey = useTranslations('account');
  const commonKey = useTranslations('common');

  const router = useRouter();
  const { user, isLoading } = useAuthentication();

  const onClick = useCallback(async () => {
    try {
      await AuthApi.logout();
      toast.success(targetKey('logoutToastSuccess'));
      router.push('/');
    } catch (error: any) {
      toast.error(error.message);
    }
  }, []);

  if (!isLoading && !user) router.push('/login');

  return (
    <Card className="mx-auto min-w-fit max-w-1/3 w-full max-h-full">
      <CardHeader>
        <CardTitle className="text-4xl">{targetKey('title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-8">
          {!isLoading && user ? (
            <>
              <LabelInput value={user.firstName}>
                {commonKey('firstName')}
              </LabelInput>
              <LabelInput value={user.lastName}>
                {commonKey('lastName')}
              </LabelInput>
              <LabelInput value={user.email}>Email</LabelInput>

              <LogoutAlert onConfirm={() => onClick()}>
                <Button className="w-full text-lg" size="lg">
                  {targetKey('button')}
                </Button>
              </LogoutAlert>
            </>
          ) : (
            <></>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
