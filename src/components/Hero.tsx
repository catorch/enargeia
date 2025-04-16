"use client";

import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

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
                    duration: 1,
                    ease: "power3.out",
                    delay: 0.5
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
        <section ref={sectionRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
            {/* Sacred geometry background pattern */}
            <div className="sacred-geometry absolute inset-0 z-10 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                    <circle cx="400" cy="400" r="300" fill="none" stroke="rgb(192, 178, 131)" strokeWidth="0.5" />
                    <circle cx="400" cy="400" r="200" fill="none" stroke="rgb(192, 178, 131)" strokeWidth="0.5" />
                    <circle cx="400" cy="400" r="100" fill="none" stroke="rgb(192, 178, 131)" strokeWidth="0.5" />
                    <path d="M400 100 L400 700 M100 400 L700 400 M171 171 L629 629 M171 629 L629 171"
                        stroke="rgb(192, 178, 131)" strokeWidth="0.5" />
                </svg>
            </div>

            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-[rgb(26,26,29)] z-0"></div>

            {/* Hero background pattern */}
            <div className="hero-background absolute top-0 right-0 w-3/5 h-full opacity-10 z-0">
                <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                    <path fill="none" stroke="rgb(192, 178, 131)" strokeWidth="2"
                        d="M400 400 A150 150 0 1 1 550 550 L400 400 A150 150 0 1 1 250 250 L400 400 A150 150 0 1 1 550 250 L400 400 A150 150 0 1 1 250 550 L400 400" />
                    <circle cx="400" cy="400" r="150" fill="none" stroke="rgb(192, 178, 131)" strokeWidth="1" />
                    <circle cx="400" cy="400" r="100" fill="none" stroke="rgb(192, 178, 131)" strokeWidth="1" />
                    <circle cx="400" cy="400" r="50" fill="none" stroke="rgb(192, 178, 131)" strokeWidth="1" />
                </svg>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-20">
                <div ref={contentRef} className="max-w-2xl text-white">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-primary leading-tight mb-6">
                        Transform Products with Philosophical Depth
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-xl">
                        ArcheMaker is an AI-powered platform that infuses your products with philosophical resonance,
                        ethical clarity, and archetypal meaning—creating experiences that transcend utility to become meaningful artifacts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90 hover:text-primary hover:translate-y-[-2px] transition-all shadow-lg hover:shadow-accent/30">
                            <Link href="#cta">Begin Your Journey</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary/10">
                            <Link href="#features">Explore Features</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
} 