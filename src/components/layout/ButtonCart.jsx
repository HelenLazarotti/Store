import styles from './ButtonCart.module.css'
import {FaShoppingCart} from 'react-icons/fa'
import {  Link } from 'react-router-dom'

function ButtonCart(){
    return (
        <div className={styles.container}>
            <div>
            <FaShoppingCart color='#FFF' size={25}/>
            </div>

            <div className={styles.link}>

                <Link to='/cart'>Carrinho de Compras</Link>

            </div>
        
        </div>
    )
}

export default ButtonCart