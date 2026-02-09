"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ScrollContextType {
  isHookPassed: boolean;
  setIsHookPassed: (value: boolean) => void;
  isVisionVisible: boolean;
  setIsVisionVisible: (value: boolean) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [isHookPassed, setIsHookPassed] = useState(false);
  const [isVisionVisible, setIsVisionVisible] = useState(false);

  return (
    <ScrollContext.Provider value={{ isHookPassed, setIsHookPassed, isVisionVisible, setIsVisionVisible }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollContext() {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
}
