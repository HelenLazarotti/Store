import {FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'

import styles from './Link.module.css'

function Link({whats, insta, face}){
    return (
        <div className={styles.container}>
            <div>
                <a href='https://api.whatsapp.com/send?phone=5551996640634' target='blank'>
                    <FaWhatsapp size={150} />
                    <p>{whats}</p>
                </a>
                
            </div>

            <div>
                <a href='https://www.instagram.com/luiz.piscinas/' target='blank'>
                    <FaInstagram size={150} />
                    <p>{insta}</p>
                </a>
            </div>

            <div>
                <a href='https://www.facebook.com/lp.luizpiscinas' target='blank'>
                    <FaFacebook size={150} />
                    <p>{face}</p>
                </a>
            </div>
        </div>
    )
}

export default Link