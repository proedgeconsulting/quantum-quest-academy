
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const location = useLocation();
  const { user } = useAuth();

  // In a real application, you would check if the user has admin role
  // For demo purposes, we'll show the admin link for all logged in users
  const isAdmin = user !== null;

  const routes = [
    {
      href: "/curriculum",
      label: "Curriculum",
      active: location.pathname === "/curriculum",
    },
    {
      href: "/courses",
      label: "Courses",
      active: location.pathname === "/courses",
    },
    {
      href: "/progress",
      label: "My Progress",
      active: location.pathname === "/progress",
      requiresAuth: true,
    },
    {
      href: "/tools",
      label: "Tools",
      active: location.pathname === "/tools",
    },
    {
      href: "/about",
      label: "About",
      active: location.pathname === "/about",
    },
    {
      href: "/faq",
      label: "FAQ",
      active: location.pathname === "/faq",
    },
    {
      href: "/admin",
      label: "Admin",
      active: location.pathname === "/admin",
      requiresAuth: true,
      adminOnly: true,
    },
  ];

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
