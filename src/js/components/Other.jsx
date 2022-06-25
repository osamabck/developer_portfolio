import React from "react";
import { HiCode, HiExternalLink } from "react-icons/hi";
import "../../sass/components/other.scss";

export default function Other({ title, description, links, tech, code = null }) {
  return (
    <div className="other">
      <div className="title">
        <span>{title}</span>
        <div className="links">
          {code != null ? (
            <a href={code} target="_blank" rel="noopener noreferrer">
              <HiCode />
            </a>
          ) : (
            <></>
          )}
          {links.map((l, i) => (
            <a href={l} key={i} target="_blank" rel="noopener noreferrer">
              <HiExternalLink />
            </a>
          ))}
        </div>
      </div>
      <div className="techs">
        {tech.map((e, i) => (
          <span key={i}>{e}</span>
        ))}
      </div>
      <p className="description">{description}</p>
    </div>
  );
}
