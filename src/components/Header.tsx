import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css'
export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <p>E<span>FRUIT</span></p>
            </div>
            <span className={styles.cart}><Link to='/cart'><ShoppingCartIcon fontSize='inherit' color='success' /></Link></span>
        </div>
    )
}