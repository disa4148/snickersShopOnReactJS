import React from "react";
import styles from "./Drawer.module.scss";

import btnRemove from "../../img/btn-remove.svg";
import arrow from "../../img/arrow.svg";

export const Drawer = ({onClose, items = []}) => { // items - Хранятся по умолчанию пустым массивом
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className={styles.korzinaIKrossovki}>
          <div className={styles.wrappCartText}>
          <h1 className={styles.trash}>Корзина</h1>
            <img onClick={onClose} className={styles.btnExit} src={btnRemove} alt="Remove"/>
          </div>
          <div className={styles.wrapperSnickers}>

            {
              items.map((obj) => ( 
                <div className={styles.cartItem}>
              <img
                className={styles.sneackersItem}
                src={obj.imageUrl}
                alt="Sneackers"
              />
              <div>
                <p>{obj.firstname}, {obj.secondName}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img className={styles.btnRemove} src={btnRemove} alt="Remove" />
            </div>
            ))}
            
         

          </div>
        </div>

        <div className={styles.items}>
          <div className={styles.cartTotalBlock}>
            <ul>
              <li>
                <span>Итого: </span>
                <div></div>
                <b>0 руб.</b>
              </li>

              <li>
                <span>Налог 5%</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className={styles.greenButton}>
              Оформить заказ <img src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
