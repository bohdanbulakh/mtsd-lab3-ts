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

const formSchema = z
  .object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' })
      .regex(/[a-zA-Z0-9]/, { message: 'Password must be alphanumeric' }),
    confirmPassword: z.string(),
    firstName: z
      .string()
      .min(2, { message: 'First name must be at least 2 characters long' }),
    lastName: z
      .string()
      .min(2, { message: 'Last name must be at least 2 characters long' }),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        path: ['password'],
        message: 'Passwords do not match',
        code: z.ZodIssueCode.custom,
      });
      ctx.addIssue({
        path: ['confirmPassword'],
        message: 'Passwords do not match',
        code: z.ZodIssueCode.custom,
      });
    }
  });

export default function RegisterForm () {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (data: z.infer<typeof formSchema>) => {
      await AuthApi.register(data);
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
      label: 'Password',
      component: PasswordInput,
      placeholder: '********',
      autoComplete: 'new-password',
    },
    confirmPassword: {
      default: '',
      label: 'Confirm Password',
      component: PasswordInput,
      placeholder: '********',
      autoComplete: 'new-password',
    },
    firstName: {
      default: '',
      label: 'First Name',
      component: Input,
      placeholder: 'Mykola',
      type: 'text',
      autoComplete: 'given-name',
    },
    lastName: {
      default: '',
      label: 'Last Name',
      component: Input,
      placeholder: 'Nestorenko',
      type: 'text',
      autoComplete: 'family-name',
    },
  };

  return (
    <AuthForm
      title="Register"
      description="Enter your info to create an account"
      formSchema={formSchema}
      mutation={mutation}
      values={values}
      OtherAuth={
        <div className="mt-8 text-center text-base">
          Already have an account?{' '}
          <Link href="/login" className="underline">
            Login
          </Link>
        </div>
      }
      button="Register"
    />
  );
}
