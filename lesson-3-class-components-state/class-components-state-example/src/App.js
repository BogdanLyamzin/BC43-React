import Navbar from "./modules/Navbar/Navbar";
import ToggleButton from "./shared/components/ToggleButton/ToggleButton";
import Vote from "./modules/Vote/Vote";

import navbarMenuItems from "./data/navbarMenuItems.json";

import "./shared/styles/styles.scss";

function App() {
  return (
    <>
      {/* <Navbar menuItems={navbarMenuItems} /> */}
      <div className="container">
        {/* <ToggleButton text="Click me" /> */}
        <Vote />
      </div>
    </>
  );
}

export default App;
