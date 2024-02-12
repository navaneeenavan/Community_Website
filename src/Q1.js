import React, { useState, useEffect } from "react";

function Q1() {
  const [input, setInput] = useState(false);
  const [name, setName] = useState("");
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [out, setOut] = useState(false);
  const [logged, setLogged] = useState(null);
  const [finalTime, setFinalTime] = useState(null);

  const addZero = (i) => {
    if (i < 10) {
      return "0" + i;
    }
    return i;
  };

  const handleSubmit = () => {
    const d = new Date();
    const h = addZero(d.getHours());
    const m = addZero(d.getMinutes());
    const s = addZero(d.getSeconds());

    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("loggedtime", JSON.stringify(`${h}:${m}:${s}`));
    setStart(d.getTime());

    setInput(true);
  };

  const handleLogout = () => {
    const d = new Date();
    const end = d.getTime();
    setEnd(end);
    setOut(true);

    localStorage.setItem(
      "LogoutTime",
      JSON.stringify(
        `${addZero(d.getHours())}:${addZero(d.getMinutes())}:${addZero(
          d.getSeconds()
        )}`
      )
    );

    localStorage.clear();
    const durationInSeconds = (end - start) / 1000;
    setFinalTime(durationInSeconds);
  };

  useEffect(() => {
    const loggedTime = localStorage.getItem("loggedtime");
    if (loggedTime) {
      setLogged(loggedTime);
    }
  }, []);

  return (
    <React.Fragment>
      {out && (
        <div className="flex flex-col items-center z-30 justify-center h-screen w-full bg-white text-black">
          <p className="text-7xl ">ThankYou {name} </p>
          <p>
            Total Duration You have used this interface is {finalTime} seconds
          </p>
        </div>
      )}
      {!input ? (
        <div className="flex flex-col items-center justify-center h-screen w-full bg-white text-black">
          <div className="space-y-10 h-auto flex flex-col">
            <p>Please Enter you name </p>
            <input
              className="h-10 w-56 bg-gray-200 pl-5 border rounded-lg"
              type="text"
              placeholder="Name.."
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <button
              className="h-10 w-20 bg-blue-300 text-white"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-between h-screen w-full bg-white text-black px-20 ">
          <p className="text-7xl ">Hello {name}</p>
          <button onClick={handleLogout}>Logout</button>
          <div className="flex flex-row">You have logged at {logged}</div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Q1;
