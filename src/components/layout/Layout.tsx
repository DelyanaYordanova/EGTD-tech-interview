import React from "react";
import Bet from "../bet/Bet";
import Withdraws from "../withdraws/Withdraws";
import Price from "../price/Price";
import Timer from "../timer/Timer";
import SelectedNumbers from "../selectedNumbers/SelectedNumbers";
import GameField from "../gameField/GameField";
import CommentsList from "../commentsList/CommentsList";

import styles from "./Layout.module.css";

const Layout = () => (
  <div className={styles.container}>
    <div className={`${styles.box} ${styles.box1}`}>
      <Bet />
    </div>
    <div className={`${styles.box} ${styles.box2}`}>
      <Withdraws />
    </div>
    <div className={`${styles.box} ${styles.box3}`}>
      <Price />
    </div>
    <div className={`${styles.box} ${styles.box4}`}>
      <Timer />
    </div>
    <div className={`${styles.box} ${styles.box5}`}>
      <SelectedNumbers />
    </div>
    <div className={`${styles.box} ${styles.box6}`}>
      <GameField />
    </div>
    <div className={`${styles.box} ${styles.box7}`}>
      <CommentsList />
    </div>
  </div>
);
export default Layout;
