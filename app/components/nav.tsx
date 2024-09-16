'use client'

import React from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  return (
    <section className="flex justify-between items-center text-white">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Mithril AI Logo"
            className="pb-[2px]"
            width={34}
            height={34}
          />
          <h1 className="text-[28px] font-medium ml-2 tracking-widest">
            MITHRIL
          </h1>
        </a>
      </div>
      <div className="hidden md:flex space-x-4 text-[13px] font-normal">
        <a href="/blog" className="hover:text-gray-300">BLOG</a>
        <span className="text-[#787878]">/</span>
        <a href="/about" className="hover:text-gray-300">ABOUT</a>
        <span className="text-[#787878]">/</span>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          CAREERS
        </a>
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:text-gray-300">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black text-white">
            <nav className="flex flex-col space-y-4 mt-8 text-[13px] font-normal">
              <a href="/blog" className="hover:text-gray-300">BLOG</a>
              <a href="/about" className="hover:text-gray-300">ABOUT</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                CAREERS
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
}