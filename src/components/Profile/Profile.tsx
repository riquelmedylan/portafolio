import style from "./profile.module.css";
import { ReactElement } from "react";

export default function Profile(): ReactElement {
  return (
    <div>
      <h1 className={style.name}>Dylan Riquelme</h1>
      <p className={style.job}>Frontend Developer</p>
    </div>
  );
}
