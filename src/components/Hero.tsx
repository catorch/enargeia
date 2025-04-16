"use client";

import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [rippleStyle, setRippleStyle] = useState<{ left: string; top: string } | null>(null);

    // Create ripple effect for the hero section
    const createRipple = (e: React.MouseEvent<HTMLDivElement>) => {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const left = e.clientX - rect.left + "px";
        const top = e.clientY - rect.top + "px";

        setRippleStyle({ left, top });
        setTimeout(() => setRippleStyle(null), 1000);
    };

    useEffect(() => {
        const section = sectionRef.current;
        const content = contentRef.current;

        if (section && content) {
            // Animate the hero content
            gsap.fromTo(content,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    delay: 0.8
                }
            );

            // Parallax effect on scroll
            gsap.to(section.querySelector(".hero-background"), {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
        }
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center pt-20 overflow-hidden"
            id="hero"
        >
            {/* Sacred geometry background pattern */}
            <div className="sacred-geometry absolute inset-0 z-10 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                    <circle cx="400" cy="400" r="300" fill="none" className="stroke-foreground dark:stroke-[rgb(191,167,95)]" strokeWidth="0.5" />
                    <circle cx="400" cy="400" r="200" fill="none" className="stroke-foreground dark:stroke-[rgb(191,167,95)]" strokeWidth="0.5" />
                    <circle cx="400" cy="400" r="100" fill="none" className="stroke-foreground dark:stroke-[rgb(191,167,95)]" strokeWidth="0.5" />
                    <path d="M400 100 L400 700 M100 400 L700 400 M171 171 L629 629 M171 629 L629 171"
                        className="stroke-foreground dark:stroke-[rgb(191,167,95)]" strokeWidth="0.5" />
                </svg>
            </div>

            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-background to-card dark:from-primary dark:to-card z-0"></div>

            {/* Hero background pattern */}
            <div className="hero-background absolute top-0 right-0 w-3/5 h-full opacity-10 z-0">
                <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                    <path fill="none" className="stroke-foreground dark:stroke-[rgb(191,167,95)]" strokeWidth="1"
                        d="M400 400 A150 150 0 1 1 550 550 L400 400 A150 150 0 1 1 250 250 L400 400 A150 150 0 1 1 550 250 L400 400 A150 150 0 1 1 250 550 L400 400" />
                    <circle cx="400" cy="400" r="150" fill="none" className="stroke-foreground dark:stroke-[rgb(191,167,95)]" strokeWidth="0.5" />
                    <circle cx="400" cy="400" r="100" fill="none" className="stroke-foreground dark:stroke-[rgb(191,167,95)]" strokeWidth="0.5" />
                    <circle cx="400" cy="400" r="50" fill="none" className="stroke-foreground dark:stroke-[rgb(191,167,95)]" strokeWidth="0.5" />
                </svg>
            </div>

            {/* Glowing orb effect */}
            <div className="absolute left-1/4 top-1/4 w-32 h-32 rounded-full bg-accent/10 blur-3xl"></div>
            <div className="absolute right-1/3 bottom-1/3 w-40 h-40 rounded-full bg-secondary/10 blur-3xl"></div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-20">
                <div ref={contentRef} className="max-w-2xl text-foreground dark:text-white">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-ritual leading-tight mb-6">
                        Summon Philosophical Depth
                    </h1>
                    <p className="text-lg sm:text-xl text-foreground dark:text-gray-200 mb-12 max-w-xl border-l-2 border-secondary pl-4 italic">
                        ArcheMaker is a sacred chamber where your products transcend utility to become vessels of meaning,
                        imbued with philosophical resonance and archetypal symbolism.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div
                            className="ripple-container"
                            onClick={createRipple}
                        >
                            <Button
                                asChild
                                size="lg"
                                className="breath bg-transparent border border-accent text-accent hover:bg-accent/10 hover:text-accent hover:border-accent shadow-[0_0_15px_rgba(163,247,247,0.3)] transition-all duration-500"
                            >
                                <Link href="#cta">Initiate Inquiry</Link>
                            </Button>
                            {rippleStyle && <span className="ripple" style={rippleStyle}></span>}
                        </div>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="border-secondary text-secondary hover:bg-secondary/5 backdrop-blur-sm"
                        >
                            <Link href="#features" className="flex items-center gap-2">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" />
                                    <path d="M12 8L12 16M12 16L16 12M12 16L8 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Explore Insights
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
} 