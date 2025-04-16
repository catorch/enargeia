"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const workflowSteps = [
    {
        number: 1,
        title: "Philosophical Inquiry",
        description: "Begin with deep questioning about your product's purpose, essence, and meaning in the world. Our AI guides you through Socratic dialogues to uncover hidden assumptions and possibilities.",
        prompt: "What is the essence of your product beyond its function? What worldview does it embody or promote?"
    },
    {
        number: 2,
        title: "Archetypal Mapping",
        description: "Identify the primordial patterns and symbols that resonate with your product. We'll help you understand the psychological archetypes that can give your creation deeper resonance.",
        prompt: "What eternal human patterns does your product connect with? Is it a Creator, Caregiver, Explorer, or something else?"
    },
    {
        number: 3,
        title: "Ethical Framework Development",
        description: "Establish a robust ethical foundation based on philosophical traditions that align with your values. We'll help you navigate complex questions of virtue, consequence, and duty.",
        prompt: "What values should guide your product's development? How will it contribute to human flourishing?"
    },
    {
        number: 4,
        title: "Mythological Integration",
        description: "Craft a compelling narrative that positions your product within a larger story. We'll help you develop resonant symbolism and coherent meaning structures.",
        prompt: "What story does your product tell? How does it fit into humanity's collective journey?"
    }
];

export default function Workflow() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const stepsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const title = titleRef.current;
        const steps = stepsRef.current;

        if (section && title && steps) {
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

            // Animate the steps with stagger
            const workflowStepElements = gsap.utils.toArray(".workflow-step");
            gsap.fromTo(workflowStepElements,
                { opacity: 0, x: (index: number) => index % 2 === 0 ? -30 : 30 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.7,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: steps,
                        start: "top bottom-=50",
                        toggleActions: "play none none none"
                    }
                }
            );
        }
    }, []);

    return (
        <section ref={sectionRef} id="workflow" className="py-20 bg-card">
            <div className="container mx-auto px-6">
                <h2 ref={titleRef} className="text-4xl sm:text-5xl font-primary text-center text-primary mb-16">
                    Our Process
                </h2>

                <div ref={stepsRef} className="max-w-4xl mx-auto space-y-20">
                    {workflowSteps.map((step, index) => (
                        <div key={index} className={`workflow-step flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} gap-8 items-center`}>
                            <div className="flex-shrink-0">
                                <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-primary">
                                    {step.number}
                                </div>
                            </div>

                            <div className="flex-1 space-y-4">
                                <h3 className="text-3xl font-primary text-primary">{step.title}</h3>
                                <p className="text-muted-foreground">{step.description}</p>
                                <div className="bg-muted p-4 border-l-4 border-accent">
                                    <p className="text-lg italic font-primary text-primary/80">{step.prompt}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 