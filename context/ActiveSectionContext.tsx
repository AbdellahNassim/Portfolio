"use client";
import { PropsWithChildren, useState, createContext } from "react";
import { links } from "../lib/data";
export type ActiveSectionName = (typeof links)[number]["name"];
type Props = {};

type ActiveSectionContextType = {
  activeSection: ActiveSectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<ActiveSectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

function ActiveSectionContextProvider({ children }: PropsWithChildren<Props>) {
  const [activeSection, setActiveSection] = useState<ActiveSectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export default ActiveSectionContextProvider;
