import { useState, useEffect } from "react";
import styles from "../styles/card.module.css";

export default function CatComponent(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(!!localStorage.key(props.cat.id));
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
            src="Like.svg"
            alt="Like"
            onClick={props.handleAddCat}
          />
        ) : (
          <img
            className={styles.icon}
            src=""
            alt=""
            onClick={props.handleRemoveCat}
          />
        )}
      </div>
    </div>
  );
}
