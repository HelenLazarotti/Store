import styles from './Input.module.css'

function Input({type, name, placeholder, value, onChange}){
    return(
        <div className={styles.container}>
            <input type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            value={value}
            className={styles.input}
            onChange={onChange}/>
        </div>
    )
}

export default Input