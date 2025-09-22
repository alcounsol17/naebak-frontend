import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "نائبك.كوم - منصة التواصل مع النواب",
  description: "منصة تفاعلية تربط المواطنين المصريين بممثليهم في البرلمان لتعزيز الشفافية والمشاركة المجتمعية",
  keywords: "نواب، برلمان، مصر، شكاوى، تواصل، مواطنين، حكومة",
  authors: [{ name: "فريق نائبك.كوم" }],
  openGraph: {
    title: "نائبك.كوم - منصة التواصل مع النواب",
    description: "منصة تفاعلية تربط المواطنين المصريين بممثليهم في البرلمان",
    url: "https://naebak.com",
    siteName: "نائبك.كوم",
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "نائبك.كوم - منصة التواصل مع النواب",
    description: "منصة تفاعلية تربط المواطنين المصريين بممثليهم في البرلمان",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#16a34a" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
