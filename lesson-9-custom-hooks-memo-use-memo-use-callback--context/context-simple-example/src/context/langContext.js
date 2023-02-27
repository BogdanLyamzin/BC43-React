import { useState, createContext } from "react";

export const langContext = createContext("ua");

const LangContextComponent = ({ children }) => {
    const [lang, setLang] = useState("ua");

    const toggleLang = ()=> setLang(prevLang => {
        return (prevLang === "ua" ? "ru" : "ua")
    })

    return (
        <langContext.Provider value={{lang, toggleLang}}>
            {children}
        </langContext.Provider>
    )   
}

export default LangContextComponent;