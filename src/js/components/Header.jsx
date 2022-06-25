import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BiMenuAltRight } from "react-icons/bi";
import { changeLanguage } from "../../i18n";
import { IoClose } from "react-icons/io5";
import "../../sass/components/header.scss";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");

  const toggleLanguage = () => {
    changeLanguage(i18n.language == "fr" ? "en" : "fr");
  };

  const toggleTheme = () => {
    setTheme(() => (theme == "dark" ? "light" : "dark"));
    localStorage.setItem("theme", localStorage.getItem("theme") == "dark" ? "light" : "dark");
    const body = document.getElementById("body");
    body.classList.toggle("dark");
    body.classList.toggle("light");
  };

  useEffect(() => {
    window.addEventListener("resize", () => setOpen(false));
    if (localStorage.getItem("theme") == null) localStorage.setItem(theme, "dark");
    const body = document.getElementById("body");
    if (localStorage.getItem("theme") == "light") {
      body.classList.toggle("dark");
      body.classList.toggle("light");
    }
  }, []);

  const menuOpen = {
    transform: "translateX(0)",
    opacity: 1,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  };

  return (
    <header>
      <div className="content">
        <a href="/">OB.</a>
        <nav style={isOpen ? menuOpen : {}}>
          <button className="close" onClick={() => setOpen(false)}>
            <IoClose />
          </button>
          <a href="#home" className="item" onClick={() => setOpen(false)}>
            {"<"}
            {t("Start")}
            {">"}
          </a>
          <a href="#about" className="item" onClick={() => setOpen(false)}>
            {"<"}
            {t("About")}
            {">"}
          </a>
          <a href="#work" className="item" onClick={() => setOpen(false)}>
            {"<"}
            {t("Work")}
            {">"}
          </a>
          <a href="#contact" className="item" onClick={() => setOpen(false)}>
            {"<"}
            {t("Contact me")}
            {">"}
          </a>
        </nav>
        <div className="actions">
          <button className="lang" onClick={toggleLanguage}>
            {i18n.language}
          </button>
          <button className="theme" onClick={toggleTheme}>
            {theme == "dark" ? <BsMoonFill /> : <BsSunFill />}
          </button>
          <button className="menu" onClick={() => setOpen(true)}>
            <BiMenuAltRight />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
