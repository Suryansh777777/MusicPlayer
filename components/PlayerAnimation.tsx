"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";
import diskImage from "@/public/assets/disk.png";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";

// Register GSAP Plugins
gsap.registerPlugin(MotionPathPlugin, useGSAP);

interface PlayerAnimationProps {
  textPrimary: string[];
  textSecondary: string;
  coverImage: StaticImageData;
}

export const PlayerAnimation: React.FC<PlayerAnimationProps> = ({
  textPrimary,
  textSecondary,
  coverImage,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Set the path definitions dynamically
    const setPathDefinition = (defId: string, pathId: string) => {
      const def = document.getElementById(defId);
      const path = document.getElementById(pathId)?.getAttribute("d");
      if (def && path) def.setAttribute("d", path);
    };

    setPathDefinition("def-1", "path-1");
    setPathDefinition("def-2", "path-2");
  }, []);

  useGSAP(
    () => {
      const animateText = (selector: string, delay: number) => {
        gsap.to(selector, {
          attr: { startOffset: "100%" },
          duration: 6,
          delay,
          repeat: -1,
          ease: "linear",
        });
      };

      animateText("#Text1", 0);
      animateText("#Text2", 2);
      animateText("#Text3", 4);

      gsap.to(".disk", {
        rotate: 360,
        duration: 2,
        repeat: -1,
        ease: "linear",
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      className="relative h-screen w-screen overflow-hidden"
      ref={containerRef}
    >
      {/* Primary Text Animation */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 350 350"
        className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
        <text className="uppercase text-white">
          {textPrimary.map((text, index) => (
            <textPath
              key={index}
              id={`Text${index + 1}`}
              href="#def-1"
              startOffset="-25%"
            >
              {text}
            </textPath>
          ))}
        </text>
      </svg>

      {/* Secondary Text Animation */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 350 350"
        className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2"
        width="600px"
        height="600px"
        id="text-secondary"
      >
        <defs>
          <path id="def-2" />
        </defs>
        <path
          id="path-2"
          d="M -393 60 C -53 60 -70 365 180 365 C 421 352 407 60 725 56"
        />
        <text
          className="uppercase text-white text-center"
          x="50%"
          y="50%"
          dominantBaseline="end"
          textAnchor="middle"
        >
          <textPath id="Text5" href="#def-2" startOffset="37%">
            {textSecondary}
          </textPath>
        </text>
      </svg>

      {/* Disk Animation */}
      <div className="disk absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full">
        <Image src={diskImage} alt="diskImage" className="cover" />
        <div className="cover absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full overflow-hidden">
          <Image
            src={coverImage}
            alt="cover"
            width={200}
            height={200}
            className="cover-img"
          />
        </div>
      </div>
    </div>
  );
};
