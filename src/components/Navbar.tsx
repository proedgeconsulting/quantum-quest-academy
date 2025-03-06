
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Atom, GraduationCap, HelpCircle, Info, LogOut, Settings, Wrench, Trophy, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { user, profile, signOut } = useAuth();
  
  return (
    <nav className="bg-white/80 dark:bg-quantum-800/50 backdrop-blur-md sticky top-0 z-50 border-b border-quantum-200 dark:border-quantum-700">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative">
            <Atom size={32} className="text-quantum-500 animate-spin-slow" />
            <div className="absolute inset-0 bg-quantum-500/20 rounded-full animate-quantum-pulse"></div>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-quantum-500 to-energy-500 text-transparent bg-clip-text">
            Quantum Quest
          </span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/curriculum" className="text-quantum-900 dark:text-quantum-100 hover:text-quantum-600 dark:hover:text-quantum-300 transition-colors">
            Curriculum
          </Link>
          <Link to="/courses" className="text-quantum-900 dark:text-quantum-100 hover:text-quantum-600 dark:hover:text-quantum-300 transition-colors">
            Courses
          </Link>
          <Link to="/tools" className="text-quantum-900 dark:text-quantum-100 hover:text-quantum-600 dark:hover:text-quantum-300 transition-colors">
            Tools
          </Link>
          <Link to="/about" className="text-quantum-900 dark:text-quantum-100 hover:text-quantum-600 dark:hover:text-quantum-300 transition-colors">
            About
          </Link>
          <Link to="/faq" className="text-quantum-900 dark:text-quantum-100 hover:text-quantum-600 dark:hover:text-quantum-300 transition-colors">
            FAQ
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <div className="hidden sm:flex items-center gap-1">
                <Trophy size={18} className="text-energy-500" />
                <span className="text-sm font-medium">120 Points</span>
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-quantum-200 text-quantum-700">
                      {profile?.username ? profile.username.substring(0, 2).toUpperCase() : 'QS'}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/progress" className="flex items-center gap-2 cursor-pointer">
                      <Trophy size={16} />
                      <span>My Progress</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex items-center gap-2 cursor-pointer">
                      <User size={16} />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings" className="flex items-center gap-2 cursor-pointer">
                      <Settings size={16} />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => signOut()} className="flex items-center gap-2 cursor-pointer text-red-500">
                    <LogOut size={16} />
                    <span>Sign Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Button asChild>
              <Link to="/auth">Sign In</Link>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
