import { useState, useEffect } from "react";
import { lazy } from "react";
import LoaderComponent from "./Loader";
import styles from "../styles/container.module.css";

const CatComponent = lazy(() => import("./Cat"));

export default function AllCatsComponent() {
  const [error, setError] = useState(null);
  const [cats, setCats] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  async function fetchCatsAsync() {
    await fetch("https://api.thecatapi.com/v1/images/search?limit=20", {
      headers: {
        "x-api-key": "8469b62b-635f-4207-86f6-29277feca77f",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCats(result);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }

  function handleAddCat(id, item) {
    console.log(id, item);
    localStorage.setItem(`${id}`, JSON.stringify(item));
  }

  function handleRemoveCat(id) {
    localStorage.removeItem(`${id}`);
  }

  useEffect(() => {
    fetchCatsAsync(setError, setCats);
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <LoaderComponent />;
  } else {
    return (
      <div className={styles.container}>
        {cats.map((cat) => (
          <CatComponent
            key={cat.id}
            cat={cat}
            handleAddCat={handleAddCat.bind(this, cat.id, cat)}
            handleRemoveCat={handleRemoveCat.bind(this, cat.id)}
          />
        ))}
      </div>
    );
  }
}
