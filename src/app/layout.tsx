import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const geistJost = Jost({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - EcomGrove",
    default: "EcomGrove",
  },
  description:
    "EcomGrove is a modern and scalable eCommerce platform designed for seamless online shopping.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://ecomgrove.store"
  ),
  keywords: ["ecommerce", "online shopping", "EcomGrove", "marketplace"],
  authors: [{ name: "EcomGrove Team" }],
  creator: "EcomGrove",
  publisher: "EcomGrove",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistJost.className} antialiased`}>{children}</body>
    </html>
  );
}
