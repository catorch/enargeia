"use client";

import type { Attribute } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

interface ThemeProviderProps {
    children: ReactNode;
    attribute?: Attribute;
    defaultTheme?: string;
    enableSystem?: boolean;
    disableTransitionOnChange?: boolean;
}

export function ThemeProvider({
    children,
    attribute = "class",
    defaultTheme = "dark",
    enableSystem = true,
    disableTransitionOnChange = false,
    ...props
}: ThemeProviderProps) {
    // To avoid hydration mismatch, only render the ThemeProvider on the client
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Return children without theme context during SSR
        return <>{children}</>;
    }

    return (
        <NextThemesProvider
            attribute={attribute}
            defaultTheme={defaultTheme}
            enableSystem={enableSystem}
            disableTransitionOnChange={disableTransitionOnChange}
            {...props}
        >
            {children}
        </NextThemesProvider>
    );
} 