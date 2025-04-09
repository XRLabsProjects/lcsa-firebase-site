import styles from "./ContactUsPage.module.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import isEmail from "validator/lib/isEmail.js";
import axios from "axios";
import { CreateUrl } from "../../data/serverInfo.js";

import EmailIcon from "../../assets/icons/EMAIL.svg";
import Navbar from "../../components/navbar/Navbar.jsx";

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <div className={styles.page}>
        <div className={styles.pageContainer}>
          <div className={styles.topbar}>
            <img
              src={EmailIcon}
              className={styles.emailIcon}
              alt="Write icon"
            />
            <p>CONTACT US</p>
          </div>
          <div className={styles.formContainer}>
            <MessageForm />
          </div>
        </div>
      </div>
    </>
  );
}

const MessageForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");

  const [displayErrorPrompt, setDisplayErrorPrompt] = useState(false);
  const [displayEmailSentPrompt, setDisplayEmailSentPrompt] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // if (!name || !emailAddress || !message || !isEmail(emailAddress)) {
    //   setDisplayErrorPrompt(true);
    //   setDisplayEmailSentPrompt(false);
    // } else {
    //   const formData = {
    //     name: name,
    //     email: emailAddress,
    //     message: message,
    //   };
    //
    //   try {
    //     const response = await axios.post(
    //       `${CreateUrl()}/api/sendEmail`,
    //       formData,
    //     );
    //     setName("");
    //     setEmailAddress("");
    //     setMessage("");
    //     setDisplayErrorPrompt(false);
    //     setDisplayEmailSentPrompt(true);
    //
    //     setTimeout(() => {
    //       navigate("/");
    //     }, 2500);
    //   } catch (err) {
    //     setDisplayErrorPrompt(true);
    //     setDisplayEmailSentPrompt(false);
    //     console.error("Failed to send email");
    //   }
    // }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.textField}>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className={styles.textField}>
          <input
            type="text"
            id="emailAddress"
            placeholder="Your email address"
            onChange={(e) => {
              setEmailAddress(e.target.value);
            }}
          />
        </div>
        <div className={styles.messageField}>
          <label htmlFor="message">MESSAGE</label>
          <textarea
            placeholder="Write your message here"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
        </div>
        <div className={styles.errorMessageContainer}>
          <p
            className={styles.errorText}
            style={{ display: displayErrorPrompt ? "block" : "none" }}
          >
            * Please check all fields are filled in and the email address
            entered is valid
          </p>
        </div>
        <div className={styles.emailSentContainer}>
          <p
            className={styles.emailSentText}
            style={{ display: displayEmailSentPrompt ? "block" : "none" }}
          >
            * Email successfully sent. Redirecting shortly
          </p>
        </div>
        <div className={styles.submitButtonContainer}>
          <button className={styles.submitButton} type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
};
