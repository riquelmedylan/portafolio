import style from "../styles/modules/profile.module.css";

export default function Profile() {
  return (
    <div>
      <h1 className={style.name}>Dylan Riquelme</h1>
      <p className={style.job}>Frontend Developer</p>
    </div>
  );
}
