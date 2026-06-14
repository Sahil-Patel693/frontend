import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const [name, setname] = useState("");
  const [email, setemail] = useState();
  const [output, setoutput] = useState();
  var Navigate = useNavigate();
  function handle() {
    var logindetail = { Name: name, Email: email };
    axios
      .post(`${import.meta.env.VITE_API_URL}/check`, logindetail)
      .then((res) => {
        var user = res.data.detail[0];
        console.log(user.Email);
        localStorage.setItem("Email", user.Email);
        Navigate("/view");
      })
      .catch((err) => {
        setoutput(" Invalid email or name ");
      });
  }

  return (
    <>
      <div class="container mt-3">
        <h2> Please Login </h2>
        <h2 style={{ color: "red" }}> {output}</h2>
        <form>
          <div class="mb-3">
            <label for="pwd">Name:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div class="mb-3 mt-3">
            <label for="email">Email:</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          <button type="button" class="btn btn-primary" onClick={handle}>
            {" "}
            Login{" "}
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
