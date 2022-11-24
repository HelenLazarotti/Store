import Text from '../components/layout/Text'

import { FaTrash } from 'react-icons/fa';
import styles from './Cart.module.css'

import azulpods from '../assets/azulpods.png'
import M20 from '../assets/M20.png'

function Cart(){
    return (
        <div>
            <Text title='Carrinho de Compras'/>

            <div className= {styles.container}>
                <div className={styles.divProduct}>

                    <img src={azulpods} alt='Legal'/>
                        
                    <p>AzulPods Super Decantador 50ml</p>

                    <div>
                        2
                    </div>

                        <button><FaTrash color='#8B0000'/></button>
                </div>

                <div className={styles.divProduct}>

                    <img src={M20} alt='Legal'/>
                        
                    <p>AzulPods Super Decantador 50ml</p>

                    <div>
                        2
                    </div>

                        <button><FaTrash color='#8B0000'/></button>
                </div>
            </div>
        </div>
    )
}

export default Cart
