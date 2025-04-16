"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

export default function Cta() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [focused, setFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (sectionRef.current) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-active');
                    }
                });
            }, { threshold: 0.2 });

            const elements = sectionRef.current.querySelectorAll('.fade-in-element');
            elements.forEach(el => observer.observe(el));

            return () => {
                elements.forEach(el => observer.disconnect());
            };
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle the email submission
        // For demo purposes, we'll just show a success message
        setSubmitted(true);
    };

    return (
        <section ref={sectionRef} id="cta" className="py-20 bg-gradient-to-br from-primary to-card text-white relative overflow-hidden">
            {/* Sacred geometry background */}
            <div className="sacred-geometry absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                    <circle cx="400" cy="400" r="300" fill="none" stroke="rgb(191, 167, 95)" strokeWidth="0.5" />
                    <circle cx="400" cy="400" r="200" fill="none" stroke="rgb(191, 167, 95)" strokeWidth="0.5" />
                    <circle cx="400" cy="400" r="100" fill="none" stroke="rgb(191, 167, 95)" strokeWidth="0.5" />
                    <path d="M400 100 L400 700 M100 400 L700 400 M171 171 L629 629 M171 629 L629 171"
                        stroke="rgb(191, 167, 95)" strokeWidth="0.5" />
                </svg>
            </div>

            {/* Glowing orbs */}
            <div className="absolute left-1/4 bottom-1/4 w-40 h-40 rounded-full bg-secondary/5 blur-3xl"></div>
            <div className="absolute right-1/4 top-1/3 w-56 h-56 rounded-full bg-accent/5 blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12 fade-in-element opacity-0 transform translate-y-8 transition-all duration-1000">
                    <h2 className="text-4xl sm:text-5xl font-ritual mb-6">Enter the Sacred Chamber</h2>
                    <p className="text-lg text-gray-200 mb-4 max-w-xl mx-auto">
                        Transcend the mere utility of creation. Join us in this temple of meaningful innovation.
                    </p>
                    <div className="flex justify-center">
                        <span className="inline-block w-16 h-[1px] bg-secondary opacity-60"></span>
                    </div>
                </div>

                <Card className="max-w-md mx-auto glass-card border-none shadow-2xl fade-in-element opacity-0 transform translate-y-8 transition-all duration-1000 delay-300">
                    <CardContent className="p-8">
                        {!submitted ? (
                            <>
                                <div className="flex items-center justify-center mb-6">
                                    <div className="w-12 h-12 relative">
                                        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="24" cy="24" r="12" className="stroke-secondary" strokeWidth="1" />
                                            <circle cx="24" cy="24" r="6" className="fill-secondary/40" />
                                            <circle cx="24" cy="24" r="18" className="stroke-secondary/30" strokeWidth="0.5" strokeDasharray="2 2" />
                                        </svg>
                                        <div className="absolute inset-0 bg-accent/10 rounded-full blur-md opacity-40"></div>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-ritual text-white text-center mb-6">Initiate Your Journey</h3>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="relative">
                                        <div className={`absolute inset-0 rounded-md transition-all duration-500 ${focused ? 'ring-1 ring-accent/50 bg-accent/5' : ''}`}></div>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            onFocus={() => setFocused(true)}
                                            onBlur={() => setFocused(false)}
                                            ref={inputRef}
                                            required
                                            placeholder="your@email.com"
                                            className="w-full px-4 py-3 bg-transparent border-0 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-0 relative z-10"
                                        />
                                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-secondary/30"></div>
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-transparent border border-accent text-accent hover:bg-accent/10 breath transition-all duration-500 relative overflow-hidden"
                                    >
                                        <span className="relative z-10">Commence the Ritual</span>
                                    </Button>
                                </form>
                                <div className="mt-6 text-center">
                                    <p className="text-xs text-gray-400">By joining, you embrace the path of philosophical inquiry</p>
                                </div>
                            </>
                        ) : (
                            <div className="text-center py-6">
                                <div className="w-16 h-16 mx-auto mb-4 relative">
                                    <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="32" cy="32" r="24" className="stroke-success" strokeWidth="1" />
                                        <path d="M20 32L28 40L44 24" className="stroke-success" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className="absolute inset-0 bg-success/10 rounded-full blur-md"></div>
                                </div>
                                <h3 className="text-2xl font-ritual text-white mb-2">The Oracle Awaits</h3>
                                <p className="text-gray-200 mb-6">
                                    Your initiation is complete. The philosophical path unfolds before you.
                                </p>
                                <div className="flex justify-center">
                                    <span className="inline-block w-12 h-[1px] bg-success opacity-60"></span>
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </section>
    );
} 