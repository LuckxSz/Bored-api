import { useEffect } from "react";
import styles from "./styles.module.css";
import { useState } from "react";
import gif from "../assets/L.gif";

export const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.boredapi.com/api/activity/");
        const responseData = await response.json();
        setData(responseData);
      } catch (err) {
        console.error("error bro!, something is wrong with this api, ", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <img className={styles.gif} src={gif} alt="L" />
      <h1 className={styles.letters}>FIND SOMETHING TO DO !</h1>

      {data && (
        <div>
          <p>
            Activity: <span className={styles.letters}>{data.activity}</span>
          </p>
          <p>
            Type: <span className={styles.letters}>{data.type}</span>
          </p>
          <p>
            Participants:{" "}
            <span className={styles.letters}>{data.participants}</span>
          </p>
          {data.link && (
            <p className={styles.a}>
              Link:{" "}
              <a target="_blank" rel="noopener noreferrer" href={data.link}>
                Click here to know more
              </a>
            </p>
          )}
        </div>
      )}
    </div>
  );
};
