import { Post } from "./Post";
import { Header } from "./components/Header";

export function App() {

  return (
    <>
      <Header />
      <h1>My First React App</h1>
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
