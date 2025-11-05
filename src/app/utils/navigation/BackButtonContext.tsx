// app/utils/navigation/BackButtonContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface BackButtonContextProps {
  hide: boolean;
  setHide: (hide: boolean) => void;
}

const BackButtonContext = createContext<BackButtonContextProps | undefined>(undefined);

export const BackButtonProvider = ({ children }: { children: ReactNode }) => {
  const [hide, setHide] = useState(false);
  return (
    <BackButtonContext.Provider value={{ hide, setHide }}>
      {children}
    </BackButtonContext.Provider>
  );
};

export const useBackButton = () => {
  const ctx = useContext(BackButtonContext);
  if (!ctx) throw new Error("useBackButton must be used within BackButtonProvider");
  return ctx;
};
