"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const examples = [
    {
        id: "product",
        title: "Product Description",
        transformation: "Philosophical Depth",
        before: {
            title: "Standard Description",
            content: `Our wireless earbuds provide exceptional sound quality and convenient features. With 8 hours of battery life, water resistance, and touch controls, they are perfect for exercise and everyday use. Available in three colors.`
        },
        after: {
            title: "Philosophically Enhanced",
            content: `Immerse yourself in a world where sound and silence harmonize perfectly. Our wireless earbuds aren't just audio devices; they're gateways to auditory contemplation—tools that invite you to reflect on the balance between connection and solitude in our hyperconnected age. Their transient nature—needing periodic recharging—subtly reminds us of life's cyclical rhythms, while their water resistance speaks to resilience against life's inevitable disruptions. Choose your shade: Twilight Blue for introspection, Dawn White for clarity, or Dusk Black for mystery.`
        }
    },
    {
        id: "mission",
        title: "Company Mission",
        transformation: "Archetypal Integration",
        before: {
            title: "Generic Statement",
            content: `Our mission is to provide innovative software solutions that help businesses improve efficiency and reduce costs. We are committed to customer satisfaction and continuous improvement of our products.`
        },
        after: {
            title: "Archetypally Enriched",
            content: `We are Waymakers—a company embodying the ancient Magician and Creator archetypes—transforming abstract possibility into tangible reality. Our software solutions forge order from chaos, breathing life into organizations caught in rigid structures. Like alchemists of old, we transmute inefficiency into flow, expense into investment, complexity into elegance. Each product we craft carries the dual signature of proven wisdom and untested innovation—a bridge between what business has been and what it might become. We stand at the crossroads of tradition and transformation, inviting our clients to journey from limitation to liberation.`
        }
    },
    {
        id: "feature",
        title: "Feature Description",
        transformation: "Ethical Framework",
        before: {
            title: "Technical Description",
            content: `Our AI recommendation algorithm analyzes user behavior to suggest relevant products. It processes personal data to create targeted offers and maximizes engagement through personalized notifications.`
        },
        after: {
            title: "Ethically Contextualized",
            content: `Our Mindful Suggestion Framework operates at the intersection of utility and respect. Grounded in virtue ethics, it offers recommendations that serve genuine needs rather than manufacturing desires. We approach personal data as something borrowed, not owned—a perspective rooted in the philosophical tradition of stewardship. The system balances the Aristotelian virtues of utility (helping users discover what truly serves them) and restraint (knowing when enough is enough). It embodies a care-focused ethics that asks not only "What can we show?" but "What ought we show?" Each notification is filtered through the question: "Does this serve the user's expressed purpose or merely our metrics?"`
        }
    }
];

export default function Examples() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const title = titleRef.current;

        if (section && title) {
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
        }
    }, []);

    return (
        <section ref={sectionRef} id="examples" className="py-20 bg-gradient-to-b from-muted to-background">
            <div className="container mx-auto px-6">
                <h2 ref={titleRef} className="text-4xl sm:text-5xl font-primary text-center text-primary mb-16">
                    See the Transformation
                </h2>

                <Tabs defaultValue="product" className="w-full max-w-4xl mx-auto">
                    <TabsList className="grid grid-cols-3 mb-8">
                        {examples.map((example) => (
                            <TabsTrigger
                                key={example.id}
                                value={example.id}
                                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                            >
                                {example.title}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {examples.map((example) => (
                        <TabsContent key={example.id} value={example.id}>
                            <Card className="border border-gray-200 shadow-md">
                                <CardContent className="p-6 space-y-6">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-2xl font-primary text-primary">{example.title}</h3>
                                        <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium">
                                            {example.transformation}
                                        </span>
                                    </div>

                                    <Separator />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-muted-foreground">{example.before.title}</h4>
                                            <div className="bg-muted p-4 rounded-md">
                                                <p className="text-sm">{example.before.content}</p>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-primary">{example.after.title}</h4>
                                            <div className="bg-primary/5 p-4 rounded-md border-l-4 border-accent">
                                                <p className="text-sm">{example.after.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
} 