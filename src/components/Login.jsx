import React, { useState } from "react";
import Input from "./Input";


function Login({onLogin}) {

  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");


  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    setHeading(heading);
    console.log("submitted");
    event.preventDefault(); 
  }


  return (

    <div className="container">
      <h1>Hello {name}</h1>

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
          <Input 
        type="password"
        placeholder="password"
        />
        <button type="submit">Login</button>
      </form>

      <div className="dont">
      <h5>don't have an account?</h5>
      <a href=""> sign up</a>
      </div>

    </div>

  );
}


export default Login;