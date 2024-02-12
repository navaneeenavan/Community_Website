import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./auth";
import SignUp from "./signUp";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp/>}/>
          <Route path="/auth" element={<Auth/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
