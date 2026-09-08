"use client";

import { useEffect } from "react";

export function RouteClass({ name }: { name: string }) {
  useEffect(() => {
    document.documentElement.classList.add(name);
    return () => {
      document.documentElement.classList.remove(name);
    };
  }, [name]);

  return null;
}
