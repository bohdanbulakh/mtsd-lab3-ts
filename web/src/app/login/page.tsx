'use client';

import { z } from 'zod';
import { toast } from 'sonner';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import AuthApi from '@/lib/api/auth/AuthApi';
import { useRouter } from 'next/navigation';
import AuthForm, { Values } from '@/app/components/AuthForm';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';
import { useTranslations } from 'next-intl';

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' })
    .regex(/[a-zA-Z0-9]/, { message: 'Password must be alphanumeric' }),
});

export default function RegisterForm () {
  const targetKey = useTranslations('login');

  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (data: z.infer<typeof formSchema>) => {
      await AuthApi.login(data);
    },
    onSuccess: () => {
      toast.success('Logged in successfully!');
      queryClient.invalidateQueries({ queryKey: ['register'] });
      router.push('/');
    },
    onError: (error: any) => {
      const message =
        error.response?.data?.message ||
        'Registration failed. Please try again.';
      toast.error(message);
    },
  });

  const values: Values = {
    email: {
      default: '',
      label: 'Email',
      component: Input,
      placeholder: 'mykola007@mail.com',
      type: 'email',
      autoComplete: 'email',
    },
    password: {
      default: '',
      label: useTranslations('auth')('password'),
      component: PasswordInput,
      placeholder: '********',
      autoComplete: 'current-password',
    },
  };

  return (
    <AuthForm
      title={targetKey('title')}
      description={targetKey('description')}
      formSchema={formSchema}
      mutation={mutation}
      values={values}
      OtherAuth={
        <div className="mt-8 text-center text-base">
          {targetKey('redirectMessage') + '\t'}
          <Link href="/register" className="underline">
            {useTranslations('register')('title')}
          </Link>
        </div>
      }
      button={targetKey('button')}
    />
  );
}
