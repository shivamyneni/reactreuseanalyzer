import React from "react";

function RedundantCode() {
  const doSomething = () => {
    console.log("Doing something...");
  };

  const greeting = "Hello!";

  return (
    <div>
      <p>{greeting}</p>
      <p>{greeting}</p> {/* Trigger: Repeated use of the 'greeting' variable */}
      <button onClick={doSomething}>Click me</button>
      <button onClick={doSomething}>Click me</button>{" "}
      {/* Trigger: Repeated event handler */}
    </div>
  );
}

export default RedundantCode;
