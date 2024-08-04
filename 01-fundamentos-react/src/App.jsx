import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: ""

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/76971178?v=4",
      name: "Rafael Varela",
      role: "Web Developer",
    },
    content: [
      { type: "h1", content: "Burakos + Cost sail" },
      { type: "paragraph", content: "Deck cost: U$50,00" },
      { type: "paragraph", content: "18 Pantano" },
      { type: "paragraph", content: "18 Ilha" },
      { type: "link", content: "www.linkedin.com/rafaelvarelati" },
    ],
    publishedAt: new Date("2024-07-07 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/76971178?v=4",
      name: "Rafael Varela",
      role: "Web Developer",
    },
    content: [
      { type: "h1", content: "Belbe, sad girl" },
      { type: "paragraph", content: "Deck cost: U$50,00" },
      { type: "paragraph", content: "18 Pantano" },
      { type: "paragraph", content: "18 Floresta" },
      { type: "link", content: "https://www.linkedin.com/in/rafaelvarelati/" },
    ],
    publishedAt: new Date("2024-07-07 20:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />
      <h1>SpellCaster Guild</h1>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </>
  );
}
