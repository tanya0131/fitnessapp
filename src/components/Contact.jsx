
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import Header from "./Header";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6ygea4b", // Replace with your actual service ID
        "template_lyqyppr", // Replace with your actual template ID
        form.current,
        "-UiO2GU1hwpGHPFkx" // Replace with your actual user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          window.alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const Wrapper = styled.section`
  /* CSS styles for the wrapper section */
  padding: 20px;
  background-color: #f5f5f5;
`;

const H1 = styled.h1`
  /* CSS styles for the h1 element */
  text-align: center;
  margin-bottom: 20px;
  color: #333; /* Add a color for the heading */
`;

const Container = styled.div`
/* CSS styles for the container div */
margin-left: auto; /* Center the container horizontally */
margin-right: auto;
margin-top: 3%;
margin-bottom: 5%;
display: flex;
max-width: 520px;
padding: 20px;
background-color: #ffffff;
border-radius: 10px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

`;

const ContactForm = styled.form`
text-align: left;
width: 90%;
margin: 0 auto;
padding: 15px;
border-radius: 5px;
background-color: #f2f2f2;

input,
textarea {
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
  box-shadow: 0 0 0 2px #000000;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #000000, 0 0 0 4px #000000;
  }
}

textarea:focus {
  resize: vertical; /* Allow the textarea to be vertically resizable */
  box-shadow: 0 0 0 2px #000000, 0 0 0 4px #000000; /* Apply box-shadow for the textarea */
}
`;

const SubmitButton = styled.input`
/*background-color: #4CAF50 */
background:linear-gradient(to right, #8a2be2, #9400d3, #9932cc, #8a2be2);
color: #fff;
padding: 10px 20px;
border: none;
border-radius: 4px;
cursor: pointer;
font-size: 18px;

&:hover {
  background-color:  #FF4500;
}

/* Add default background color */
&:not(:hover) {
  background-color: #FF4500;
}
`;
  return (
    <div>
      <Header></Header>
                <div style={{ borderBottom: "8px solid black", marginTop: "20px" }}></div>
      <Wrapper>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.
          7552014055714!2d73.8902251750661!3d18.674977982448745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
          1!3m3!1m2!1s0x3bc2c880511d7c35%3A0xc4e495a8c1f663eb!2sMIT%20Academy%20of%20Engineering
          !5e0!3m2!1sen!2sin!4v1688748349066!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <H1>Contact Us</H1>

        <Container>
          <div className="contact-form">
            <ContactForm onSubmit={sendEmail} ref={form}>
              <label>
                Name
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                autoComplete="off"
                required
              />
              </label>
              <br />


              <label>
                Email
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                autoComplete="off"
                required
              />
              </label>

              <label>
                Message
              <textarea
                name="message"
                cols="30"
                rows="6"
                placeholder="Message"
                autoComplete="off"
                required
              ></textarea>
                </label>
              <SubmitButton type="submit" value="Send" />
            </ContactForm>
          </div>
        </Container>
      </Wrapper>
    </div>
  );
};

export default Contact;