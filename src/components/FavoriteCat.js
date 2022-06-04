import styles from "../styles/card.module.css";

export default function FavoriteCatComponent(props) {
  return (
    <div className={styles.card}>
      <img
        className={styles.thumbnail}
        src={props.favoriteCat.url}
        key={props.favoriteCat.id}
        alt={props.favoriteCat.id}
      />
    </div>
  );
}
