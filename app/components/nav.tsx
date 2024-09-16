import React from "react";
import Image from "next/image";

export function Navbar() {
  return (
    <section className="flex justify-between items-center">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Mithril AI Logo"
            className="pb-[2px]"
            width={30}
            height={30}
          />
          <h1 className="text-2xl font-medium ml-3 tracking-wide">MITHRIL</h1>
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
