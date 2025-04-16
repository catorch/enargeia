"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const pricingTiers = [
    {
        name: "Explorer",
        description: "For individuals seeking philosophical guidance for personal projects",
        price: "$29",
        period: "per month",
        features: [
            "Philosophical Insight Engine",
            "Ontological Design Canvas",
            "3 product analyses per month",
            "Basic archetypal mapping",
            "Email support"
        ],
        highlighted: false
    },
    {
        name: "Creator",
        description: "For teams dedicated to creating meaningful, thoughtful products",
        price: "$99",
        period: "per month",
        features: [
            "Everything in Explorer",
            "Product Reimagination Engine",
            "Mythological Brand Architect",
            "10 product analyses per month",
            "Advanced archetypal mapping",
            "Ethical framework development",
            "Priority support"
        ],
        highlighted: true
    },
    {
        name: "Oracle",
        description: "For organizations seeking deep philosophical transformation",
        price: "$249",
        period: "per month",
        features: [
            "Everything in Creator",
            "Custom mythological narratives",
            "Unlimited product analyses",
            "Full brand ecosystem development",
            "Dedicated philosophical advisor",
            "Team training workshops",
            "24/7 priority support"
        ],
        highlighted: false
    }
];

export default function Pricing() {
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

            // Animate the pricing cards with stagger
            const pricingCards = gsap.utils.toArray(".pricing-card");
            gsap.fromTo(pricingCards,
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
        <section ref={sectionRef} id="pricing" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <h2 ref={titleRef} className="text-4xl sm:text-5xl font-primary text-center text-primary mb-6">
                    Choose Your Journey
                </h2>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
                    Select the plan that aligns with your vision and begin transforming your products with philosophical depth
                </p>

                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricingTiers.map((tier, index) => (
                        <Card
                            key={index}
                            className={`pricing-card relative h-full flex flex-col ${tier.highlighted
                                ? "border-accent shadow-lg shadow-accent/10 scale-105 md:scale-105 z-10"
                                : "border-gray-200"
                                } transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                        >
                            {tier.highlighted && (
                                <div className="absolute -top-4 left-0 w-full flex justify-center">
                                    <span className="bg-accent text-accent-foreground text-sm font-medium px-3 py-1 rounded-full shadow-sm">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <CardHeader className="pb-8">
                                <CardTitle className="text-2xl font-primary text-primary">{tier.name}</CardTitle>
                                <CardDescription>{tier.description}</CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-6 flex-grow">
                                <div className="text-center">
                                    <span className="text-4xl font-primary font-semibold text-primary">{tier.price}</span>
                                    <span className="text-muted-foreground ml-1">{tier.period}</span>
                                </div>

                                <ul className="space-y-3">
                                    {tier.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter className="pt-6">
                                <Button
                                    asChild
                                    className={`w-full ${tier.highlighted
                                        ? "bg-accent text-accent-foreground hover:bg-accent/90"
                                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                                        }`}
                                >
                                    <Link href="#cta">Get Started</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
} 