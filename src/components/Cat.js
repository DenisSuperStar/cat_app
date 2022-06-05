import { useState, useEffect } from "react";
import styles from "./Cat.module.css";

export default function CatComponent(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    localStorage.key(props.cat.id) === props.cat.id
      ? setIsFavorite(true)
      : setIsFavorite(false);
  }, [props.cat.id]);

  return (
    <div className={styles.card}>
      <img
        className={styles.thumbnail}
        src={props.cat.url}
        alt={props.cat.id}
      />
      <div className={styles.wrapper}>
        {!isFavorite ? (
          <img
            className={styles.icon}
            src="/images/like.svg"
            alt="like it"
            onClick={props.handleAddCat}
          />
        ) : (
          <img
            className={styles.icon}
            src="/images/love.svg"
            alt="love it"
          />
        )}
      </div>
    </div>
  );
}
