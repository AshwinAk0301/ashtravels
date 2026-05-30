import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Ashwin Travels | Chennai",
  description:
    "Professional cab service and call drivers in Chennai. Airport pickup & drop, outstation trips, local trips, and 24/7 call driver service.",
  keywords:
    "cab service chennai, call driver chennai, airport pickup chennai, outstation trips, local trips",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className="font-[var(--font-poppins)] text-slate-600 antialiased">
        {children}
      </body>
    </html>
  );
}
