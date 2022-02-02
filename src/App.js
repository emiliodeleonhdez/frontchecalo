import React from "react";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import {
  BrowserRouter,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import UserSettings from "./Pages/UserSettings/UserSettings";

function App() {
  const [data, setData] = React.useState("Not Found");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/usersettings" element={<UserSettings/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;