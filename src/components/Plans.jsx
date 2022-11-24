import styles from './Plans.module.css'

function Plans() {
    return (
        <div className={styles.container}>
            <div className={styles.plans}>
                <div>
                    <h3>1º Limpeza</h3>
                    <li>R$300 (água turva)</li>
                    <li>R$400 (água verde)</li>
                </div>
            </div>

            <div className={styles.plans}>
                <div>
                    <h3>Dez a Mar</h3>
                    <li>R$350 (mensal com produtos)</li>
                </div>
            </div>

            <div className={styles.plans}>
                <div>
                    <h3>Anual</h3>

                    <li>R$280(mês): produtos inclusos</li>
                    <li>R$200(mês): sem produtos</li>
                </div>

            </div>
        </div>
    )
}

export default Plans
