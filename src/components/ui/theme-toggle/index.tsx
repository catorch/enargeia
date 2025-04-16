"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative h-10 w-10 rounded-full overflow-hidden transition-all duration-300 ease-in-out"
            aria-label="Toggle theme"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-amber-500 opacity-80 dark:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                {isDark ? (
                    <Moon className="h-5 w-5 text-white transform transition-all duration-500" />
                ) : (
                    <Sun className="h-5 w-5 text-white transform transition-all duration-500" />
                )}
            </div>
        </button>
    );
} 