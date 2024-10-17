import React from "react";

export default function About() {
  return (
    <section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28" id="about">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <p className="mb-3">
        I graduated with a degree in{" "}
        <span className="font-medium">Mechanical Power Engineering</span> from
        Pharos University. After graduation, I transitioned into programming by
        enrolling in the{" "}
        <span className="font-medium">ALX Software Engineering Programme</span>.
        This comprehensive curriculum has equipped me with a strong foundation
        in both <span className="italic">front-end and back-end</span>{" "}
        development.
      </p>
      <p className="mb-3">
        Through the programme, I've gained proficiency in{" "}
        <span className="font-medium">
          C, Python, JavaScript, SQL, and Bash scripting
        </span>
        . I've also delved into advanced topics such as{" "}
        <span className="italic">
          data structures, algorithms, web frameworks, and RESTful APIs
        </span>
        . My experience includes working with{" "}
        <span className="font-medium">
          React, Redux, Node.js, and various databases
        </span>
        .
      </p>
      <p>
        Currently, I'm looking for a{" "}
        <span className="font-medium">full-time role</span> as a software
        developer where I can apply my diverse skill set and continue learning.
        Outside of coding, I enjoy going to the gym and practicing{" "}
        <span className="font-medium">strength training</span>, which helps me
        maintain a balanced lifestyle.
      </p>
    </section>
  );
}