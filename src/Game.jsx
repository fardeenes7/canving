import React from 'react';
import { useParams } from 'react-router-dom';
import copy from './copy.svg';
const leaderboard = [
  {
    name: 'John Doe',
    image:`https://avatars.dicebear.com/api/bottts/john.svg`,
    score: '100',
  },
  {
    name: 'Jane Doe',
    image:`https://avatars.dicebear.com/api/bottts/jane.svg`,
    score: '90',
  },
  {
    name: 'Joe Doe',
    image:`https://avatars.dicebear.com/api/bottts/joe.svg`,
    score: '80',
  },
  {
    name: 'Jill Doe',
    image:`https://avatars.dicebear.com/api/bottts/jill.svg`,
    score: '70',
  },
  {
    name: 'Jack Doe',
    image:`https://avatars.dicebear.com/api/bottts/jack.svg`,
    score: '60',
  },
  {
    name: 'Juan Doe',
    image:`https://avatars.dicebear.com/api/bottts/juan.svg`,
    score: '50',
  },
  {
    name: 'Jang Doe',
    image:`https://avatars.dicebear.com/api/bottts/jang.svg`,
    score: '40',
  },
]
export default function Game(){
    const title = "React App";

    var gameID =useParams().id;

    const gameLink = "http://localhost:3000/?game="+gameID;

    return(
        <div className="App font-jetbrains bg-gradient-to-tr from-white via-purple-200 to-blue-300 flex w-full lg:w-screen h-full xl:h-screen justify-items-center items-center">
      <div className="grid grid-cols-4 w-full gap-4 my-6 mx-4 md:mx-auto xl:max-w-7xl">
        <div
          id="header"
          className="order-1 col-span-4 bg-white shadow-sm rounded-3xl px-8 py-6 mt-auto flex justify-center border-4 border-pink-500"
        >
          <h1 className="sm:text-xl md:text-2xl lg: text-3xl xl:text-6xl font-bold font-jetbrains">{title}</h1>
        </div>

        <div
          id="leaderboardSection"
          className="order-5 lg:order-2 row-span-3 col-span-4 lg:col-span-1  bg-blue-200 border-4 border-pink-500 rounded-3xl p-4 flex flex-col justify-center items-center overflow-auto"
        >
          <h2 className="text-lg font-jetbrains font-bold mb-2">Leader Board</h2>
          {leaderboard.map((player) => (
            <div className="grid grid-cols-5 gap-4 mb-1 bg-white border border-black px-4 rounded-xl">
              <div>
                <h3 className='font-bold text-2xl mt-3'>#1</h3>
              </div>
              <div>
                <img src={player.image} className="h-12" alt="" />
              </div>
              <div className='col-span-3'>
                <h3 className="text-lg font-jetbrains font-bold">{player.name}</h3>
                <h5>Score: {player.score}</h5>
              </div>
            </div>
          ))}
          
        </div>
        <div
          id="artSection"
          className="order-2 lg:order-3 row-span-4 h-[500px] lg:h-full  lg:row-span-4 col-span-4 lg:col-span-2  bg-white border-4 border-pink-500 rounded-3xl flex flex-col p-8 justify-items-center items-center"
        >
        </div>


        <div
          id="chatSection"
          className="order-4 lg:order-5 row-span-3 col-span-4 lg:col-span-1 flex flex-col w-full justify-items-center items-center bg-blue-200 border-4 border-pink-500 rounded-3xl p-2"
        >
          <h2>Chat</h2>
          <div className='overflow-auto'>

          </div>

          <div className='flex mx-2 mt-auto'>
            <input type="text" className="w-full border-2 border-black rounded-lg pl-2" />
            <button className='bg-white ml-2 border-2 border-black rounded-lg px-2 py-1 active:bg-blue-400'>Send</button>
          </div>
          
        </div>

        <div
          id="gameIDSection"
          className="text-center row-span-1 h-full order-6 lg:order-5 col-span-4 lg:col-span-1 bg-yellow-100 border-4 border-pink-500 rounded-3xl p-4"
        >
          <h2 className="text-lg font-jetbrains font-bold mt-4 mb-2">
            Game ID : 
            <span id='gameID'
            className="text-2xl font-jetbrains font-bold mt-auto ml-2" >
                {gameID}
            </span>
          </h2>
            
            <button onClick={() =>  navigator.clipboard.writeText(gameLink)} className="mt-2 w-[75%] bg-white rounded-lg border-2 py-2 border-black hover:bg-blue-200 active:bg-blue-300 focus:border-blue-600"> <span className='flex justify-center'><img src={copy} className="h-4 mt-1 mr-3" alt="" />Copy Link </span></button>
          
        </div>
        <div
          id="wordSection"
          className="order-3 lg:order-4 h-full row-span-1 col-span-4 lg:col-span-1 flex flex-col w-full justify-items-center items-center bg-yellow-200 border-4 border-pink-500 rounded-3xl"
        >
          <h1 className='font-bold text-3xl py-3'>______</h1>
        </div>


        
      </div>
    </div>
    );
};