import React from 'react';
import Vector from "../../assets/Vector.png"
import Vector_1 from "../../assets/Vector (1).png"
import Vector_2 from "../../assets/Vector (2).png"
import Vector_3 from "../../assets/Vector (3).png"
import styles from "../Footer/footer.module.css"


const Footer = () => {
    return (
        <div className={styles.footerMain}>
          <div className={styles.logo}>          
          <img src={Vector} alt="logotype" />
          <img src={Vector_1} alt="logotype" />
          <img src={Vector_2} alt="logotype" />
          <img src={Vector_3} alt="logotype" />         
          </div>
          <div className={styles.textFooter}>
            <p>Редакция Реклама Контакты Пресс-релизы 2022г. "NewsTime"</p>
          </div>
        </div>
    );
};

export default Footer;