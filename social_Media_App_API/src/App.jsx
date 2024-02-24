import React, { useState } from "react";
import Header from "./components/Header";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PostContextProvider from "./store/PostContextProvider";

function App() {
  const [toggleMenu, settoggleMenu] = useState("Home");
  return (
    <PostContextProvider>
      <div>
        <Header />
        <div className="main_container">
          <Sidebar toggleMenu={toggleMenu} settoggleMenu={settoggleMenu} />
          <div className="mini_container">
            {toggleMenu === "Home" ? <PostList /> : <CreatePost />}
          </div>
        </div>
        <Footer />
      </div>
    </PostContextProvider>
  );
}

export default App;
