import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4 ">
      <div className="flex flex-col gap-4">
        <p>
          Time to get BUFF<span>!!!</span>
        </p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Gym <span className="text-blue-400 font-medium">Dream</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        Welcome to Gym <span className="text-blue-400 font-medium">Dream</span>!
        Time to turn those 'nachos' into 'biceps'! Get ready to unleash the
        beast and make your gym sessions as legendary as your cheat days!
        <i className="fa-solid fa-dumbbell"></i>
      </p>

      <Button text={"Lets Go"}></Button>
    </div>
  );
}

export default Hero;
