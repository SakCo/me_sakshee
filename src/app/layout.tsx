import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "../context/provider";

const info = {
  name: "Sakshi Singh",
  twitter: "@i_m_sakshee",
  description:
    "Aspiring Product Manager | Data Enthusiast | Passionate about Building User-Centric Digital Experiences",
  url: "https://me-sakshee.vercel.app/",
  image: "https://me-sakshee.vercel.app/assets/SakshiAnime.png", 
};

export const metadata: Metadata = {
  metadataBase: new URL(info.url),
  title: {
    default: `${info.name} | Aspiring Product Manager | Data Enthusiast`,
    template: `%s | ${info.name}`,
  },
  description: info.description,
  keywords: [
  "Product Manager",
  "Product Management Portfolio",
  "Product Strategy",
  "User Research",
  "Data Analyst",
  "Data Analytics Portfolio",
  "Business Analyst",
  "SQL",
  "Python",
  "A/B Testing",
  "Product Roadmapping",
  "Market Research",
  "User Experience",
  "Data-Driven Decision Making",
  "Product Metrics",
  "Dashboard Development",
  "Tableau",
  "Power BI",
  "Product Lifecycle Management",
  "Cross-Functional Collaboration",
],
  authors: [{ name: info.name, url: info.url }],
  creator: info.name,
  publisher: info.name,

  // Open Graph (for WhatsApp, LinkedIn, Discord, Facebook)
  openGraph: {
    type: "website",
    url: info.url,
    title: `${info.name} | Aspiring Product Manager | Data Enthusiast`,
    description: info.description,
    siteName: info.name,
    images: [
      {
        url: info.image,
        width: 1200,
        height: 630,
        alt: `${info.name} Portfolio Preview`,
      },
    ],
  },

  // Twitter Card (Twitter/X)
  twitter: {
    card: "summary_large_image",
    site: info.twitter, 
    creator: info.twitter,
    title: `${info.name} | Aspiring Product Manager | Data Enthusiast`,
    description: info.description,
    images: [info.image],
  },

  // SEO
  alternates: { canonical: info.url },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, noimageindex: false },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
