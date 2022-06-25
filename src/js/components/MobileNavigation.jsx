import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../../i18n";

function MobileNavigation() {
  const { t } = useTranslation();
  const [overlay, setOverlay] = useState(100);

  const changeLang = (lang) => {
    changeLanguage(lang);
    setOverlay(() => 100);
  };

  const closeOverlay = () => setOverlay(() => 100);
  const openOverlay = () => setOverlay(() => 0);

  return (
    <div className="navigation_mobile">
      <HiOutlineMenuAlt4 onClick={openOverlay} />
      <div
        className="overlay"
        style={{ transform: `translateX(${overlay}%)`, borderBottomLeftRadius: `${overlay}vw`, borderTopLeftRadius: `${overlay}vw` }}
      >
        <div className="menu">
          <MdClose className="close" onClick={closeOverlay} />
          <nav>
            <a href="#home" onClick={closeOverlay}>
              {"<"}
              {t("Start")}
              {">"}
            </a>
            <a href="#about" onClick={closeOverlay}>
              {"<"}
              {t("About")}
              {">"}
            </a>
            <a href="#work" onClick={closeOverlay}>
              {"<"}
              {t("Work")}
              {">"}
            </a>
            <a href="#contact" onClick={closeOverlay}>
              {"<"}
              {t("Contact me")}
              {">"}
            </a>
            <ul className="lang_menu">
              <li onClick={() => changeLang("en")}>English</li>
              <li onClick={() => changeLang("fr")}>Français</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default MobileNavigation;
