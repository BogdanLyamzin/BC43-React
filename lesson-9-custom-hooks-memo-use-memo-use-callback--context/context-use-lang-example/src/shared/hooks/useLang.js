import { useContext } from "react";

import { langContext } from "../../context/langContext";

const useLang = ()=> {
    const context = useContext(langContext);

    return context;
}

export default useLang;