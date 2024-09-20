"use client";

import React from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
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
      <div className="flex items-center space-x-4 text-xs font-normal tracking-wider">
        <div className="hidden md:flex space-x-4">
          <a href="/blog" className="hover:text-gray-300">
            BLOG
          </a>
          <span className="text-[#787878]">/</span>
          <a href="/about" className="hover:text-gray-300">
            ABOUT
          </a>
          <span className="text-[#787878]">/</span>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            CAREERS
          </a>
        </div>
        <span className="text-[#787878] hidden md:inline">/</span>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-gray-300 h-6 w-6 sm:h-4 sm:w-4"
            >
              <Menu className="mb-[1px]" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="border-l border-[#2B2B2B] bg-black w-[250px] sm:w-[300px]">
            <SheetHeader>
              <SheetTitle className="tracking-widest font-medium text-left">
                MITHRIL
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col space-y-4 font-[family-name:var(--font-geist-mono)]">
              <a
                href="https://twitter.com/mithrilailabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-300"
              >
                TWITTER
              </a>
              <a
                href="https://hf.co/mithrilai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-300"
              >
                HUGGING FACE
              </a>
              <a
                href="https://discord.gg/jgy376Jyka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-300"
              >
                DISCORD
              </a>
              <a
                href="https://github.com/mithrilai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-300"
              >
                GITHUB
              </a>
              <a
                href="https://www.linkedin.com/company/mithril-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-300"
              >
                LINKEDIN
              </a>
              <a
                href="mailto:info.mithrilai@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-300"
              >
                EMAIL
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
}
