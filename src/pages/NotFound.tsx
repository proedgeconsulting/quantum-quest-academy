
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Book } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-6xl font-bold mb-4 text-quantum-500">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">Oops! This page has quantum tunneled away</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="default" className="flex items-center gap-2" asChild>
            <a href="/">
              <Home size={16} />
              Return to Home
            </a>
          </Button>
          
          <Button variant="outline" className="flex items-center gap-2" asChild>
            <a href="/courses">
              <Book size={16} />
              Explore Courses
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
