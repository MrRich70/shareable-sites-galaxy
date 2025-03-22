
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout 
      title="Page Not Found | NJoy Communications"
      description="The page you are looking for could not be found."
    >
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
        <div className="text-center px-4 py-12">
          <h1 className="text-6xl font-bold text-blue-700 mb-6">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-blue-700 hover:bg-blue-800">
            <a href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </a>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
