import { useState, useEffect } from "react";
import { lazy } from "react";
import styles from "../styles/container.module.css";

const FavoriteCatComponent = lazy(() => import("./FavoriteCat"));

export default function FavoriteCatsComponent() {
  const [favoriteCats, setFavoriteCats] = useState([]);

  useEffect(() => {
    let items = [];

    for (let j = 0; j < localStorage.length; j++) {
      let key = localStorage.key(j);
      let item = JSON.parse(localStorage.getItem(key));
      items.push(item);
    }

    setFavoriteCats(items);
  }, []);

  return (
    <div className={styles.contaier}>
      {favoriteCats.map((favoriteCat) => (
        <FavoriteCatComponent favoriteCat={favoriteCat} key={favoriteCat.id} />
      ))}
    </div>
  );
}