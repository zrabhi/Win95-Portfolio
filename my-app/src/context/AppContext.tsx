import React, { useState } from "react";

interface BiographyType {
  isBioOpen: boolean;
  isBioResumed: boolean;
  setIsBioOpen: (Open: boolean) => void;
  setIsBioResumed: (Resumed: boolean) => void;
}

//TODO: Resume functionality to REsume window
interface ResumeType {
  isResumeOpen: boolean;
  isResumeResumed: boolean;
  setIsResumeOpen: (Open: boolean) => void;
  setIsResumeResumed: (Resumed: boolean) => void;
}

interface ContactMeType {
    isContactMeOpen : boolean,
    isContactMeResumed: boolean,
    setIsContactMeOpen: (Open: boolean) => void;
    setIsContactMeREsumed: (Resumed: boolean) => void;
}

interface WindowData {
  height: number,
  width:number,
  setHeight: (height: number) => void;
  setWidth: (Width: number) => void
}
interface AppContextType {
  BioData: BiographyType;
  ResumeData: ResumeType;
  WindowData: WindowData;
  // ContactMeData: ContactMeType
}
interface AppProviderProps {
  children: React.ReactNode;
}

export const AppContext = React.createContext<AppContextType | null>(null);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [biography, setBiography] = useState<BiographyType>({
    isBioOpen: true,
    isBioResumed: false,
    setIsBioOpen: (Open: boolean) =>
      setBiography((prevState: BiographyType) => ({
        ...prevState,
        isBioOpen: Open,
      })),
    setIsBioResumed: (Resumed: boolean) =>
      setBiography((prevState: BiographyType) => ({
        ...prevState,
        isBioResumed: Resumed,
      })),
  });

  const [win, setWin] = useState<WindowData>(
    {
      height: window.innerHeight,
      width: window.innerWidth,
      setHeight: (height: number) => setWin((prevState: WindowData) => ({...prevState, height: height})),
      setWidth: (Width: number) => setWin((prevState: WindowData) => ({...prevState, width: Width}))
    }
  )

  const [resume, setResume] = useState<ResumeType>({
    isResumeOpen: false,
    isResumeResumed: false,
    setIsResumeOpen: (Open: boolean) =>
      setResume((prevState : ResumeType) => ({ ...prevState, isResumeOpen: Open })),
    setIsResumeResumed: (Resumed: boolean) =>
        setResume((prevState : ResumeType) => ({...prevState, isResumeResumed: Resumed}))
  });
  return (
    <AppContext.Provider value={{ BioData: biography, ResumeData: resume, WindowData: win }}>
      {children}
    </AppContext.Provider>
  );
};
