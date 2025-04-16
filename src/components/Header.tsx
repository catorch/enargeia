"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "Process", href: "#workflow" },
        { name: "Examples", href: "#examples" },
        { name: "Pricing", href: "#pricing" },
    ];

    return (
        <header className={cn(
            "fixed top-0 w-full z-50 transition-all duration-500",
            isScrolled
                ? "py-3 bg-primary/95 backdrop-blur-md shadow-md"
                : "py-4 bg-transparent"
        )}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden">
                        <svg className="w-10 h-10 absolute" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20 5 L30 20 L20 35 L10 20 Z"
                                fill="none"
                                className="stroke-secondary transition-all duration-1000 group-hover:stroke-accent"
                                strokeWidth="1.5"
                            />
                            <circle
                                cx="20"
                                cy="20"
                                r="8"
                                fill="none"
                                className="stroke-secondary transition-all duration-1000 group-hover:stroke-accent"
                                strokeWidth="1"
                            />
                            <circle
                                cx="20"
                                cy="20"
                                r="4"
                                className="fill-secondary transition-all duration-1000 group-hover:fill-accent"
                            />
                        </svg>
                        <div className="w-16 h-16 absolute rounded-full bg-accent/10 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-1000"></div>
                    </div>
                    <span className="font-ritual text-2xl text-foreground dark:text-white">ArcheMaker</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-foreground dark:text-gray-200 hover:text-accent relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-accent after:transition-all hover:after:w-full"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <ThemeToggle />
                    <Button
                        asChild
                        variant="default"
                        className="bg-transparent border border-secondary text-secondary hover:bg-secondary/10 hover:text-secondary transition-all shadow-sm"
                    >
                        <Link href="#cta" className="flex items-center gap-2">
                            <span className="text-xs">寄木</span>
                            <span>Begin Ritual</span>
                        </Link>
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <Sheet>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon" className="text-foreground dark:text-white">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-card text-foreground dark:text-white p-0 backdrop-blur-xl">
                        <div className="flex flex-col h-full p-6">
                            <div className="flex justify-between items-center mb-8">
                                <Link href="/" className="flex items-center gap-2">
                                    <svg className="w-8 h-8" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 5 L30 20 L20 35 L10 20 Z" fill="none" stroke="rgb(191, 167, 95)" strokeWidth="1.5" />
                                        <circle cx="20" cy="20" r="8" fill="none" stroke="rgb(191, 167, 95)" strokeWidth="1" />
                                        <circle cx="20" cy="20" r="4" fill="rgb(191, 167, 95)" />
                                    </svg>
                                    <span className="font-ritual text-xl text-foreground dark:text-white">ArcheMaker</span>
                                </Link>
                                <SheetClose className="rounded-full p-1 hover:bg-white/10">
                                    <X className="h-6 w-6" />
                                    <span className="sr-only">Close</span>
                                </SheetClose>
                            </div>

                            <nav className="flex flex-col gap-6 mt-8">
                                {navLinks.map((link) => (
                                    <SheetClose asChild key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-lg text-foreground dark:text-gray-200 hover:text-accent flex items-center gap-2"
                                        >
                                            <span className="w-1 h-1 rounded-full bg-secondary"></span>
                                            {link.name}
                                        </Link>
                                    </SheetClose>
                                ))}
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-foreground dark:text-gray-200">Theme</span>
                                    <ThemeToggle />
                                </div>
                            </nav>

                            <div className="mt-auto">
                                <SheetClose asChild>
                                    <Button
                                        asChild
                                        className="w-full bg-transparent border border-accent text-accent hover:bg-accent/10"
                                    >
                                        <Link href="#cta" className="flex items-center justify-center gap-2">
                                            <span className="text-xs">寄木</span>
                                            <span>Begin Ritual</span>
                                        </Link>
                                    </Button>
                                </SheetClose>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
} 