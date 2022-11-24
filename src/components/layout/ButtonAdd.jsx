import styles from './ButtonAdd.module.css'

import React, { useState } from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

function ButtonAdd() {

    //add quantia de produtos no carrinho:
    const [count, setCount] = useState(0);

    return (
        <div className={styles.buyBox}>

            <div>
                <button onClick={() => setCount(count - 1)} className={styles.remove}>
                    <FaChevronDown />
                </button>
            </div>

            <div className={styles.count}>
                <p>{count}</p>
            </div>

            <div>
                <button onClick={() => setCount(count + 1)} className={styles.add}>
                    <FaChevronUp />
                </button>
            </div>
        </div>
    )
}

export default ButtonAdd