"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import LogoIcon from "@/public/icons/logo-icon.svg";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { NavbarLinks } from "./NavbarLinks";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.4);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{
        backgroundColor: "transparent",
        width: "90%",
        borderRadius: "0px",
        padding: "12px 12px",
        border: "1px solid transparent",
        boxShadow: "none",
      }}
      animate={{
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "",
        width: scrolled ? "50vw" : "90%",
        borderRadius: "50px",
        border: scrolled ? "1px solid rgba(245, 245, 245, 0.95)" : "none",
        boxShadow: scrolled ? "0px 4px 10px rgba(0, 0, 0, 0.3)" : "none",
        transition: { duration: 1.2, ease: "easeInOut" },
      }}
      className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 flex justify-between items-center max-w-screen-xl backdrop-blur-md transition-all mt-4 px-2"
    >
      {/* Logo */}
      <Link className="flex items-center gap-1" href={"/"}>
        <LogoIcon className="size-10 transition-all duration-500 ease-in-out" />
        <h1 className="text-sm md:text-lg tracking-tighter font-semibold text-neutral-900">
          Diego Garcia
        </h1>
      </Link>

      {/* Navbar Links */}
      <nav
        className={cn(
          "hidden md:flex gap-4 transition-all duration-500 ease-in-out"
        )}
      >
        <NavbarLinks />
      </nav>

      {/* Mobile Menu */}
      <Menu className="size-6 md:hidden text-muted-foreground" />
    </motion.header>
  );
}
