"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(useGSAP);

const PlayerAnimation = ({ textPrimary, textSecondary, coverImage }) => {
  return (
    <div className="container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 350 350"
        width="800px"
        height="600px"
        id="text-primary"
      >
        <defs>
          <path id="def-1" />
        </defs>
        <path
          id="path-1"
          d="M -393 405 C -53 405 -73 5 177 5 C 427 5 407 405 747 405"
        />
        <text>
          {textPrimary.map((text, index) => (
            <textPath
              key={index}
              id={`Text${index + 1}`}
              xlinkHref="#def-1"
              startOffset="-25%"
            >
              {text}
            </textPath>
          ))}
        </text>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 350 350"
        width="600px"
        height="600px"
        id="text-secondary"
      >
        <defs>
          <path id="def-1" />
        </defs>
        <path
          id="path-1"
          d="M -393 405 C -53 405 -73 5 177 5 C 427 5 407 405 747 405"
        />
        <text>
          {textPrimary.map((text, index) => (
            <textPath
              key={index}
              id={`Text${index + 1}`}
              xlinkHref="#def-1"
              startOffset="-25%"
            >
              {text}
            </textPath>
          ))}
        </text>
      </svg>
    </div>
  );
};
