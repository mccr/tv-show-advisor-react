import style from "./style.module.css";

export const Logo = ({ title, subtitle, img }) => {
  return (
    <>
      <div className={style.container}>
        <img className={style.img} src={img} alt="logo" />
        <h2 className={style.title}>{title}</h2>
      </div>
      <h4 className={style.subtitle}>{subtitle}</h4>
    </>
  );
};
