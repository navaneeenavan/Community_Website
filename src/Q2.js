import React, { useState} from "react";

function Q2() {
  const [input, setInput] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [alert , setAlert] = useState(0);
  const [out, setOut] = useState(false);
  

  const handleSubmit = () => {

    if (age < 18) {
      setAlert(true);
    } else {
      setOut(true);
    }
    setInput(true);
  };

  const handleBack = (e)=>
{
  setAlert(false)
  setInput(false);
}

const handleBack2 = (e)=>
{
  setOut(false);
  setInput(false);
}

  return (
    <React.Fragment>
      {alert && (
        <div className="flex flex-col items-center z-30 justify-center h-screen w-full bg-white text-black space-y-5">
          <p className="text-7xl ">Hello {name} </p>
          <p>
            You are not Authorized to Visit this website ! Please comeBack once
            you turn 18 and above*
          </p>
          <button className="h-10 w-16 border rounded-lg" onClick={handleBack}>Back</button>
        </div>
      )}
      {out && (
        <div className="flex flex-col items-center z-30 justify-center h-screen w-full bg-white text-black space-y-5">
          <p className="text-7xl ">Hello {name} </p>
          <p>Thankyou for Visiting this website Mr. {name}</p>
          <button className="h-10 w-16 border rounded-lg" onClick={handleBack2}>Back</button>
        </div>
      )}
      {!input && (
        <div className="flex flex-col items-center justify-center h-screen w-full bg-white text-black">
          <div className="space-y-10 h-auto flex flex-col">
            <p>Please Enter you name & Age </p>
            <input
              className="h-10 w-56 bg-gray-200 pl-5 border rounded-lg"
              type="text"
              placeholder="Name.."
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              className="h-10 w-56 bg-gray-200 pl-5 border rounded-lg"
              type="text"
              placeholder="Age.."
              value={age}
              onChange={(e) => setAge(e.target.value)}
            ></input>
            <button
              className="h-10 w-20 bg-blue-300 text-white rounded-lg"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Q2;
