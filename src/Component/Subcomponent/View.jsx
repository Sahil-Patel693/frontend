import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Auth from "./Auth";

function View() {
  const [val, setval] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/search`)
      .then((res) => {
        setval(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handle(eid) {
    var del = { Email: { Email: eid } };

    axios
      .delete(`${import.meta.env.VITE_API_URL}/remove`, del)
      .then((res) => {
        alert("User delete");
      })
      .catch((err) => {
        alert("Details not deleted");
      });
  }

  return (
    <>
      <Auth />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Number</th>
            <th scope="col">Subject</th>
            <th scope="col"> Action </th>
          </tr>
        </thead>
        {val.map((k) => (
          <tbody>
            <tr>
              <td> {k.Name}</td>
              <td> {k.Email}</td>
              <td> {k.Number}</td>
              <td> {k.Subject}</td>
              <td>
                <button class="btn btn-success">
                  <Link to="/update" style={{ color: "white" }}>
                    update
                  </Link>
                </button>
              </td>
              <td>
                <button
                  class="btn btn-danger"
                  onClick={() => {
                    handle(k.Email);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
}

export default View;
