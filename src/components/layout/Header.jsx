import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { FaHome, FaPumpSoap, FaHandshake, FaPhone } from 'react-icons/fa';

import styles from './Header.module.css'

import Home from '../../pages/Home';
import Products from '../../pages/Products';
import Services from '../../pages/Services';
import Contact from '../../pages/Contact';
import Cart from '../../pages/Cart';


function Header() {
    return (
        <Router>  
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                                                    
                    <li className={styles.item}>
                        <Link to='/contact'><FaPhone/></Link>
                        <p>Contato</p>
                    </li>

                    <li className={styles.cart}>
                        <Link to='/cart'>Carrinho</Link>
                        <p>Contato</p>
                    </li>

                    <li className={styles.item}>
                        <Link to='/services'>
                            <FaHandshake /></Link>
                            <p>Serviços</p>
                    </li>

                    <li className={styles.item}>
                        <Link to='/products'><FaPumpSoap/></Link>
                        <p>Produtos</p>
                    </li>

                    <li className={styles.item}>
                        <Link to='/'><FaHome/></Link>
                        <p>Início</p>
                    </li>

                </ul>
            </nav>

            <Routes>
                <Route path='/' element={<Home />}></Route>

                <Route path='/products' element={<Products />}></Route>

                <Route path='/services' element={<Services />}></Route>

                <Route path='/cart' element={<Cart/>}></Route>

                <Route path='/contact' element={<Contact />}></Route>


            </Routes>
        </Router>
    )
}

export default Header