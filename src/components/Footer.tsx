
import { Link } from "react-router-dom";
import { Atom, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-quantum-100 dark:bg-quantum-900 text-quantum-800 dark:text-quantum-200 py-8 border-t border-quantum-200 dark:border-quantum-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Atom size={24} className="text-quantum-500" />
              <span className="text-lg font-bold bg-gradient-to-r from-quantum-500 to-energy-500 text-transparent bg-clip-text">
                Quantum Quest
              </span>
            </div>
            <p className="text-sm text-quantum-600 dark:text-quantum-300">
              Making quantum computing accessible and fun for learners of all ages.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/curriculum" className="hover:text-quantum-500 transition-colors">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-quantum-500 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/teachers" className="hover:text-quantum-500 transition-colors">
                  For Teachers
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-quantum-500 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/tools" className="hover:text-quantum-500 transition-colors">
                  Tools & Simulators
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-quantum-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-quantum-500 transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-quantum-200 dark:border-quantum-800 text-sm text-center text-quantum-600 dark:text-quantum-400">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart size={14} className="text-energy-500" /> for young quantum explorers
          </p>
          <p className="mt-1">© {new Date().getFullYear()} Quantum Quest Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
