import React from "react";
import "../../sass/views/home.scss";
import { useTranslation } from "react-i18next";
import { BsArrowDownShort } from "react-icons/bs";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="section home delayedSlideUpFadeIn">
      <div className="hero">
        <p className="headline">{t("I build awesome stuff")}</p>
        <a href="#about">
          <span>{t("Explore more")}</span>
          <BsArrowDownShort />
        </a>
      </div>
    </section>
  );
};

export default Home;
