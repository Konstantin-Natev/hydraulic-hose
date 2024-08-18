import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import { Sidebar } from "@/ui/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Hydraulic",
  description: "Hydraulic"
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; img-src https://*; child-src 'none';"
        />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
        <body>
          <Sidebar />
          {children}
          </body>
    </html>
  );
}
