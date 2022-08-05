import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css'
import { Badge, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

type icons = {
    icon: 'back' | 'cart'
}

const CartIconButton = styled(IconButton)({
    margin: '10px 50px 0 0',
    color: '#FFF',
})


export default function Header(icon: icons) {
    // Define o ícone
    const material = icon.icon === 'cart' ? <ShoppingCartIcon fontSize='large' /> : <ArrowBackIcon fontSize='large' />
    const isInvisible = icon.icon === 'cart' ? false : true
    // Define a rota
    const route = icon.icon === 'cart' ? '/cart' : '/'

    return (
        <div className={styles.header}>
            <Link to='/' className={styles.logo}>
                <p>E<span>FRUIT</span></p>
            </Link>
            <CartIconButton aria-label="cart" classes={{ root: "icon" }}>
                <Badge badgeContent={4} color="success" invisible={isInvisible}>
                    <Link className={styles.icon} to={route}>{material}</Link>
                </Badge>
            </CartIconButton>
        </div>
    )
}