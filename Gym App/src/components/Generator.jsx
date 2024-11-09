import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";
import Button from "./Button";

function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto ">{description}</p>
    </div>
  );
}

function Generator(props) {
  const [showModal, setShowModal] = useState(false);
  const { poison, setPoison, muscle, setMuscle, goal, setGoal, updateWorkout } =
    props;

  function toggleModal() {
    setShowModal(!showModal);
  }

  function updateMuscles(muscleGroup) {
    if (muscle.includes(muscleGroup)) {
      setMuscle(muscle.filter((val) => val !== muscleGroup));
      return;
    }
    if (muscle.length > 3) {
      return;
    }
    if (poison !== "individual") {
      setMuscle([muscleGroup]);
      setShowModal(false);
      return;
    }

    setMuscle([...muscle, muscleGroup]);
    if (muscle.length === 2) {
      setShowModal(false);
    }
  }
  return (
    <SectionWrapper
      header={"Generate your Workout"}
      title={["It's", "Huge", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"Pick your Poison"}
        description={"Select the Workout you want to enjoy"}
      ></Header>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              className={`bg-slate-950 px-4 border border-blue-400 py-3 rounded-lg duration-200 hover:border-blue-600 ${
                type === poison ? "border-blue-600" : "border-blue-400"
              }`}
              key={typeIndex}
              onClick={() => {
                setMuscle([]);
                setPoison(type);
              }}
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Header
        index={"02"}
        title={"Lock on Targets"}
        description={"Select the muscle judged for annhilation"}
      ></Header>
      <div className="bg-slate-950  border border-solid  border-blue-400 rounded-lg hover:border-blue-600 flex flex-col">
        <button
          className="relative p-3 flex items-center justify-center"
          onClick={toggleModal}
        >
          <p className="capitalize">
            {muscle.length === 3 ? "Select Muscle Group" : muscle.join(" ")}
          </p>
          <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
        </button>
        {showModal && (
          <div className="flex flex-col  p-3">
            {(poison === "individual"
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  key={muscleGroupIndex}
                  className={`hover:text-blue-400 duration-200
                    ${muscle.includes(muscleGroup) ? "text-blue-400" : ""}`}
                  onClick={() => updateMuscles(muscleGroup)}
                >
                  <p className="uppercase">
                    {muscleGroup.replaceAll("_", " ")}
                  </p>
                </button>
              );
            })}
          </div>
        )}
      </div>
      <Header
        index={"03"}
        title={"Become Juggernaut"}
        description={"Select your Ultimate Objective"}
      ></Header>
      <div className="grid grid-cols-3  gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              className={`bg-slate-950 px-4  border border-blue-400 py-3 rounded-lg duration-200 hover:border-blue-600 ${
                scheme === goal ? "border-blue-600" : "border-blue-400"
              }`}
              key={schemeIndex}
              onClick={() => {
                setGoal(scheme);
              }}
            >
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Button text={"Formulate"} func={updateWorkout}></Button>
    </SectionWrapper>
  );
}

export default Generator;
