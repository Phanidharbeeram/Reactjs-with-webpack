import React, { useEffect } from "react";
import jump from "jump.js";

import "./SmoothScroll.css";
export default function SmoothScroll() {
  useEffect(() => {
    jump("#a1", {
      duration: 1000,
      callback: () => {
        jump("#a5", {
          duration: 25000
        });
      }
    });
  }, []);
  return (
    <div>
      <div className="container" id="a1">
        <h2>welcome</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          ullam numquam nihil odio, ut, debitis esse ipsam necessitatibus amet
          officiis deserunt, ea ad nemo. Voluptates magnam beatae odit laborum
          sed?
        </p>
        <button
          onClick={() => {
            jump("#a2");
          }}
        >
          Next
        </button>
      </div>
      <div className="container" id="a2">
        <h2>welcome</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          ullam numquam nihil odio, ut, debitis esse ipsam necessitatibus amet
          officiis deserunt, ea ad nemo. Voluptates magnam beatae odit laborum
          sed?
        </p>
        <button
          onClick={() => {
            jump("#a3");
          }}
        >
          Next
        </button>
      </div>
      <div className="container" id="a3">
        <h2>welcome</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          ullam numquam nihil odio, ut, debitis esse ipsam necessitatibus amet
          officiis deserunt, ea ad nemo. Voluptates magnam beatae odit laborum
          sed?
        </p>
        <button
          onClick={() => {
            jump("#a4");
          }}
        >
          Next
        </button>
      </div>
      <div className="container" id="a4">
        <h2>welcome</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          ullam numquam nihil odio, ut, debitis esse ipsam necessitatibus amet
          officiis deserunt, ea ad nemo. Voluptates magnam beatae odit laborum
          sed?
        </p>
        <button
          onClick={() => {
            jump("#a5");
          }}
        >
          Next
        </button>
      </div>
      <div className="container" id="a5">
        <h2>welcome</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          ullam numquam nihil odio, ut, debitis esse ipsam necessitatibus amet
          officiis deserunt, ea ad nemo. Voluptates magnam beatae odit laborum
          sed?
        </p>
        <button
          onClick={() => {
            jump("#a1");
          }}
        >
          Back to top
        </button>
      </div>
    </div>
  );
}
