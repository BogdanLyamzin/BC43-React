import {useContext} from "react";

import {langContext} from "../../context/langContext";

import locale from "./locale.json";

const Main = ()=> {
    const {lang} = useContext(langContext);

    const title = locale.title[lang];
    const content = locale.content[lang];

    return (
        <div>
           <h2>{title}</h2>
           <p>{content}</p>
        </div>
    )
}

export default Main;