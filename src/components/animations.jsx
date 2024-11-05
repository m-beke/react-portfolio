import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const drawUp = keyframes`
  from {
      transform: scaleY(0);
      transform-origin: bottom;
       animation: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.5s forwards;
    }
    to {
      transform: scaleY(1);
    }
`;

export function DrawUp({ children }) {
  return <Reveal keyframes={drawUp}delay={250}>{children}</Reveal>;
};

const enterRight = keyframes`
  from {
      opacity: 0;
        transform: translateX(10%);
    }
    to {
       opacity: 1;
    }
`;

export function EnterRight({ children }) {
  return <Reveal keyframes={enterRight}delay={750}>{children}</Reveal>;
};

const enterLeft = keyframes`
  from {
      opacity: 0;
        transform: translateX(-10%);
    }
    to {
       opacity: 1;
    }
`;

export function EnterLeft({ children }) {
  return <Reveal keyframes={enterLeft}delay={1000}>{children}</Reveal>;
};

