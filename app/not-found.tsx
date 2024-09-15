import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
      <h1 className="text-6xl font-light mb-8">404</h1>
      <p className="text-base mb-8 max-w-md">
        The page you were looking for doesn&apos;t exist. You may have mistyped the
        address or the page may have moved.
      </p>
      <a href="/">
        <button className="bg-white text-black px-6 py-2 rounded-full text-base font-medium hover:bg-gray-200 transition-colors">
          Go Home
        </button>
      </a>
    </div>
  );
}
