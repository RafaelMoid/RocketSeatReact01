import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from "./Sidebar.module.css";

import backgroundImage from "../img/magic-card.jpg";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src={backgroundImage} className={styles.backImage}/>

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/76971178?v=4"/>
        <strong>Rafael Varela</strong>
        <p>Code master</p>
        <footer>
          <a href="#"><PencilLine size="20"/>Editar seu perfil</a>
        </footer>
      </div>
    </aside>
  );
}
