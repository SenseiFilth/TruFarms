'use client';

import React from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {
  Home,
  Package,
  Users,
  CreditCard,
  User,
  Settings,
  LogOut
} from 'lucide-react'; // Make sure these icons are available in lucide-react
import { cn } from "@/lib/utils";

const MainNav = () => {
  const pathname = usePathname();

  const navItems = [
    {
      name: 'Dashboard',
      href: '/',
      icon: Home,
    },
    {
      name: 'Products',
      href: '/products',
      icon: Package,
    },
    {
      name: 'Customers',
      href: '/customers',
      icon: Users,
    },
    {
      name: 'Payments',
      href: '/payments',
      icon: CreditCard,
    },
    {
      name: 'Employees',
      href: '/employees',
      icon: User,
    },
    {
      name: 'Profile',
      href: '/profile',
      icon: User,
    },
    {
      name: 'Settings',
      href: '/settings',
      icon: Settings,
    },
  ];

  return (
    <nav className="bg-secondary p-4 flex justify-around items-center shadow-md">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            "flex flex-col items-center text-sm font-medium",
            pathname === item.href
              ? "text-primary" // Highlight the active link
              : "text-foreground hover:text-primary transition-colors"
          )}
        >
          {item.icon && <item.icon className="h-5 w-5 mb-1" />}
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
