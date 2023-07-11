"use client";
import { ReactNode, useEffect, useState } from "react";

interface ClientOnlyProps {
  children: ReactNode;
  fallback?: JSX.Element;
}

export default function ClientOnly({ fallback, children }: ClientOnlyProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return loading ? children : fallback || null;
}
