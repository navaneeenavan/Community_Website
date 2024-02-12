import React, { useState } from "react";
function App() {
  const [input, setInput] = useState(0);
  const [name, setName] = useState("");
  const [out, setOut] = useState(0);
  const [start , setStart] = useState(0);
  const [end , setEnd] = useState(0);
  
  const handleSubmit = () => {
    setInput(!input);
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem(
      "loggedtime",
      JSON.stringify(h + " : " + m + " : " + s)
    );
    setStart(h*60 + m*60);
  };
 
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  const handleLogout = () => {
    setOut(1);
    
    localStorage.setItem(
      "LogoutTime",
      JSON.stringify(h + " : " + m + " : " + s)
    );
    setEnd(h*60 + m*60);
  };
  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());

  const logged = localStorage.getItem("loggedtime");
 const final = Number(end - start)
  console.log(final+"this is final time");
  


  return (
    <React.Fragment>
      {!input ? (
        <div className="flex flex-col items-center justify-center h-screen w-full bg-white text-black">
          <div className="space-y-10 h-auto flex flex-col">
            <p>Please Enter you name </p>
            <input
              className="h-10 w-56 bg-gray-200 pl-10 border "
              type="text"
              placeholder="Name.."
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <button
              className="h-10 w-10 bg-blue-300 text-white"
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
          <div className="flex flex-row">You have logged at {logged};</div>
        </div>
      )}
      {out && (
        <div className="flex flex-col items-center justify-center h-screen w-full bg-white text-black">
          <p className="text-7xl ">ThankYou {name} </p>
          <p> total Duration You have used this interface is {final}</p>
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
