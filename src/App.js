
import Login from "./SignIn/Login";
import LogUp from "./SignUp/LogUp";
import {Route, Routes} from "react-router-dom";
import Header from "./Header/header";

function App() {
  return (
    <>
        <Header/>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/logUp" element={<LogUp/>}/>
        </Routes>


    </>
  );
}

export default App;
