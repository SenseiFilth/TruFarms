
"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, ref) => (
  <div className={cn("group relative flex items-center", className)} {...props} ref={ref}>
    {children}
  </div>
))
NavigationMenu.displayName = "NavigationMenu"

const NavigationMenuList = React.forwardRef<
  React.ElementRef<"ul">,
  React.ComponentPropsWithoutRef<"ul">
>(({ className, children, ...props }, ref) => (
  <ul
    className={cn(
      "group data-[menu-open=true]:bg-popover data-[menu-open=true]:text-popover-foreground mx-auto hidden h-12 max-w-screen-2xl space-x-0 rounded-lg bg-muted/50 p-1 md:flex",
      className
    )}
    {...props}
    ref={ref}
  >
    {children}
  </ul>
))
NavigationMenuList.displayName = "NavigationMenuList"

const NavigationMenuItem = React.forwardRef<
  React.ElementRef<"li">,
  React.ComponentPropsWithoutRef<"li">
>(({ className, children, ...props }, ref) => (
  <li className={cn("relative", className)} {...props} ref={ref}>
    {children}
  </li>
))
NavigationMenuItem.displayName = "NavigationMenuItem"

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<"button">,
  React.ComponentPropsWithoutRef<"button">
>(({ className, children, ...props }, ref) => (
  <button
    className={cn(
      "data-[active=true]:bg-accent data-[active=true]:text-accent-foreground block select-none space-y-0.5 rounded-md p-3 text-sm font-medium no-underline transition-colors hover:bg-secondary hover:text-secondary-foreground focus:bg-secondary focus:text-secondary-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-secondary data-[state=open]:text-secondary-foreground",
      className
    )}
    {...props}
    ref={ref}
  >
    {children}
  </button>
))
NavigationMenuTrigger.displayName = "NavigationMenuTrigger"

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, ref) => (
  <div
    className={cn(
      "absolute top-0 left-0 w-full data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1 mx-auto max-w-screen-2xl overflow-hidden rounded-md border bg-popover p-4 text-popover-foreground animate-in fade-in-80 slide-in-from-bottom-4 md:w-[15rem] md:p-6",
      className
    )}
    {...props}
    ref={ref}
  >
    {children}
  </div>
))
NavigationMenuContent.displayName = "NavigationMenuContent"

const NavigationMenuLink = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, children, ...props }, ref) => (
  <Link
    className={cn(
      "block select-none space-y-0.5 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      className
    )}
    {...props}
    ref={ref}
  >
    {children}
  </Link>
))
NavigationMenuLink.displayName = "NavigationMenuLink"

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
}
