import React from "react";
import { useSelector } from "react-redux";
import styles from "./body.module.css";

const Body = () => {
  const news = useSelector((state) => state.news.news);
  console.log(news);
  return (
    <>
      <div className={styles.cards}>
        {news.map((item) => {
          return (
            <>
              {item.id === 1 && (
                <>
                  <div className={styles.leftCard}>
                    <div className={styles.leftContainer}>
                      <h4>
                        <b>{item.title}</b>
                      </h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </>
              )}
            </>
          );
        })}
        <div className={styles.rightCards}>
          {news.map((item) => {
            return (
              <>
                {item.id !== 1 && (
                  <div className={styles.rightCard}>
                    <div className={styles.rightContainer}>
                      <h4>
                        <b>{item.title}</b>
                      </h4>
                      <p>{item.id !== 1 && item.text}</p>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
