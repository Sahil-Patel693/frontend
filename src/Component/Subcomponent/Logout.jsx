import { Navigate } from "react-router-dom";

function Logout() {
  localStorage.removeItem("Email");

  return (
    <>
      {" "}
      <Navigate to="/login" />{" "}
    </>
  );
}
export default Logout;
