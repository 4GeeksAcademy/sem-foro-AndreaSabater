import { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  return (
    <div style={styles.container}>
      <div
        onClick={() => setColor("red")}
        style={{
          ...styles.light,
          backgroundColor: "red",
          opacity: color === "red" ? 1 : 0.3,
          boxShadow: color === "red" ? "0 0 25px red" : "none"
        }}
      ></div>

      <div
        onClick={() => setColor("yellow")}
        style={{
          ...styles.light,
          backgroundColor: "yellow",
          opacity: color === "yellow" ? 1 : 0.3,
          boxShadow: color === "yellow" ? "0 0 25px yellow" : "none"
        }}
      ></div>

      <div
        onClick={() => setColor("green")}
        style={{
          ...styles.light,
          backgroundColor: "green",
          opacity: color === "green" ? 1 : 0.3,
          boxShadow: color === "green" ? "0 0 25px lime" : "none"
        }}
      ></div>
    </div>
  );
};


export default TrafficLight;

