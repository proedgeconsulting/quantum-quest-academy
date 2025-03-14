
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

// Export the routes array as navItems for use in MobileNav
export const navItems = [
  {
    href: "/curriculum",
    label: "Curriculum",
    title: "Curriculum",
  },
  {
    href: "/courses",
    label: "Courses",
    title: "Courses",
  },
  {
    href: "/tools",
    label: "Tools",
    title: "Tools",
  },
  {
    href: "/about",
    label: "About",
    title: "About",
  },
  {
    href: "/faq",
    label: "FAQ",
    title: "FAQ",
  },
  {
    href: "/admin",
    label: "Admin",
    title: "Admin",
    requiresAuth: true,
    adminOnly: true,
  },
];

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const location = useLocation();
  const { user } = useAuth();

  // In a real application, you would check if the user has admin role
  // For demo purposes, we'll show the admin link for all logged in users
  const isAdmin = user !== null;

  const routes = navItems.map(item => ({
    ...item,
    active: location.pathname === item.href,
  }));

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {routes.map((route) => {
        if (route.requiresAuth && !user) {
          return null;
        }

        if (route.adminOnly && !isAdmin) {
          return null;
        }

        return (
          <Link
            key={route.href}
            to={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              route.active
                ? "text-black dark:text-white"
                : "text-muted-foreground"
            )}
          >
            {route.adminOnly ? (
              <div className="flex items-center gap-1">
                <ShieldCheck className="h-4 w-4" />
                {route.label}
              </div>
            ) : (
              route.label
            )}
          </Link>
        );
      })}
    </nav>
  );
}
