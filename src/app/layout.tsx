import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container, SSRProvider } from "@/app/components/bootstrap";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Image Galley",
  description: "a play-around-app to learn some next js features",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <SSRProvider> */}
        <main>
          <Container className="py-4">{children}</Container>
        </main>

        {/* </SSRProvider> */}
      </body>
    </html>
  );
}
