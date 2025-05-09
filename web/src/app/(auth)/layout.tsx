import { ReactNode } from 'react';

export default function AuthLayout ({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <div className="mt-10">
    {children}
  </div>;
}
