import React from "react";
import Newsletter from "./Newsletter";
export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center h-screen">
      <div className="flex lg:w-2/5">
        <img src="/hero.gif" alt="hero" />
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start gap-4 w-2/3">
        <h1 className="text-4xl font-bold">Welcome to Digital People</h1>
        <p className="text-lg">
          👋 Hey! We're Digital People, a startup based in Palo Alto,
          California. Join our newsletter to stay updated!
        </p>

        <Newsletter />
      </div>
    </div>
  );
}
