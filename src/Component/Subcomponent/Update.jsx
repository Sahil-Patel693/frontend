import { useState } from "react";

import axios from "axios";

function Update() {
  const [name, setname] = useState("");
  const [email, setemail] = useState();
  const [num, setnum] = useState();
  const [sub, setsub] = useState();
  const [output, setoutput] = useState();

  function handle() {
    var detailsupdate = { Name: name, Email: email, Number: num, Subject: sub };
    // var oldemail = localStorage.getItem("Email");
    var conditon = { Email: email };

    var details = { conditionobj: conditon, datupd: detailsupdate };
    axios
      .patch(`${import.meta.env.VITE_API_URL}/update`, details)
      .then((res) => {
        setoutput("Details update successffully");
        setname("");
        setemail("");
        setnum("");
        setsub("");
      })
      .catch((err) => {
        setoutput("Data Not update");
      });
  }
  return (
    <>
      <div class="contact-page section">
        <h1 style={{ textAlign: "center" }}> Update your data</h1>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <form id="contact-form">
                <div class="row">
                  <div class="col-lg-12">
                    <fieldset>
                      <label for="name">Full Name</label>
                      <input
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Your Name..."
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        required
                      />
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <label for="email">Email Address</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        placeholder="Your E-mail..."
                      />
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <label for="subject"> Number </label>
                      <input
                        type="Number"
                        name="subject"
                        id="subject"
                        value={num}
                        onChange={(e) => setnum(e.target.value)}
                        placeholder="Number..."
                      />
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <label for="message"> Subject</label>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Your Message"
                        onChange={(e) => setsub(e.target.value)}
                      ></textarea>
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <button
                        type="button"
                        class="orange-button"
                        onClick={handle}
                      >
                        {" "}
                        Update{" "}
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-lg-12"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Update;
