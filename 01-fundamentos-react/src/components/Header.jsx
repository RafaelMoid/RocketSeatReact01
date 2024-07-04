import styles from "./Header.module.css"

import spellCasterLogo from '../img/SpellCasterLogo.svg'

export function Header () {
    return (
        <header className={styles.header}>
            <img src={spellCasterLogo} alt="Spellcaster guild logo" />
        </header>
    )
}