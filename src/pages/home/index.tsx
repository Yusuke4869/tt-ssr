import React from "react";

import type { FC } from "react";

export const Home: FC = () => (
  <div style={{ marginLeft: "2rem" }}>
    <h1 style={{ marginTop: "2rem", marginBottom: "1rem" }}>Hi, there!</h1>
    <div>
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <img
          alt="Yusuke4869"
          src="https://github.com/Yusuke4869.png"
          style={{ width: "2rem", height: "2rem", borderRadius: "10000px" }}
        />
        <h2 style={{ margin: 0 }}>Yusuke4869</h2>
      </div>
      <div>
        <p>My name is Yusuke!</p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/Yusuke4869" rel="noopener noreferrer" target="_blank">
            @Yusuke4869
          </a>
        </p>
        <p>
          Portfolio:{" "}
          <a href="https://yusuke4869.dev/" rel="noopener noreferrer" target="_blank">
            yusuke4869.dev
          </a>
        </p>
      </div>
    </div>
  </div>
);
