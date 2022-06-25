import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../sass/views/about.scss";
import PDF from "/resume.pdf";
import {
  SiHtml5,
  SiCss3,
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiSass,
  SiLess,
  SiFlutter,
  SiReact,
  SiDart,
  SiMysql,
  SiLaravel,
  SiMongodb,
  SiNodedotjs,
  SiFigma,
  SiLinux,
  SiAndroid,
  SiIos,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
  SiAdobepremierepro,
  SiDocker,
  SiNginx,
} from "react-icons/si";

const About = () => {
  const { t } = useTranslation();

  const about = useRef(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimating(true);
          obs.disconnect();
        }
      },
      { rootMargin: "-50px" }
    );
    obs.observe(about.current);
  }, []);

  const skills = [
    [
      { label: "HTML", icon: <SiHtml5 /> },
      { label: "CSS", icon: <SiCss3 /> },
      { label: "JavaScript", icon: <SiJavascript /> },
      { label: "PHP", icon: <SiPhp /> },
      { label: "Bootstrap", icon: <SiBootstrap /> },
      { label: "Laravel", icon: <SiLaravel /> },
      { label: "Sass", icon: <SiSass /> },
      { label: "LESS", icon: <SiLess /> },
      { label: "TypeScript", icon: <SiTypescript /> },
      { label: "Flutter", icon: <SiFlutter /> },
      { label: "React", icon: <SiReact /> },
      { label: "Dart", icon: <SiDart /> },
      { label: "SQL", icon: <SiMysql /> },
    ],
    [
      { label: "MongoDB", icon: <SiMongodb /> },
      { label: "Node.js", icon: <SiNodedotjs /> },
      { label: "Figma", icon: <SiFigma /> },
      { label: "Docker", icon: <SiDocker /> },
      { label: "Nginx", icon: <SiNginx /> },
      { label: "Linux", icon: <SiLinux /> },
      { label: "Android", icon: <SiAndroid /> },
      { label: "iOS", icon: <SiIos /> },
      { label: "Photoshop", icon: <SiAdobephotoshop /> },
      { label: "Premiere", icon: <SiAdobepremierepro /> },
      { label: "Illustrator", icon: <SiAdobeillustrator /> },
      { label: "AfterEffect", icon: <SiAdobeaftereffects /> },
      { label: "XD", icon: <SiAdobexd /> },
    ],
  ];

  const swapElements = (e) => e.target.lastElementChild.after(e.target.firstElementChild);

  return (
    <section className={animating ? "about slideUpFadeIn" : "about"} id="about" ref={about}>
      <div className="story">
        <span className="heading">{t("Hello,")}</span>
        <span className="title">{t("My name is Oussama")}</span>
        <p>
          {t(
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aspernatur laboriosam sunt iure quis odio neque maiores ut non nemo."
          )}
        </p>
        <p>
          {t(
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aspernatur laboriosam sunt iure quis odio neque maiores ut non nemo."
          )}
        </p>
        <a href={PDF} download aria-label="Resume PDf File" className="resume_link">
          {t("You can also download a copy of my resume here")}
        </a>
      </div>
      <div className="skills">
        <div className="skills_row">
          <div className="anchor anchor_top" onAnimationIteration={swapElements}>
            {skills[0].map((d, i) => (
              <div className="skill" key={i} data-skill={i}>
                {d.icon}
                <span>{d.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="skills_row">
          <div className="anchor anchor_bottom" onAnimationIteration={swapElements}>
            {skills[1].map((d, i) => (
              <div className="skill" key={i}>
                {d.icon}
                <span>{d.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
