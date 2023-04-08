import React from 'react'
import styles from "./Header.module.scss"

import { ReactComponent as Logo } from "../../img/logo.svg";
import { ReactComponent as Basket } from "../../img/card_basket.svg";
import { ReactComponent as Favorite } from "../../img/favorite.svg";
import { ReactComponent as ProfileIcon } from "../../img/profileicon.svg";

export const MainHeader = (props) => {
  console.log(props)
  return (
    <header>
    <div className={styles.headerLeft}>
      <div className={styles.headerInfo}>
        <Logo /> 
        <div className={styles.companyName}>
          <h3>React Snickers</h3>
          <p>Магазин ахуенных кроссовок</p>
        </div>
      </div>
    </div>

    <div className={styles.headerRight}>
      <Basket onClick={props.onClickCart} className={styles.basket} />
      <p>0 руб.</p>
      <Favorite />
      <ProfileIcon onClick={props.onClickModal} className={styles.profile}/>
    </div>
  </header>
  )
}

export default MainHeader

