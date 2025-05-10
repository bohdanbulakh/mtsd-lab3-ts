'use client';

import * as React from 'react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import { Label } from '@/components/ui/label';
import { useTranslations } from 'next-intl';

export default function Header () {
  const targetKey = useTranslations('header');

  return (
    <header className="flex items-center justify-between w-full px-6 bg-white shadow-md sticky top-0 z-50">
      <div className="relative w-[100px] h-[48px] sm:w-[150px] sm:h-[64px] md:w-[250px] md:h-[80px] lg:w-[300px] lg:h-[96px] min-w-[100px] min-h-[48px]">
        <Image
          src="/logo.png"
          alt="Stone Store Logo"
          fill
          priority
          className="object-contain"
        />
      </div>
      <NavigationMenu className="mr-[3%]">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/login"
              className={navigationMenuTriggerStyle()}
            >
              <Label className="font-bold text-base sm:text-xl md:text-2xl lg:text-3xl">
                {targetKey('account')}
              </Label>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
