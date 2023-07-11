"use client";
import { MantineProvider } from "@mantine/core";
import { ReactNode } from "react";
import "./globals.css";
import Layout from "@/components/Layout";

interface BodyPageProps {
  children: ReactNode;
}

export default function BodyPage({ children }: BodyPageProps) {
  return (
    <html lang="en">
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <body>
          <Layout>{children}</Layout>
        </body>
      </MantineProvider>
    </html>
  );
}
