import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./modules/Navbar/Navbar";

import HomePage from "./pages/HomePage/HomePage";
import PostsPage from "./pages/PostsPage/PostsPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import navbarMenuItems from "./data/navbarMenuItems.json";

import "./shared/styles/styles.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar menuItems={navbarMenuItems} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/posts/:id" element={<SinglePostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
