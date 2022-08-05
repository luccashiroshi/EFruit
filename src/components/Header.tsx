import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css'

type icons = {
    icon: 'back' | 'cart'
}

export default function Header(icon : icons) {
    // Define o ícone
    const material = icon.icon === 'cart' ? <ShoppingCartIcon fontSize='inherit' color='success'/> : <ArrowBackIcon fontSize='inherit' color='success'/>
    // Define a rota
    const route = icon.icon === 'cart' ? '/cart' : '/'
    return (
        <div className={styles.header}>
            <Link to='/' className={styles.logo}>
                <p>E<span>FRUIT</span></p>
            </Link>
            <span className={styles.icon}><Link to={route}>{material}</Link></span>
        </div>
    )
}