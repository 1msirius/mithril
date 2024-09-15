import React from "react";

export function Footer() {
  return (
    <section className="flex justify-between items-center">
      <div className="text-sm font-normal text-[#AFAFAF]">
        <p>© 2024 Mithril AI</p>
      </div>
      <div className="flex space-x-4 text-xs font-normal">
        <a
          href="https://twitter.com/mithrilailabs"
          target="_blank"
          rel="noopener noreferrer"
        >
          X
        </a>
        <span className="text-[#787878]">/</span>
        <a
          href="https://github.com/mithrilai"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB
        </a>
        <span className="text-[#787878]">/</span>
        <a
          href="https://hf.co/mithrilai"
          target="_blank"
          rel="noopener noreferrer"
        >
          HF
        </a>
        <span className="text-[#787878]">/</span>
        <a
          href="https://discord.gg/jgy376Jyka"
          target="_blank"
          rel="noopener noreferrer"
        >
          DISCORD
        </a>
        <span className="text-[#787878]">/</span>
        <a href="/contact" target="_blank" rel="noopener noreferrer">
          CONTACT
        </a>
      </div>
    </section>
  );
}
