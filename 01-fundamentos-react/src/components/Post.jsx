import styles from './Post.module.css'

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/76971178?v=4" />
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
        </article>
    )
}