"use client";
import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="dark" enableSystem={false} attribute="class">
      {children}
    </ThemeProvider>
  );
}
