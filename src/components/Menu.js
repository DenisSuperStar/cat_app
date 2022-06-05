import { NavLink } from "react-router-dom";
import style from "../styles/menu.module.css";
import '../styles/app.css';

export default function MenuComponent() {
  return (
    <header className={style.header}>
      <nav>
        <ul className={style.list}>
          <li className={style.item}>
            <NavLink className={style.link} to="/" activeclassname="active">
              Главная
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink
              className={style.link}
              to="/favorite"
              activeclassname="active"
            >
              Любимые котики
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
