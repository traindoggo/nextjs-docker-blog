import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/tailwind.css";

import { Container } from "./components/container";
import { Header } from "./components/header";
import { Main } from "./components/main";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen
      bg-neutral-900 text-neutral-200`}
      >
        <Container>
          <Header />
          <Main>{children}</Main>
        </Container>
      </body>
    </html>
  );
}
