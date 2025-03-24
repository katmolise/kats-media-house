
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="text-center max-w-lg mx-auto">
        <h1 className="text-7xl md:text-9xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl md:text-2xl font-medium mb-6">Oops! Page not found</p>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="rounded-full px-6 group">
          <a href="/">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
