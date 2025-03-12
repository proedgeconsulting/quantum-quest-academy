
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";

interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export const navItems: NavItem[] = [
  {
    title: "Curriculum",
    href: "/curriculum",
    description: "Our structured learning path for quantum physics and computing",
  },
  {
    title: "Courses",
    href: "/courses",
    description: "Browse our library of interactive quantum courses",
  },
  {
    title: "Tools",
    href: "/tools",
    description: "Interactive simulators and quantum tools",
  },
  {
    title: "Social Learning",
    href: "/social",
    description: "Learn together with our community features",
  },
  {
    title: "For Teachers",
    href: "/teachers",
    description: "Resources for educators",
  },
  {
    title: "About",
    href: "/about",
    description: "Learn about our mission and approach",
  },
  {
    title: "FAQ",
    href: "/faq",
    description: "Answers to common questions",
  },
];

interface MainNavProps {
  items?: NavItem[];
  className?: string;
}

export function MainNav({ items = navItems, className }: MainNavProps) {
  const { user } = useAuth();
  
  return (
    <nav className={cn("flex items-center space-x-6", className)}>
      {items.map((item) => (
        <Link 
          key={item.href} 
          to={item.href}
          className="relative text-quantum-900 dark:text-quantum-100 hover:text-quantum-600 dark:hover:text-quantum-300 transition-colors group"
        >
          {item.title}
          <motion.span
            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-quantum-500 group-hover:w-full transition-all duration-300"
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </Link>
      ))}
      
      {!user && (
        <Button asChild size="sm">
          <Link to="/auth">Sign In</Link>
        </Button>
      )}
    </nav>
  );
}
