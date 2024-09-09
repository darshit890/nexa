"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  Compass,
  ShoppingBag,
  FolderDot,
  Briefcase,
  Info,
  Newspaper,
  BookOpen,
  Layers,
  Mail,
  Twitter,
  Linkedin,
  Youtube,
  Search,
  Menu,
  X,
} from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div
      className={`relative transition-all duration-300 ease-in-out bg-[#161616] ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <Button
        size="icon1"
        className={`absolute right-5 top-2 z-50 translate-x-full rounded-l-none bg-zinc-800 rounded-full text-zinc-400 hover:bg-zinc-800/90 hover:text-zinc-100 ${isOpen ? "" : "top-16"}`}
        onClick={toggleSidebar}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>
      <div
        className={`flex h-screen flex-col bg-[#1C1C1C] text-zinc-400  ${
          isOpen ? "w-64" : "w-16"
        } overflow-hidden`}
      >
        <div className="flex items-center gap-3 px-4 py-2 ">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {isOpen && (
            <div>
              <p className="text-sm font-medium text-zinc-100">
                Jackson Carter
              </p>
              <p className="text-xs">Product Designer</p>
            </div>
          )}
        </div>
        <ScrollArea className="flex-1 px-3">
          <div className="space-y-2">
            <div className="py-2">
              <div className={`space-y-2 mt-5 flex flex-col ${isOpen ? "" : "mt-14 items-center  space-y-5"}`}>
                <NavItem
                  href="/"
                  icon={Compass}
                  label="Explore"
                  number="1"
                  isOpen={isOpen}
                />
                <NavItem
                  href="/boutique"
                  icon={ShoppingBag}
                  label="Boutique"
                  number="2"
                  isOpen={isOpen}
                />
                <NavItem
                  href="/projects"
                  icon={FolderDot}
                  label="Projects"
                  number="3"
                  isOpen={isOpen}
                />
                <NavItem
                  href="/services"
                  icon={Briefcase}
                  label="Services"
                  number="4"
                  isOpen={isOpen}
                />
                <NavItem
                  href="/about"
                  icon={Info}
                  label="About"
                  number="5"
                  isOpen={isOpen}
                />
              </div>
            </div>
            {isOpen && (
              <>
                <div className="py-2">
                  <h2 className="mb-2 px-2 text-xs font-semibold tracking-wide">
                    RESOURCES
                  </h2>
                  <div className="space-y-2 mt-5 flex flex-col">
                    <NavItem
                      href="/feed"
                      icon={Newspaper}
                      label="Feed"
                      number="6"
                      isOpen={isOpen}
                    />
                    <NavItem
                      href="/thoughts"
                      icon={BookOpen}
                      label="Thoughts"
                      number="7"
                      isOpen={isOpen}
                    />
                    <NavItem
                      href="/stack"
                      icon={Layers}
                      label="Stack"
                      number="8"
                      isOpen={isOpen}
                    />
                  </div>
                </div>
                <div className="py-2">
                  <h2 className="mb-2 px-2 text-xs font-semibold tracking-wide">
                    CONNECT
                  </h2>
                  <div className="space-y-2 mt-5 flex flex-col">
                    <NavItem
                      href="/contact"
                      icon={Mail}
                      label="Contact"
                      letter="C"
                      isOpen={isOpen}
                    />
                    <NavItem
                      href="https://twitter.com"
                      icon={Twitter}
                      label="Twitter"
                      isExternal
                      isOpen={isOpen}
                    />
                    <NavItem
                      href="https://linkedin.com"
                      icon={Linkedin}
                      label="LinkedIn"
                      isExternal
                      isOpen={isOpen}
                    />
                    <NavItem
                      href="https://youtube.com"
                      icon={Youtube}
                      label="YouTube"
                      isExternal
                      isOpen={isOpen}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </ScrollArea>
        {isOpen && (
          <div className="mt-auto p-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-500" />
              <Input
                className="pl-8 bg-zinc-800 border-zinc-700 text-zinc-400"
                placeholder="Search..."
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function NavItem({
  href,
  icon: Icon,
  label,
  number,
  letter,
  isExternal = false,
  isOpen,
}: any) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const content = (
    <div
      className={`flex items-center justify-between rounded-lg  transition-colors hover:bg-zinc-800 hover:text-zinc-100 ${
        isActive ? "bg-zinc-800 text-zinc-100" : ""
      } ${isOpen ? "px-2 py-1.5" : "p-3"}`}
    >
      <div className="flex items-center gap-3">
        <Icon className={`h-4 w-4 `} />
        {isOpen && (
          <span className={`text-sm ${isActive ? "font-medium" : ""}`}>
            {label}
          </span>
        )}
      </div>
      {isOpen && (
        <>
          {number && <span className="text-sm">{number}</span>}
          {letter && <span className="text-sm">{letter}</span>}
          {isExternal && (
            <svg
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" x2="21" y1="14" y2="3"></line>
            </svg>
          )}
        </>
      )}
    </div>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}
