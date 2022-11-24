import styles from './Price.module.css'

function Price({price}){
    return (
        <p className={styles.price}>R$ {price}</p>
    )
}

export default Price