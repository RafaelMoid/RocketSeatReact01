import styles from "./Sidebar.module.css";

import backgroundImage from "../img/magic-card.jpg";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src={backgroundImage} className={styles.backImage}/>

      <div className={styles.profile}>
        <strong>Rafael Varela</strong>
        <p>Code master</p>
        <footer>
          <a href="#">Editar seu perfil</a>
        </footer>
      </div>
    </aside>
  );
}
