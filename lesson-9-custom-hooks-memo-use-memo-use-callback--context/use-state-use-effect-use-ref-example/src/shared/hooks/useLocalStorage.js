import {useState, useEffect, useRef} from "react";

import { getInitialValue } from "../utils/localStorage";

const useLocalStorage = ({key, initialValue}) => {
    const [state, setState] = useState(()=> getInitialValue(key, initialValue));

    const firstRender = useRef(true);

    useEffect(()=> {
        if(firstRender.current) {
            firstRender.current = false;
            return;
        }
        localStorage.setItem(key, JSON.stringify(state));
    }, [state]);

    return [state, setState];
}

export default useLocalStorage;