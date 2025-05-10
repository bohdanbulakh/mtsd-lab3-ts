'use client';

import * as React from 'react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export default function Header () {
  return (
    <NavigationMenu className="h-20 max-w-screen">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/login"
            className={navigationMenuTriggerStyle()}
          >
            User Info
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
