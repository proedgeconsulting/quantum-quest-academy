
import { Link } from "react-router-dom";
import { Atom, Trophy, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MainNav } from "./navigation/MainNav";
import { MobileNav } from "./navigation/MobileNav";

const Navbar = () => {
  const { user, profile, signOut } = useAuth();
  
  return (
    <nav className="bg-white/80 dark:bg-quantum-800/50 backdrop-blur-md sticky top-0 z-50 border-b border-quantum-200 dark:border-quantum-700">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <MobileNav />
          
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <Atom size={32} className="text-quantum-500 animate-spin-slow" />
              <div className="absolute inset-0 bg-quantum-500/20 rounded-full animate-quantum-pulse"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-quantum-500 to-energy-500 text-transparent bg-clip-text">
              Quantum Quest
            </span>
          </Link>
        </div>
        
        <div className="hidden md:block">
          <MainNav />
        </div>
        
        {user && (
          <div className="flex items-center gap-4">
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
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()} className="flex items-center gap-2 cursor-pointer text-red-500">
                  <span>Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
