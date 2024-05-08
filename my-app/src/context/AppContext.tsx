import React, { useState } from "react";

interface BiographyType {
    isBioOpen: boolean
    // isBioResumed : boolean
    setIsBioOpen: (Open: boolean) => void;
}
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
        isBioOpen: false,
       
        setIsBioOpen: (Open : boolean) => setBiography(prevState => ({...prevState, isBioOpen: Open})),
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