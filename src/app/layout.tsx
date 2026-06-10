import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ravikant Baghel | Viresens Sustainability & Web Development",
  description: "Personal Portfolio of Ravikant Baghel: Assistant Manager of Digital Transformation at JSW Steel and Founder of Viresens Sustainability Consultancy.",
  openGraph: {
    title: "Ravikant Baghel | Viresens Sustainability & Web Development",
    description: "Personal Portfolio of Ravikant Baghel: Assistant Manager of Digital Transformation at JSW Steel and Founder of Viresens Sustainability Consultancy.",
    url: "https://rkwolrd.in",
    siteName: "Ravikant Baghel Portfolio",
    images: [
      {
        url: "https://rkwolrd.in/seo-cover.png",
        width: 800,
        height: 600,
        alt: "Ravikant Baghel Portfolio",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravikant Baghel | Viresens Sustainability & Web Development",
    description: "Personal Portfolio of Ravikant Baghel: Assistant Manager of Digital Transformation at JSW Steel and Founder of Viresens Sustainability Consultancy.",
    creator: "@rkworld",
    images: ["https://rkwolrd.in/seo-cover.png"],
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌱</text></svg>" />
      </head>
      <body>{children}</body>
    </html>
  );
}
