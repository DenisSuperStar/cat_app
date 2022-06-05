import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";
import '../assets/styles/layout.css';

export default function MenuComponent() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink className={styles.link} to="/" activeclassname="active">
              Главная
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              className={styles.link}
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
