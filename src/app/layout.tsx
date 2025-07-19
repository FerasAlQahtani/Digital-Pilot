import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Code Pilot",
  description:
    "Code Pilot started with a vision for building an agency to solve the business problems of the future, and that requires a different model. We're not a branding agency that dabbles in tech, and we're not a development shop that leaves you hanging when it's time to go to market. We start with human experience and layer in technology and marketing & deliver truly integrated digital solutions",
  keywords: [
    "Code Pilot",
    "business solutions",
    "technology",
    "marketing",
    "digital agency",
    "branding",
    "development",
    "web development",
    "mobile development",
    "seo optimizer",
    "ui/ux design",
    "ai solutions",
    "security",
  ],
  authors: [{ name: "Code Pilot" }],
  robots: "index, follow",
  icons: ["/icon.png"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" sizes="512x512" href="/logo.png" />
      </head>
      <body className="overflow-x-hidden font-secondary antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
