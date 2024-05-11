import React, { useState } from "react";

interface BiographyType {
    isBioOpen: boolean
    isBioResumed : boolean
    setIsBioOpen: (Open: boolean) => void;
    setIsBioResumed: (Resumed: boolean) => void;
}

//TODO: Resume functionality to REsume window
interface ResumeType{
    isResumeOpen: boolean
    setIsResumeOpen: (Open: boolean) => void;
}

interface AppContextType
{
    BioData: BiographyType
    ResumeData: ResumeType
}
interface AppProviderProps {
    children : React.ReactNode
}

export const AppContext = React.createContext<AppContextType | null>(null)


export const AppProvider : React.FC<AppProviderProps>  = ({ children }) =>{
    const [biography, setBiography] = useState<BiographyType>({
        isBioOpen: true,
        isBioResumed: false,
        setIsBioOpen: (Open : boolean) => setBiography((prevState: BiographyType) => ({...prevState, isBioOpen: Open})),
        setIsBioResumed: (Resumed: boolean) => setBiography((prevState: BiographyType) => ({...prevState, isBioResumed: Resumed})),
    })

    const [resume, setResume] = useState<ResumeType>({
        isResumeOpen: false,
        setIsResumeOpen: (Open : boolean) => setResume(prevState => ({...prevState, isResumeOpen: Open}))
    })
    return (
        <AppContext.Provider value={{BioData: biography, ResumeData: resume }}>
            {children}
        </AppContext.Provider>

    )
}