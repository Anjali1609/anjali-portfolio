import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Row, Col } from "react-bootstrap";
import { contactConfig } from "../content_option";
import './stylecontact.css';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kvfvj8l', 'template_rl3d4aq', form.current, 'Fi4iO2lTWXGUuxUFr')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      }
      );
    e.target.reset()
  };

  return (

    <div name="contact"
      className='w-full h-full p-1 bg-gradient-to-b from-black via-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pd-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Contact
          </p>
        </div>
        <Row className="sec_sp pt-4">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form ref={form} onSubmit={sendEmail} className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="from_name"
                    placeholder="Name"
                    type="text"
                    required
                  />
                </Col>
                <Col lg="6" className="form-group ">
                  <input
                    className="form-control rounded-1xl"
                    id="email"
                    name="from_email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-2"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit">
                    <div class="rounded-2xl border-solid pl-4 pr-4 pt-1 pb-1 font-bold border-3 hover:border-amber-700 bg-teal-300 border-green-500 mt-2...">
                      Send
                    </div>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </div>
    </div>

  );
}

export default Contact;