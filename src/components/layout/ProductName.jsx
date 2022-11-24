import styles from './ProductName.module.css'

function ProductName({name}){
    return (
        <p className={styles.name}>{name}</p>
    )
}

export default ProductName