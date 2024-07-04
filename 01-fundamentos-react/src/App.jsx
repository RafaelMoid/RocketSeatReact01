import { Post } from "./Post";
import { Header } from "./components/Header";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />
      <h1>SpellCaster Guild</h1>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post deck="Burakos" colors="UB" />
          <Post deck="Zimone and Dina" colors="UBG" />
        </main>
      </div>
    </>
  );
}
