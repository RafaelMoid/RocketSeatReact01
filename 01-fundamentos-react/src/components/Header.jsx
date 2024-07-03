import styles from "./Header.module.css"

export function Header () {
    return (
        <header className={styles.header}>
            <strong>My MTG Decks and friends reviews</strong>
        </header>
    )
}