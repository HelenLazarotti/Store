import styles from './Text.module.css'

function Text({title}){
    return (
        <h1 className={styles.h1}>{title}</h1>
    )
}

export default Text