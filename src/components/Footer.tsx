"use client";

import { Separator } from "@/components/ui/separator";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Product",
            links: [
                { name: "Features", href: "#features" },
                { name: "Process", href: "#workflow" },
                { name: "Examples", href: "#examples" },
                { name: "Pricing", href: "#pricing" }
            ]
        },
        {
            title: "Company",
            links: [
                { name: "About Us", href: "#" },
                { name: "Careers", href: "#" },
                { name: "Blog", href: "#" },
                { name: "Contact", href: "#" }
            ]
        },
        {
            title: "Resources",
            links: [
                { name: "Documentation", href: "#" },
                { name: "Philosophical Library", href: "#" },
                { name: "API", href: "#" },
                { name: "Support", href: "#" }
            ]
        }
    ];

    const socialLinks = [
        { icon: <Twitter className="h-5 w-5" />, href: "#" },
        { icon: <Facebook className="h-5 w-5" />, href: "#" },
        { icon: <Instagram className="h-5 w-5" />, href: "#" },
        { icon: <Linkedin className="h-5 w-5" />, href: "#" },
        { icon: <Github className="h-5 w-5" />, href: "#" }
    ];

    return (
        <footer className="bg-primary text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <svg className="w-10 h-10" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 5 L30 20 L20 35 L10 20 Z" fill="none" stroke="#D8B96C" strokeWidth="2" />
                                <circle cx="20" cy="20" r="8" fill="none" stroke="#D8B96C" strokeWidth="2" />
                                <circle cx="20" cy="20" r="4" fill="#D8B96C" />
                            </svg>
                            <span className="font-primary text-2xl font-semibold text-white">ArcheMaker</span>
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-md">
                            ArcheMaker transforms products with philosophical depth, ethical clarity, and archetypal meaning, creating experiences that transcend utility.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((link, i) => (
                                <Link
                                    key={i}
                                    href={link.href}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
                                >
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {footerLinks.map((group, i) => (
                        <div key={i}>
                            <h3 className="text-white font-semibold mb-6 text-lg">{group.title}</h3>
                            <ul className="space-y-3">
                                {group.links.map((link, j) => (
                                    <li key={j}>
                                        <Link href={link.href} className="text-gray-400 hover:text-accent transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <Separator className="my-8 bg-white/10" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-gray-400">
                        &copy; {currentYear} ArcheMaker. All rights reserved.
                    </div>
                    <div className="flex gap-6 text-sm">
                        <Link href="#" className="text-gray-400 hover:text-accent transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-accent transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-accent transition-colors">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
} 