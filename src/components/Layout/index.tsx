import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { AppShell, Skeleton } from "@mantine/core";
import ClientOnly from "../ClientOnly";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ClientOnly
      fallback={
        <div
          style={{
            width: "100vw",
            height: "100vh",
            background: "linear-gradient(233deg, #0193FD 0%, #3F51F4 100%)",
          }}
        >
          <div className="flex items-center justify-between h-16 px-8">
            <div className="animate-pulse bg-blue-300 h-7 w-36 rounded-lg" />

            <div className="flex items-center gap-6">
              <div className="animate-pulse bg-blue-300 h-5 w-20 rounded-lg" />
              <div className="animate-pulse bg-blue-300 h-5 w-20 rounded-lg" />
              <div className="animate-pulse bg-blue-300 h-5 w-20 rounded-lg" />
              <div className="animate-pulse bg-blue-300 h-5 w-20 rounded-lg" />
              <div className="animate-pulse bg-blue-300 h-5 w-20 rounded-lg" />
              <div className="animate-pulse bg-blue-300 h-8 w-32 rounded-full" />
            </div>
          </div>
        </div>
      }
    >
      <AppShell
        padding="md"
        header={<Navbar />}
        styles={(theme) => ({
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : "linear-gradient(233deg, #0193FD 0%, #3F51F4 100%);",
          },
        })}
      >
        {children}
      </AppShell>
    </ClientOnly>
  );
}
