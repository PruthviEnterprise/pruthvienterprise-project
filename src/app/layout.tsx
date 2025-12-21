import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins", // Define a CSS variable
  subsets: ["latin"], // Load Latin subset
  weight: ["300", "400", "500", "600", "700"], // Choose the required weights
});

export const metadata: Metadata = {
  title: "Puruthvi Enterprise",
  description: "Puruthvi Enterprise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
