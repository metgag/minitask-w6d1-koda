import { useContext, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import Header from '../components/Header'

function Login() {
  const { whoami, setIsLogged } = useContext(AuthContext);
  const [user, setUser] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const input = e.target[0].value;

    if (input !== "" &&
      input !== null) {
      setIsLogged(true);
      Object.assign(whoami, { input });
    }
    setUser(() => input);
  }

  return (
    <>
      <Header uname={user} />
      <form
        className="flex flex-col bg-slate-300 items-center justify-between h-32
        p-4 mx-auto mt-24 w-min"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="uname">username: </label>
          <input type="text" id="uname"
            className="border" />
        </div>
        <button
          className="border w-max px-3 py-0.5 hover:cursor-pointer hover:opacity-[.6]"
        >
          login
        </button>
      </form>
    </>
  );
}

export default Login;
