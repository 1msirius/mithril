import React from "react";
import Image from "next/image";

export function Navbar() {
  return (
    <section className="flex justify-between items-center">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <Image src="/logo.png" alt="Mithril AI Logo" width={50} height={50} />
          <h1 className="text-3xl font-semibold ml-4">Mithril</h1>
        </a>
      </div>
      <div className="flex space-x-4 text-xs font-normal">
        <a href="#">RESEARCH</a>
        <span className="text-[#787878]">/</span>
        <a href="/blog">BLOG</a>
        <span className="text-[#787878]">/</span>
        <a href="/about">ABOUT</a>
      </div>
    </section>
  );
}
