import React from 'react';

const Index = () => {
  // Throw a runtime error immediately when the component renders
  throw new Error("This is a test error thrown on purpose!");

  // The code below will never be reached due to the error above
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-6xl font-bold text-white mb-8">Hello, World!</h1>
    </div>
  );
};

export default Index;