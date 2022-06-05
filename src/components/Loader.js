import styles from "./Loader.module.css";

export default function LoaderComponent() {
  return (
    <div className={styles.loading}>
      <div className={styles.loader} />
    </div>
  );
}
