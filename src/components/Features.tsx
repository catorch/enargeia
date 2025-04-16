"use client";

import { Card, CardContent } from "@/components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        title: "Philosophical Insight Engine",
        description: "Dive into the metaphysical essence of your product with our guided inquiry wizard and conceptual atomizer, revealing deeper meanings and relationships.",
        icon: (
            <svg className="w-16 h-16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M32 16 L32 32 L42 42" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="32" cy="32" r="4" fill="#D8B96C" />
            </svg>
        )
    },
    {
        title: "Ontological Design Canvas",
        description: "Map the essence, function, ethics, and aesthetics of your product in an intuitive, collaborative canvas that visualizes its philosophical dimensions.",
        icon: (
            <svg className="w-16 h-16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect x="12" y="12" width="40" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="24" cy="24" r="4" fill="#D8B96C" />
                <circle cx="40" cy="24" r="4" fill="currentColor" />
                <circle cx="24" cy="40" r="4" fill="currentColor" />
                <circle cx="40" cy="40" r="4" fill="#D8B96C" />
                <path d="M24 24 L40 40 M40 24 L24 40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
            </svg>
        )
    },
    {
        title: "Product Reimagination Engine",
        description: "Transform your product from purely utilitarian to deeply meaningful with our AI-powered ethical enhancement and mindful ideation companions.",
        icon: (
            <svg className="w-16 h-16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 48 L16 16 C16 14 18 12 20 12 L44 12 C46 12 48 14 48 16 L48 48 C48 50 46 52 44 52 L20 52 C18 52 16 50 16 48 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M24 24 L40 24 M24 32 L40 32 M24 40 L36 40" stroke="currentColor" strokeWidth="2" />
                <circle cx="32" cy="20" r="8" fill="none" stroke="#D8B96C" strokeWidth="1" />
            </svg>
        )
    },
    {
        title: "Mythological Brand Architect",
        description: "Craft compelling mythos and archetypal narratives that resonate with users on a symbolic level, creating rich brand ecosystems with authentic meaning.",
        icon: (
            <svg className="w-16 h-16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 20 L32 12 L52 20 L52 44 L32 52 L12 44 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M32 12 L32 52 M12 20 L52 20 M12 44 L52 44" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx="32" cy="32" r="4" fill="#D8B96C" />
            </svg>
        )
    },
    {
        title: "Ethical Analysis Framework",
        description: "Evaluate your product's ethical dimensions through various philosophical lenses, identifying potential issues and opportunities for alignment with deeper values.",
        icon: (
            <svg className="w-16 h-16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect x="12" y="12" width="40" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M20 20 L44 20 M20 32 L44 32 M20 44 L36 44" stroke="currentColor" strokeWidth="2" />
                <path d="M32 20 L32 44" stroke="#D8B96C" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx="32" cy="26" r="2" fill="#D8B96C" />
                <circle cx="32" cy="38" r="2" fill="#D8B96C" />
            </svg>
        )
    },
    {
        title: "Archetypal Integration Suite",
        description: "Incorporate timeless archetypal patterns into your product design, creating experiences that resonate with the collective unconscious and universal human experience.",
        icon: (
            <svg className="w-16 h-16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M32 8 L32 56 M8 32 L56 32" stroke="currentColor" strokeWidth="1" />
                <path d="M18 18 L46 46 M18 46 L46 18" stroke="currentColor" strokeWidth="1" />
                <circle cx="32" cy="32" r="8" fill="none" stroke="#D8B96C" strokeWidth="1.5" />
            </svg>
        )
    }
];

export default function Features() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const title = titleRef.current;
        const cards = cardsRef.current;

        if (section && title && cards) {
            // Animate the title on scroll
            gsap.fromTo(title,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: title,
                        start: "top bottom-=100",
                        toggleActions: "play none none none"
                    }
                }
            );

            // Animate the cards with stagger
            const featureCards = gsap.utils.toArray(".feature-card");
            gsap.fromTo(featureCards,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: cards,
                        start: "top bottom-=50",
                        toggleActions: "play none none none"
                    }
                }
            );
        }
    }, []);

    return (
        <section ref={sectionRef} id="features" className="py-20 bg-muted">
            <div className="container mx-auto px-6">
                <h2 ref={titleRef} className="text-4xl sm:text-5xl font-primary text-center text-primary mb-16">
                    Elevate Your Creation Process
                </h2>

                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="feature-card border border-gray-200 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <CardContent className="p-8">
                                <div className="text-primary mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-primary text-primary mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
} 