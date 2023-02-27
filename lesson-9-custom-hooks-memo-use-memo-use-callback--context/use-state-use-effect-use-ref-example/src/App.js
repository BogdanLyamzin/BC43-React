import Navbar from "./modules/Navbar/Navbar";
import ToggleButton from "./shared/components/ToggleButton/ToggleButton";
import Vote from "./modules/Vote/Vote";
import MyBooks from "./modules/MyBooks/MyBooks";
import Posts from "./modules/Posts/Posts";
import PostsSearch from "./modules/PostsSearch/PostsSearch";
import Timer from "./modules/Timer/Timer";
import TimerWithDisable from "./modules/TimerWithDisable/TimerWithDisable";
import BuyList from "./modules/BuyList/BuyList";

import navbarMenuItems from "./data/navbarMenuItems.json";

import "./shared/styles/styles.scss";

function App() {
  return (
    <>
      {/* <Navbar menuItems={navbarMenuItems} /> */}
      <div className="container">
        {/* <BuyList /> */}
        {/* <Timer /> */}
        {/* <TimerWithDisable /> */}
        <PostsSearch />
        {/* <Posts /> */}
        {/* <ToggleButton text="Click me" /> */}
        {/* <Vote /> */}
        {/* <MyBooks /> */}
      </div>
    </>
  );
}

export default App;
