"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
            "fixed top-0 w-full z-50 transition-all duration-300",
            isScrolled
                ? "py-3 bg-primary/95 backdrop-blur-md shadow-md"
                : "py-4 bg-primary/90"
        )}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <svg className="w-10 h-10" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 5 L30 20 L20 35 L10 20 Z" fill="none" stroke="rgb(192, 178, 131)" strokeWidth="2" />
                        <circle cx="20" cy="20" r="8" fill="none" stroke="rgb(192, 178, 131)" strokeWidth="2" />
                        <circle cx="20" cy="20" r="4" fill="rgb(192, 178, 131)" />
                    </svg>
                    <span className="font-primary text-2xl font-semibold text-white">ArcheMaker</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-200 hover:text-accent relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <Button asChild variant="default" className="bg-accent text-primary hover:bg-accent/90 hover:text-primary hover:translate-y-[-2px] transition-all shadow-lg hover:shadow-accent/30">
                        <Link href="#cta">Get Early Access</Link>
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <Sheet>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon" className="text-white">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-card text-white p-0">
                        <div className="flex flex-col h-full p-6">
                            <div className="flex justify-between items-center mb-8">
                                <Link href="/" className="flex items-center gap-2">
                                    <svg className="w-8 h-8" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 5 L30 20 L20 35 L10 20 Z" fill="none" stroke="rgb(192, 178, 131)" strokeWidth="2" />
                                        <circle cx="20" cy="20" r="8" fill="none" stroke="rgb(192, 178, 131)" strokeWidth="2" />
                                        <circle cx="20" cy="20" r="4" fill="rgb(192, 178, 131)" />
                                    </svg>
                                    <span className="font-primary text-xl font-semibold text-white">ArcheMaker</span>
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
                                            className="text-lg text-gray-200 hover:text-accent"
                                        >
                                            {link.name}
                                        </Link>
                                    </SheetClose>
                                ))}
                            </nav>

                            <div className="mt-auto">
                                <SheetClose asChild>
                                    <Button asChild className="w-full bg-accent text-primary hover:bg-accent/90">
                                        <Link href="#cta">Get Early Access</Link>
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