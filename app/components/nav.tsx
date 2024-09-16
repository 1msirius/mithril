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
            width={32}
            height={32}
          />
          <h1 className="text-[26px] font-medium ml-3 tracking-widest">
            MITHRIL
          </h1>
        </a>
      </div>
      <div className="flex space-x-4 text-xs font-normal">
        <a href="/blog">BLOG</a>
        <span className="text-[#787878]">/</span>
        <a href="/about">ABOUT</a>
        <span className="text-[#787878]">/</span>
        <a href="#" target="_blank" rel="noopener noreferrer">
          JOIN US
        </a>
      </div>
    </section>
  );
}
