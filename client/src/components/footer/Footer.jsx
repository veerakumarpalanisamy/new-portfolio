import React, { useState } from "react";
import "./footer.css";
import contact from "../../assets/contact.gif";


const Footer = () => {
  const [email, setEmail] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("/user", {
        email: email,
        name: {
          firstName: FirstName,
          lastName: lastName,
        },
        message: message,
      });
      console.log(response.data.success);
      setEmail("");
      setFirstName("");
      setLastName("");
      setMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="contact__container">
          <div className="contact__section_left">
            <h1>Contact</h1>
          </div>
          <div className="contact__section_left">
            <img src={contact} alt="contact img" />
          </div>
        </div>

        <div className="contact__container2">
          <div className="contact__section2__left">
            <h1>Send me a message</h1>
            <p>
              Whether you widh to discuss new ideas or have a project for me.{" "}
              <br />
              simply fill this form and i'll get back to you soon.
            </p>
          </div>
          <div className="contact__section2__right">
            <form action="" onSubmit={handleSubmit}>
              <div className="contact__name input_section">
                <label htmlFor="">Name</label>
                <div className="contact__name_input">
                  <input
                    type="text"
                    placeholder="First Name"
                    autoComplete="off"
                    value={FirstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="lastname"
                    autoComplete="off"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="contact__email input_section">
                <div>
                  <label htmlFor="">Email</label>
                </div>
                <input
                  type="email"
                  placeholder="something@email.com"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="contact__message input_section">
                <div>
                  <label htmlFor="">Message</label>
                </div>
                <textarea
                  autoComplete="off"
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="contact__btn">
                <button>SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer__container">
          <div className="footer__left">
            <h1>GET IN TOUCH</h1>
          </div>
          <div className="footer__right">
            <div className="footer__social">
              <h3>SOCIAL</h3>
              <p>Linkedin</p>
            </div>
            <div className="footer__services">
              <h3>SERVICES</h3>
              <p>Web Development</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__end">
        <small>VeeraKumar</small>
      </div>
    </>
  );
};

export default Footer;
