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
            width={34}
            height={34}
          />
          <h1 className="text-[28px] font-medium ml-3 tracking-widest">
            MITHRIL
          </h1>
        </a>
      </div>
      <div className="flex space-x-4 text-[13px] font-normal">
        <a href="/blog">BLOG</a>
        <span className="text-[#787878]">/</span>
        <a href="/about">ABOUT US</a>
        <span className="text-[#787878]">/</span>
        <a href="#" target="_blank" rel="noopener noreferrer">
          CAREERS
        </a>
      </div>
    </section>
  );
}
