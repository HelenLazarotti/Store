

import styles from './Select.module.css'

function Select({text, name}){

    return(
        <div className={styles.container}>
            <label>Escolha um plano:</label>
            <select text={text} name={name} id={name} >
                <option>
                    1º Limpeza
                </option>
                <option>
                   Dezembro a Março
                </option>
                <option>
                    Anual
                </option>
                
            </select>
        </div>
    )
}

export default Select