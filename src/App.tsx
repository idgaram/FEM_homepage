import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NewHero from "./components/NewHero";
import TopArticle from "./components/TopArticle";

function App() {
  const [menu, setMenu] = useState<number>(1);
  return (
    <>
      <div className="px-4 ">
        {/* <img
          src="https://www.place-hold.it/3000x3000"
          className="w-1/2 md:w-32 lg:w-1/2"
          alt=""
        /> */}
        <Header menu={menu} setMenu={setMenu} />
        {menu === 1 ? (
          <div>
            <div className="fixed w-full h-full bg-black opacity-80 z-10">
              {null}
            </div>
            <Hero />
            <NewHero />
            <TopArticle />
          </div>
        ) : (
          <div>
            <Hero />
            <NewHero />
            <TopArticle />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
