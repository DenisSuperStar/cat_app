import { useState, useEffect } from "react";
import { lazy } from "react";
import styles from "./Cats.module.css";

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

  function removeFromFavoriteCats(favorite) {
    localStorage.removeItem(favorite.id);
  }

  return (
    <div className={styles.container}>
      {favoriteCats.map((favoriteCat) => (
        <FavoriteCatComponent
          favoriteCat={favoriteCat}
          key={favoriteCat.id}
          handleRemoveCat={removeFromFavoriteCats.bind(this, favoriteCat)}
        />
      ))}
    </div>
  );
}
