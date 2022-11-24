import styles from './Button.module.css'

function Button ({title}){
    return (
        <div className={styles.btn}>
            <button onClick="addCarrinho()">
                {title}
            </button>
        </div>
    )
}
export default Button
