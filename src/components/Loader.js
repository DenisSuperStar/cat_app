import styles from "../styles/loader.module.css";

export default function LoaderComponent() {
  return (
    <div className={styles.loading}>
      <div className={styles.loader} />
    </div>
  );
}
