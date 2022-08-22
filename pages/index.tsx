import moment from "moment";
import type { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [getMoment, setMoment] = useState(moment()); // 오늘

  const today = getMoment; // 오늘

  const todayFirstWeek = today.clone().startOf("month").week(); // 이번달의 첫째 주
  const todayLastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week(); // 이번달의 마지막 주

  const [dayArray, setDayArray] = useState<any>([]); // 날짜들이 가지는 상태값들 모아둔 배열

  return <div className={styles.container}></div>;
};

export default Home;
