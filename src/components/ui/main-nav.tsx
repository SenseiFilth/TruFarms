
'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {cn} from '@/lib/utils';
import {Button} from '@/components/ui/button';
import {usePathname} from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const MainNav = () => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    {name: 'Products', href: '/products'},
    {name: 'Customers', href: '/customers'},
    {name: 'Payments', href: '/payments'},
    {name: 'Employees', href: '/employees'},
    {name: 'Profile', href: '/profile'},
    {name: 'Settings', href: '/settings'},
  ];

  return (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Dashboard
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <p>Navigate to Dashboard</p>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Products
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <p>Manage your inventory items</p>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Customers
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <p>View and manage customer records</p>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Payments
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <p>Process and log transactions</p>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Employees
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <p>Manage employee records and access control</p>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Profile
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <p>User information and app session management</p>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Settings
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <p>App preferences and customization</p>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
  );
};

export default MainNav;
