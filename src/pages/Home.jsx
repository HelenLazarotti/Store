import icon2 from '../assets/icon2.png'
import styles from './Home.module.css'

function Home() {
    return (
        <div>
            <div className={styles.container}>

                <div className={styles.content}>
                    <img src={icon2} alt='logotipo da empresa' />
                </div>

                <div className={styles.content}>
                    <h2>LP</h2>
                    <p>A empresa LP existe a muito tempo... Começou em 2012 com o fundador Luiz Carlos, inicialmente oferecendo o serviço de manutenção de piscinas que, na época expandiu e cresceu muito por ser um dos poucos a oferecer este serviço.</p>

                    <p>Mas sempre cativando o sonho de ter sua própria loja, oferecendo serviços e produtos voltados para seu nicho de trabalho...</p>

                    <p>Então no ano de 2021, começou os preparativos... E no dia 09 de outubro de 2021 abriu as portas ao novo empreendimento que a cada dia traz muitas realizações e aprendizagens junto aos nossos clientes e apoiadores.</p>

                    <p>Obrigado a todos que nos acompanham nessa jornada.</p>

                    <p className={styles.p}>Equipe LP 💙</p>
                </div>
            </div>
        </div>
    )
}

export default Home