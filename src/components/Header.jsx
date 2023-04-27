"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

export default function Header() {
  const [open, setOpen] = useState("flex");

  const handleMenu = () => {
    if (open) {
      setOpen("flex");
    } else {
      setOpen("hidden");
    }
  };

  return (
    <header className="bg-gradient-to-tr from-slate-900 to-slate-700 text-white py-4 px-20 flex justify-between items-center relative">
      <div className="text-3xl font-bold">
        <Link href="/">MovieFlix</Link>
      </div>

      <div onClick={handleMenu} className="text-3xl md:hidden">
        <HiMenu />
      </div>

      <div
        className={`absolute top-[68px] right-16 bg-slate-800 text-white flex flex-col items-center w-28 md:block md:flex-row md:bg-transparent md:right-[215px] md:top-auto `}
      >
        <Link className="p-2 md:pl-0" href="/">
          Home
        </Link>
        <Link className="p-2" href="/movies">
          Movies
        </Link>
        <Link className="p-2" href="/about">
          About
        </Link>
        <Link className="p-2 md:pr-0" href="/contact">
          Contact
        </Link>
      </div>
    </header>
  );
}
