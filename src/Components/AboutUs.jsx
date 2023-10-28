import React from "react";
import { AboutUsText } from "../data";
function AboutUs() {
  return (
    <section
      className="bg-white text-sky-800 w-full sm:px-3 max-sm:px-3"
      id="AboutUs"
    >
      <h1 className="text-2xl py-8 text-center">About Us</h1>
      <p className=" text-justify pb-8">{AboutUsText.EN}</p>
    </section>
  );
}

export default AboutUs;
