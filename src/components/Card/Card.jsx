import React from "react";
import { useState } from "react";
import styles from './Card.module.scss';

import { ReactComponent as Plus } from "../../img/plus.svg";
import { ReactComponent as Checked } from "../../img/checked.svg";

export const Card = (props) => {

// const onClickButton = () => { 
//   alert(props.firstName + " " + props.secondName);
// }

const [isAdded, setIsAdded] = useState(true)

  return (
    <div className={styles.card}>
      <img
        //src={window.location.origin + '../img/cards/sneackers1.png'}
        //src={props.imageUrl}
        //src="../img/cards/sneackers1.png"
        src={props.imageUrl}
        alt="failed"
        className={styles.snickersImage}
      />
      <div className={styles.snickersInfo}>
        <p>{props.firstName}</p>
        <p>{props.secondName}</p>
      </div>
      <div className={styles.insideCard}>
        <span className={styles.snickersPriceTitle}>Цена:</span>
        <div className={styles.snickersPrice}>
          <b>{props.price} ₽.</b>
          <button className={styles.plusButton} onClick={ () => setIsAdded(!isAdded)}> {/*! - Инвертация значения*/ }
            {isAdded ? <Plus className={styles.plusVektor}/> : <Checked className={styles.checkedPlus}/>}
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
