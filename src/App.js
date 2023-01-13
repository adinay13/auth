
import Login from "./SignIn/Login";
import LogUp from "./SignUp/LogUp";
import {Route, Routes} from "react-router-dom";
import Header from "./Header/header";
import UsersTable from "./UsersTable/UsersTable";

function App() {
  return (
    <>
        {/*<Header/>*/}
        <Routes>
            <Route path="/users" element={<UsersTable />}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/logUp" element={<LogUp/>}/>

        </Routes>


    </>
  );
}

export default App;
