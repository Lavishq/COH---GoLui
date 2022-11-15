import React, { useEffect, useState } from "react";
// import { game } from "./utils/contract";
import { ABI } from "./utils/abi";
import { ethers } from "ethers";
import { CONTRACT } from "./utils/contract";

let data = 0;

const Home = () => {
  const estimate = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const game = new ethers.Contract(CONTRACT, ABI, provider);
    const result = await game.estimateIterations(data);
    console.log(result);
  };

  async function deadline() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const game = new ethers.Contract(CONTRACT, ABI, provider);
    const result = await game.getDeadline(data);
    console.log(result);
  }
  // { gasLimit: 50000 }

  useEffect(() => {
    if (!window.ethereum) return;
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    provider
      .getBalance("0xBeA5dD2179E81C115b2008A8F89807Df66f3251c")
      .then((result) => {
        console.log(ethers.utils.formatEther(result));
      });
    provider.getNetwork().then((result) => {
      console.log(result.chainId);
    });
  });

  return (
    <div>
      <main className="h-screen bg-red-300 flex flex-col">
        <p className="text-3xl text-center m-6">Get started by</p>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
          onClick={deadline}
        >
          Deadline
        </button>
        <button
          className="bg-red-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={estimate}
        >
          Estimate
        </button>
      </main>

      <footer className="text-center">
        <a>Made by Game of Life</a>
      </footer>
    </div>
  );
};

export default Home;
