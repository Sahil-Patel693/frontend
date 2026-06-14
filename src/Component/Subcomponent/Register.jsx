import { useState } from "react";

import axios from "axios";

function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState();
  const [num, setnum] = useState();
  const [sub, setsub] = useState();
  const [output, setoutput] = useState();

  function handle() {
    var details = { Name: name, Email: email, Number: num, Subject: sub };

    axios
      .post(`${import.meta.env.VITE_API_URL}/registration`, details)
      .then((res) => {
        setoutput("Register successffully");
        setname("");
        setemail("");
        setnum("");
        setsub("");
      })
      .catch((err) => {
        setoutput("Register Not successfuly");
      });
  }
  return (
    <>
      <div class="contact-page section">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="section-heading">
                <h6>| Contact Us</h6>
                <h2>Get In Touch With Our Agents </h2>
              </div>
              <p>
                When you really need to download free CSS templates, please
                remember our website TemplateMo. Also, tell your friends about
                our website. Thank you for visiting. There is a variety of
                Bootstrap HTML CSS templates on our website. If you need more
                information, please contact us.
              </p>
              <h1> {output}</h1>
            </div>
            <div class="col-lg-8">
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
                        Register{" "}
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

export default Register;
