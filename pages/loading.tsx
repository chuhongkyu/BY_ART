import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../styles/Loading.module.css";

const loading = () => {
  const router = useRouter();
  const onLocate = () => {
    router.push("/");
  };
  useEffect(() => {
    setTimeout(onLocate, 1500);
    return () => {
      clearTimeout();
    };
  }, []);
  return (
    <section className={styles.loading}>
      <div className={styles.box_containers}>
        <div className={styles.box_container}>
          <div className={styles.box_container_1}>
            <div className={styles.box1}></div>
            <div className={styles.box2}></div>
          </div>

          <div className={styles.box_container_2}>
            <div className={styles.box3}></div>
            <div className={styles.box4}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default loading;
