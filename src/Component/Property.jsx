import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Property() {
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
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Number</th>
            <th scope="col">Subject</th>
          </tr>
        </thead>
        {val.map((k) => (
          <tbody>
            <tr>
              <td> {k.Name}</td>
              <td> {k.Email}</td>
              <td> {k.Number}</td>
              <td> {k.Subject}</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
}

export default Property;
