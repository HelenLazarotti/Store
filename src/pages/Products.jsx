import Text from "../components/layout/Text"


import algicidachoque from '../assets/algicidachoque.jpg'
import algicidamanu from '../assets/algicidamanu.jpg'
import clarificante from '../assets/clarificante.jpg'
import ClearGel from '../assets/ClearGel.png'
import cloropace from '../assets/cloropace.jpg'
import esponjaborda from '../assets/esponjaborda.jpg'
import fitateste from '../assets/fitateste.png'
import kittesteonline from '../assets/kittesteonline.jpg'
import M20 from '../assets/M20.png'
import MPLUS from '../assets/MPLUS.png'
import pastilhabel from '../assets/pastilhabel.webp'
import pastilhapace from '../assets/pastilhapace.jpg'
import azulpods from '../assets/azulpods.png'


import styles from './Product.module.css'

import ButtonAdd from "../components/layout/ButtonAdd";
import ProductName from "../components/layout/ProductName";
import Button from "../components/layout/Button";
import Price from "../components/layout/Price"
import ButtonCart from "../components/layout/ButtonCart"

function Products() {
    /*const products = [
        https://www.robinwieruch.de/react-remove-item-from-list/
        {
            id: 1,
            name: 'AzulPods',
            price: 'R$ 15,00',
            qtde: ''
        }, 
        {
            id: 2, 
            name: 'Algicida Choque',
            price: 'R$ 52,00',
            qtde: ''
        }
    ]

    const [products, setProducts ] = Products.useState()*/
    return (
        <div>
            <ButtonCart/>
            <Text title="Produtos Químicos" />
            <div className={styles.container}>

                <div className={styles.productBox}>

                    <div>
                        <img src={azulpods} alt="AzulPods Decantador 50ml" />
                        <ProductName name='AzulPods Decantador 50ml' />
                    </div>

                    <Price price='15,00' />
                    <ButtonAdd />
                    <Button title='Adicionar carrinho' />
                </div>

                <div className={styles.productBox}>

                    <div>
                        <img src={algicidachoque} alt="Algicida Choque" />
                        <ProductName name='Algicida Choque 1L' />
                    </div>
                    <Price price='52,00' />
                    <ButtonAdd />
                    <Button title='Adicionar carrinho' />
                </div>

                <div className={styles.productBox}>

                    <div>
                        <img src={algicidamanu} alt="algicida manutenção" />
                        <ProductName name='Algicida Manutenção 1L' />
                    </div>
                    <Price price='32,00' />
                    <ButtonAdd />
                    <Button title='Adicionar carrinho' />
                </div>

                <div className={styles.productBox}>

                    <div>
                        <img src={clarificante} alt="Clarificante" />
                        <ProductName name='Clarificante GENCO 1L' />
                    </div>
                    <Price price='25,00' />
                    <ButtonAdd />
                    <Button title='Adicionar carrinho' />
                </div>

                <div className={styles.productBox}>

                    <div>
                        <img src={ClearGel} alt="Clear Gel" />
                        <ProductName name='Clear Gel' />
                    </div>
                    <Price price='30,00' />
                    <ButtonAdd />
                    <Button title='Adicionar carrinho' />
                </div>

                <div className={styles.productBox}>

                    <div>
                        <img src={cloropace} alt="Cloro Pace" />
                        <ProductName name='Cloro PACE 1kg' />
                    </div>
                    <Price price='50,00' />
                    <ButtonAdd />
                    <Button title='Adicionar carrinho' />
                </div>

                <div className={styles.productBox}>

                    <div>
                        <img src={esponjaborda} alt="Esponja Pass Limp" />
                        <ProductName name='Pass Limp' />
                    </div>
                    <Price price='24,00' />
                    <ButtonAdd />
                    <Button title='Adicionar carrinho' />
                </div>

                <div className={styles.productBox}>

                    <div>
                        <img src={fitateste} alt="fita teste bel" />
                        <ProductName name='Fita Teste BEL' />
                    </div>
                    <Price price='45,00' />
                    <ButtonAdd />
                    <Button title='Adicionar carrinho' />
                </div>

                <div className={styles.productBox}>

                    <div>
                        <img src={kittesteonline} alt="Kit teste ph/cl" />
                        <ProductName name='Kit Teste PH/CL' />
                    </div>
                    <Price price='45,00' />
                    <ButtonAdd />
                    <Button title='Adicionar carrinho' />
                </div>

                <div className={styles.productBox}>

                    <div>
                        <img src={M20} alt="M20" />
                        <ProductName name='M20 1L' />
                    </div>
                    <Price price='100,00' />
                    <ButtonAdd />
                    <Button title='Adicionar carrinho' />
                </div>

                <div className={styles.productBox}>

                    <div>
                        <img src={MPLUS} alt="MPLUS" />
                        <ProductName name='MPLUS 2,5L' />
                    </div>
                    <Price price='107,00' />
                    <ButtonAdd />
                    <Button title='Adicionar carrinho' />
                </div>

                <div className={styles.productBox}>

                    <div>
                        <img src={pastilhabel} alt="Pastilha Bel 200g" />
                        <ProductName name='Pastilha Tripla Ação BEL 200g' />
                    </div>
                    <Price price='14,00' />
                    <ButtonAdd />
                    <Button title='Adicionar carrinho' />
                </div>

                <div className={styles.productBox}>

                    <div>
                        <img src={pastilhapace} alt="Pastilha PACE Tripla Ação 200g" />
                        <ProductName name='Pastilha PACE Tripla Ação 200g' />
                    </div>
                    <Price price='14,00' />
                    <ButtonAdd />
                    <Button title='Adicionar carrinho' />
                </div>

            </div>
        </div>
    )
}

export default Products