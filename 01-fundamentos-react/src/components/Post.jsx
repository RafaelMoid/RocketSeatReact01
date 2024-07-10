import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar className={styles.avatar} src="https://avatars.githubusercontent.com/u/76971178?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Rafael Varela</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time dateTime='2024-07-07'>Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <h1>Burakos + Cost sail</h1>
                <p>Deck cost: U$50,00</p>
                <ul>
                    <li>18 Pantano</li>
                    <li>18 Ilha</li>
                </ul>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu comentario</strong>
                <textarea placeholder='Deixe um comentario' />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}