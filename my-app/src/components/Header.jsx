import React from "react";
export default function Home() {
  return (
    <header className="flex justify-between items-center bg-blue-500 text-white p-5 shadow-md mt-5 rounded-full gap-4">
      <h1 className="text-3xl font-bold">Welcome to Digital People Inc</h1>

      <a
        href="https://discord.gg/s2QnwV3V5a"
        target="_blank"
        className="flex justify-center items-center text-2xl"
      >
        <img
          src="https://img.icons8.com/color/48/000000/discord-logo.png"
          alt="discord"
        />
        <h1>Join our discord</h1>
      </a>
    </header>
  );
}
