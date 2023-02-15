import Button from "../Button/Button";
import List from "../List/List";

import buyListItems from "../../data/buyListItems.json";

import "./main.css";

const Main = () => {
    return (
        <main>
            <div className="container">
                <h1>Page title</h1>
                <p>page main text</p>
                <List title="Buy list" items={buyListItems} />
                <Button text="Click me" active />
            </div>

        </main>
    )
}

export default Main;