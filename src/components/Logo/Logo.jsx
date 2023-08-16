import style from "./style.module.css";
import React from "react";

export function Logo({ title, subtitle, img }) {
  return (
    <>
      <div className={style.container}>
        <img className={style.img} src={img} alt="logo"></img>
        <h2 className={style.title}>{title}</h2>
      </div>
      <h4 className={style.subtitle}>{subtitle}</h4>
    </>
  );
}
