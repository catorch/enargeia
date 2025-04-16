"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function Cta() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle the email submission
        // For demo purposes, we'll just show a success message
        setSubmitted(true);
    };

    return (
        <section id="cta" className="py-20 bg-gradient-to-br from-primary to-[rgb(108,79,136)] text-white relative overflow-hidden">
            {/* Sacred geometry background */}
            <div className="sacred-geometry absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                    <circle cx="400" cy="400" r="300" fill="none" stroke="rgb(216, 185, 108)" strokeWidth="0.5" />
                    <circle cx="400" cy="400" r="200" fill="none" stroke="rgb(216, 185, 108)" strokeWidth="0.5" />
                    <circle cx="400" cy="400" r="100" fill="none" stroke="rgb(216, 185, 108)" strokeWidth="0.5" />
                    <path d="M400 100 L400 700 M100 400 L700 400 M171 171 L629 629 M171 629 L629 171"
                        stroke="rgb(216, 185, 108)" strokeWidth="0.5" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl sm:text-5xl font-primary mb-6">Begin Your Philosophical Journey</h2>
                    <p className="text-lg text-gray-200 mb-8">
                        Transform your products from mere utilities into meaningful artifacts imbued with philosophical depth and archetypal resonance.
                    </p>
                </div>

                <Card className="max-w-md mx-auto bg-white/10 backdrop-blur-md border-none shadow-xl">
                    <CardContent className="p-8">
                        {!submitted ? (
                            <>
                                <h3 className="text-2xl font-primary text-white mb-4">Request Early Access</h3>
                                <p className="text-gray-200 mb-6">
                                    Join our limited early access program and be among the first to experience ArcheMaker.
                                </p>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            placeholder="your@email.com"
                                            className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-accent text-primary hover:bg-accent/90 hover:translate-y-[-2px] transition-all"
                                    >
                                        Request Access
                                    </Button>
                                </form>
                            </>
                        ) : (
                            <div className="text-center py-6">
                                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-primary text-white mb-2">Thank You!</h3>
                                <p className="text-gray-200">
                                    We've received your request for early access. We'll be in touch soon with next steps.
                                </p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </section>
    );
} 