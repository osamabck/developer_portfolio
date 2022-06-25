import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Recent from "../components/Recent";
import Other from "../components/Other";
import prj_1 from "../../img/prj_1.jpg";
import prj_2 from "../../img/prj_2.jpg";
import prj_3 from "../../img/prj_3.jpg";
import "../../sass/views/work.scss";

const Work = () => {
  const { t } = useTranslation();
  const work = useRef(null);
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
    obs.observe(work.current);
  }, []);

  const recent = [
    {
      name: "Project_1",
      img: prj_1,
      description: t("Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, expedita."),
      title: "Project_1",
      links: [{ href: "http://localhost:5000", label: "Project 1" }],
    },
    {
      name: "Project_2",
      img: prj_2,
      description: t("Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, expedita."),
      title: "Project_2",
      links: [{ href: "http://localhost:5000", label: "Project 2" }],
    },
    {
      name: "Project_3",
      img: prj_3,
      description: t("Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, expedita."),
      title: "Project_3",
      links: [{ href: "http://localhost:5000", label: "Project 3" }],
    },
  ];

  const other = [
    {
      title: "Other Project 1",
      description: t("Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, expedita."),
      tech: ["PHP", "Laravel", "TypeScript", "SCSS", "Flutter", "Dart"],
      links: ["http://localhost:5000", "http://localhost:5000"],
      code: null,
    },
    {
      title: "Other Project 2",
      description: t("Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, expedita."),
      tech: ["PHP", "Laravel", "TypeScript", "SCSS", "Flutter", "Dart"],
      links: ["http://localhost:5000", "http://localhost:5000"],
      code: null,
    },
  ];

  return (
    <section className={animating ? "work slideUpFadeIn" : "work"} id="work" ref={work}>
      <p className="headline">{t("Some things I worked on recently")}</p>
      <div className="recent_work">
        {recent.map((el, i) => (
          <Recent key={i} image={el.img} title={el.title} description={el.description} links={el.links} />
        ))}
      </div>
      <p className="subheadline">{t("Other projects")}</p>
      <div className="other_work">
        {other.map((el, i) => (
          <Other key={i} title={el.title} description={el.description} links={el.links} tech={el.tech} code={el.code} />
        ))}
      </div>
    </section>
  );
};

export default Work;
