
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { navItems } from "./MainNav";
import { motion } from "framer-motion";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const { user, signOut } = useAuth();
  
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:w-80">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-left bg-gradient-to-r from-quantum-500 to-energy-500 text-transparent bg-clip-text">
            Quantum Quest
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-6 text-left">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                to={item.href}
                className="block px-2 py-3 text-lg hover:bg-quantum-100 dark:hover:bg-quantum-800 rounded-md"
                onClick={() => setOpen(false)}
              >
                {item.title}
              </Link>
            </motion.div>
          ))}
          
          <div className="border-t border-quantum-200 dark:border-quantum-700 pt-4">
            {user ? (
              <div className="space-y-3">
                <Link
                  to="/progress"
                  className="block px-2 py-3 hover:bg-quantum-100 dark:hover:bg-quantum-800 rounded-md"
                  onClick={() => setOpen(false)}
                >
                  My Progress
                </Link>
                <Link
                  to="/profile"
                  className="block px-2 py-3 hover:bg-quantum-100 dark:hover:bg-quantum-800 rounded-md"
                  onClick={() => setOpen(false)}
                >
                  Profile
                </Link>
                <Button 
                  variant="destructive" 
                  className="w-full mt-2" 
                  onClick={() => {
                    signOut();
                    setOpen(false);
                  }}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button asChild className="w-full">
                <Link to="/auth" onClick={() => setOpen(false)}>
                  Sign In
                </Link>
              </Button>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
