import { Post } from "./Post";
import { Header } from "./components/Header";
import './global.css';

export function App() {

  return (
    <>
      <Header />
      <h1>SpellCaster Guild</h1>
      <Post 
        deck="Burakos"
        colors="UB"
      />    
      <Post
        deck="Zimone and Dina"
        colors="UBG"
      />    
    </>
  )
}
