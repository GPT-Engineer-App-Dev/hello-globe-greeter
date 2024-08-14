import React, { useState } from 'react';
import { Button } from "@/components/ui/button"

const Index = () => {
  const [greeting, setGreeting] = useState("Hello");

  const toggleGreeting = () => {
    setGreeting(greeting === "Hello" ? "Goodbye" : "Hello");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-6xl font-bold text-white mb-8">{greeting}, World!</h1>
      <Button 
        onClick={toggleGreeting}
        className="bg-white text-blue-600 hover:bg-blue-100 transition-colors"
      >
        Toggle Greeting
      </Button>
    </div>
  );
};

export default Index;