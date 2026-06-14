import { useNavigate } from "react-router-dom";

function Auth() {
  var Navigate = useNavigate();
  var path = window.location.pathname;

  if (localStorage.getItem("Email") == undefined && path == "/view") {
    Navigate("/login");
  }
  if (localStorage.getItem("Email") != "ayush@gmail.com" && path == "/view") {
    Navigate("/property");
  }
  // if (localStorage.getItem("Email") == "ayush@gmail.com" && path == "/view") {
  //   Navigate("/view");
  // }

  return <></>;
}

export default Auth;
