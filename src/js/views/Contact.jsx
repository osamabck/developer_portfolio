import React, { useState, useEffect, useRef } from "react";
import { BsArrowRight, BsCheck, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import "../../sass/views/contact.scss";
import { FaRegSmile } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";

const Contact = () => {
  const { t } = useTranslation();
  const reg_email =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validMessage, setValidMessage] = useState(true);
  const [sending, setSending] = useState(false);
  const [canSend, setCanSend] = useState(true);
  const [animating, setAnimating] = useState(false);
  const [status, setStatus] = useState(t("Sending..."));
  const [loader, setLoader] = useState("loading");
  const contact = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimating(true);
          obs.disconnect();
        }
      },
      {
        rootMargin: "-30px",
      }
    );
    obs.observe(contact.current);
  }, []);

  useEffect(() => {
    if (!reg_email.test(email) && email !== "") setValidEmail(() => false);
    else setValidEmail(() => true);
  }, [email]);

  const sendMail = (e) => {
    e.preventDefault();
    if (!reg_email.test(email)) return;
    if (name == "") {
      setValidName(() => false);
      return;
    }
    if (message == "") {
      setValidMessage(() => false);
      return;
    }
    if (!canSend) return;
    setCanSend(() => false);
    setSending(true);
    fetch("http://localhost:5000", {
      method: "POST",
      body: JSON.stringify({ email, name, message, subject }),
      headers: { "content-type": "application/json" },
    })
      .then((r) => r.json())
      .then((r) => {
        if (r.status != null) {
          if (r.status === 1) {
            setEmail("");
            setName("");
            setMessage("");
            setStatus(t("Success, email sent!"));
            setLoader("success");
          } else {
            setStatus(t("Failed to send email"));
            setLoader(() => "error");
            console.log("h");
          }
        } else {
          setStatus(t("Failed to send email"));
          setLoader("error");
        }
      })
      .catch((err) => {
        setStatus(t("Failed to send email"));
        setLoader(() => "error");
        console.error(err);
      })
      .finally(() => {
        setCanSend(true);
        setTimeout(() => {
          setSending(false);
          setStatus(t("Sending"));
          setLoader("loading");
        }, 2000);
      });
  };

  return (
    <>
      <div className={sending ? "notification working" : "notification"}>
        <span className="text">{status}</span>
        <div className={`loader ${loader}`}>
          <BsCheck />
          <BiErrorCircle />
        </div>
      </div>
      <section className={animating ? "contact slideUpFadeIn" : "contact"} id="contact" ref={contact}>
        <div className="reachout">
          <div className="text">
            <p className="headline">{t("Let's work together")}</p>
            <p className="description">{t("Do you have any questions? ideas! get in touch and let's get creative")}</p>
            <p className="email_info">
              {t("You can also send me an email at")} <a href="mailto:oussama@tealcode.me">oussama@tealcode.me</a>
            </p>
          </div>
          <form action="/mail.php" method="post" aria-label="Use this form to send me a message">
            <p className="title">
              {t("Send me a message")} <FaRegSmile />
            </p>
            <div className={validName ? "input_wrap" : "input_wrap invalid"} data-invalid={t("Provide a valid name")}>
              <label htmlFor="name">{t("Name")}</label>
              <input type="text" id="name" onChange={(e) => setName(() => e.target.value)} value={name} placeholder={t("Your name")} />
            </div>
            <div className={validEmail ? "input_wrap" : "input_wrap invalid"} data-invalid={t("Provide a valid email")}>
              <label htmlFor="email">{t("Email")}</label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(() => e.target.value)}
                value={email}
                placeholder={t("Input your email here")}
              />
            </div>
            <div className="input_wrap">
              <label htmlFor="email">{t("Subject (optional)")}</label>
              <input
                type="email"
                id="email"
                onChange={(e) => setSubject(() => e.target.value)}
                value={subject}
                placeholder={t("What's the subject")}
              />
            </div>
            <div className={validMessage ? "input_wrap" : "input_wrap invalid"} data-invalid={t("Provide a valid message")}>
              <label htmlFor="message">{t("Message")}</label>
              <textarea
                id="message"
                onChange={(e) => setMessage(() => e.target.value)}
                value={message}
                placeholder={t("Write your message here...")}
              ></textarea>
            </div>
            <button onClick={sendMail} type="submit" aria-label="Click to send message">
              <span>{t("Send it")}</span>
              <BsArrowRight />
            </button>
          </form>
        </div>
        <div className="social_media">
          <span>{t("Find me on")}</span>
          <div className="list">
            <a href="https://github.com/osamabck" target="_blank" rel="noreferrer noopener" aria-label="Github profile link">
              <BsGithub />
            </a>
            <a href="https://twitter.com/osamabck" target="_blank" rel="noreferrer noopener" aria-label="Twitter profile link">
              <BsTwitter />
            </a>
            <a href="https://linkedin.com/in/osamabck" target="_blank" rel="noreferrer noopener" aria-label="Linkedin profile link">
              <BsLinkedin />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
