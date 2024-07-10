import styles from "./Avatar.module.css";

//Abaixo passei as props via Desestruturação e atribui o valor de hasBorder como
//True por default caso o valor false ja não venha por padrão
//Desta forma, caso seja chamado sem passar o prop, o avatar terá um border padrão
//Caso seja chamado com prop false, o avatar não terá border.

export function Avatar({ hasBorder = true, src}) {
    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}
        />                
    )
}