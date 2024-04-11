import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function registerUser(event) {
    event.preventDefault();
    const response = fetch("http://localhost:1212/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const dat = await response;
    const data = await dat.json();
    console.log(data);
  }

  return (
    <>
      <div className="p-10">
        <h1 className="mt-10 mb-4">User Form</h1>
        <form onSubmit={registerUser}>
          <input
            className="border-2 border- p-2 m-2"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Name"
          />
          <input
            className="border-2 border- p-2 m-2"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
          />
          <input
            className="border-2 border- p-2 m-2"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <input
            type="submit"
            className="border border-black p-2"
            value="Register"
          />
        </form>
      </div>
    </>
  );
}

export default App;
