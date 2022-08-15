import { React, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
const styles = [
  {
    name: "Adventurer",
    slug: "adventurer",
  },
  {
    name: "Big Smile",
    slug: "big-smile",
  },
  {
    name: "Bottts",
    slug: "bottts",
  },
  {
    name: "Micah",
    slug: "micah",
  },
];

const randoms = [
  { name: "random1" },
  { name: "random2" },
  { name: "random3" },
  { name: "random4" },
  { name: "random5" },
  { name: "random6" },
  { name: "random7" },
  { name: "random8" },
];

function Home() { 
    const [gameid, setGameId] = useState(new URLSearchParams(window.location.search).get("game"));
    
  const [selectedStyle, setSelectedStyle] = useState(styles[0]);
  const title = "React App";
  //const title = canving;
  const [link, SetLink] = useState("");
  const [name, setName] = useState("Your Name");
  const [dplink, setDPLink] = useState("");
  useEffect(() => {
    setDPLink(
      `https://avatars.dicebear.com/api/${selectedStyle.slug}/${name}.svg`
    );
  }, [selectedStyle, name]);
  return (
    <div className="App font-jetbrains bg-gradient-to-tr from-white via-purple-200 to-blue-300 flex w-full lg:w-screen h-full xl:h-screen justify-items-center items-center">
      <div className="grid grid-cols-2 gap-4 my-6 mx-4 md:mx-auto xl:max-w-7xl">
        <div
          id="header"
          className="order-1 col-span-2 bg-white shadow-sm rounded-3xl px-8 py-6 mt-auto flex justify-center border-4 border-pink-500"
        >
          <h1 className="sm:text-xl md:text-2xl lg: text-3xl xl:text-6xl font-bold font-jetbrains">{title}</h1>
        </div>

        <div
          id="nameSection"
          className="order-2 row-span-1 col-span-2  bg-blue-200 border-4 border-pink-500 rounded-3xl p-4 flex flex-col justify-center items-center"
        >
          <h2 className="text-lg font-jetbrains font-bold">Enter Your Name</h2>
          <input
            type="text"
            className="cols-span-1 lg:col-span-2 border-2 border-black rounded-lg px-2 py-1 mr-2 mt-2 text-center"
            placeholder="Your Name Here"
            onChange={(val) => setName(val.target.value)}
          />
        </div>

        <div
          id="profilepicSection"
          className="order-3 col-span-2 lg:col-span-1 bg-yellow-100 border-4 border-pink-500 rounded-3xl p-4 h-full"
        >
          <h2 className="text-lg font-jetbrains font-bold mt-4 mb-2 text-center">
            Select Profile Picture
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 py-2">
            {styles.map((style) => (
              <button
                key={style.slug}
                onClick={() => setSelectedStyle(style)}
                className="bg-white border-2 border-black rounded-lg py-1 focus:bg-blue-800 focus:text-white"
              >
                {style.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-2 py-2">
            {randoms.map((random) => (
              <img
                key={random.name}
                src={`https://avatars.dicebear.com/api/${selectedStyle.slug}/${random.name}.svg`}
                className="rounded-full h-20 bg-white p-2 border-2 border-black"
              />
            ))}
          </div>
        </div>


        <div
          id="previewSection"
          className="row-span-1 lg:row-span-2 col-span-2 lg:col-span-1 order-4 bg-white border-4 border-pink-500 rounded-3xl h-full flex flex-col p-8 justify-items-center items-center"
        >
          <h2 className="text-lg font-jetbrains font-bold">Preview</h2>
          <img src={dplink} alt="" className="h-32 w-32 my-auto" />
          <h3 className="text-2xl font-jetbrains font-bold mt-auto">{name}</h3>
        </div>


        <div
          id="startButtonSection"
          className="order-5 col-span-2 flex flex-col w-full justify-items-center items-center bg-blue-400 border-4 border-pink-500 rounded-3xl px-4 lg:px-64 py-4"
        >
          <button className="bg-pink-500 text-white font-bold rounded-lg px-4 py-2 border-2 border-white hover:border-black transition-all w-full">
            Create New room
          </button>
          <div className="grid grid-cols-3 mt-4 w-full">
            <input
              type="text"
              value={gameid}
              className="col-span-2 h-full border-2 border-black rounded-lg p-2 mr-2"
              onChange={(val) => setGameId(val.target.value)}
            />
            <a
              href={"/" + gameid}
              className="bg-pink-500 text-white font-bold rounded-lg py-2 px-8 border-2 border-white hover:border-black transition-all"
            >
              Enter room
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
