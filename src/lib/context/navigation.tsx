"use client";

import * as React from "react";

interface NavigationContextType {
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: (open: boolean) => void;
  closeMobileNav: () => void;
}

const NavigationContext = React.createContext<
  NavigationContextType | undefined
>(undefined);

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  const closeMobileNav = () => setIsMobileNavOpen(false);

  return (
    <NavigationContext
      value={{ isMobileNavOpen, setIsMobileNavOpen, closeMobileNav }}
    >
      {children}
    </NavigationContext>
  );
}

export function useNavigation() {
  const context = React.useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}
