import React, { useState } from "react";
import { FiInfo } from "react-icons/fi";
import "../../sass/components/recent.scss";
import { IoClose } from "react-icons/io5";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function Recent({ image, title, description, links }) {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="recent">
      <img src={image} alt={title} className="background" onClick={() => setHidden(false)} />
      <button onClick={() => setHidden(!hidden)}>{hidden ? <FiInfo /> : <IoClose />}</button>
      <div className={hidden ? "details" : "details visible"}>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <div className="links">
          {links.map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noopener noreferrer">
              <span>{l.label}</span>
              <HiOutlineExternalLink />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
