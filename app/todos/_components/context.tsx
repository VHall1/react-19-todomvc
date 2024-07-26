"use client";

import { usePathname } from "next/navigation";
import { createContext, ReactNode, useContext } from "react";
import { Filter } from "../types";

const FilterContext = createContext<Filter | null>(null);

export function FilterProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const filter = pathname.endsWith("/completed")
    ? "completed"
    : pathname.endsWith("/active")
    ? "active"
    : "all";

  return (
    <FilterContext.Provider value={filter}>{children}</FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw "useFilter can only be used if the calling component is wrapped by FilterProvider";
  }
  return context;
}
