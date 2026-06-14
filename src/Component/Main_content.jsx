import { Routes, Route } from "react-router-dom";
import Home from "./Subcomponent/Home";
import Property from "./Property";
import Register from "./Subcomponent/Register";
import View from "./Subcomponent/View";
import Login from "./Subcomponent/Login";
import Logout from "./Subcomponent/Logout";
import Update from "./Subcomponent/Update";

function Main_content() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/property" element={<Property />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/view" element={<View />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/destroy" element={<Logout />}></Route>
         <Route path="/update" element={<Update />}></Route>
      </Routes>
    </>
  );
}

export default Main_content;
