import { Post } from "./Post";

export function App() {

  return (
    <>
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
