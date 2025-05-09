import { useForm } from 'react-hook-form';
import { z, ZodSchema } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { UseMutationResult } from '@tanstack/react-query';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';
import { Button } from '@/components/ui/button';
import {
  HTMLInputAutoCompleteAttribute,
  HTMLInputTypeAttribute,
  ReactElement,
} from 'react';

export type Values = {
  [p: string]: {
    label: string;
    default: any;
    component: typeof Input | typeof PasswordInput;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    autoComplete?: HTMLInputAutoCompleteAttribute;
  };
};

type FormProps = {
  title: string;
  description: string;
  formSchema: ZodSchema;
  mutation: UseMutationResult<any, any, any, any>;
  values: Values;
  OtherAuth: ReactElement<any, any>;
  button: string;
};

export default function AuthForm ({
  title,
  description,
  formSchema,
  mutation,
  values,
  OtherAuth,
  button,
}: FormProps) {
  const defaultValues: { [p: string]: any } = {};

  for (const key in defaultValues) {
    defaultValues[key] = values[key].default;
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  function onSubmit (values: z.infer<typeof formSchema>) {
    mutation.mutate(values);
  }

  return (
    <div className="flex flex-col min-h-[50vh] h-full w-full items-center justify-center px-4">
      <Card className="mx-auto min-w-fit max-w-1/3 w-full max-h-full">
        <CardHeader>
          <CardTitle className="text-4xl">{title}</CardTitle>
          <CardDescription className="text-xl">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              autoComplete="off"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              <div className="grid gap-8">
                {...Object.entries(values).map(([name, values]) => {
                  const otherProps = {
                    placeholder: values.placeholder,
                    type: values.type,
                    autoComplete: values.autoComplete,
                  };

                  const filtered = Object.fromEntries(
                    Object.entries(otherProps).filter(
                      ([_, value]) => value !== undefined,
                    ),
                  );

                  return (
                    <FormField
                      control={form.control}
                      name={name}
                      render={({ field }) => (
                        <FormItem className="grid gap-2">
                          <FormLabel htmlFor={name} className="text-lg">
                            {values.label}
                          </FormLabel>
                          <FormControl>
                            <values.component
                              id={name}
                              {...{ ...filtered, ...field }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  );
                })}
                <Button
                  type="submit"
                  className="w-full text-lg"
                  size="lg"
                  disabled={mutation.isLoading}
                >
                  {mutation.isLoading ? 'Processing...' : button}
                </Button>
              </div>
            </form>
          </Form>
          {OtherAuth}
        </CardContent>
      </Card>
    </div>
  );
}
