import { Button, ButtonGroup, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { useCart } from "../components/CartContext";
import Header from "../components/Header";
import styles from '../styles/Cart.module.css'

export default function Cart() {

    const cart = useCart()
    const add = item => () => {
        cart.addToCart(item)
    }
    return (
        <>
            <Header icon="back" />
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Description</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Remove</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(cart.cart).map(key => {

                            const fruitName = cart.cart[key].product.name
                            const fruitQntd = cart.cart[key].qntd

                            return (
                                <TableRow key={key}>
                                    <TableCell component="th" scope="row">
                                        <img src={`../src/assets/${fruitName}.jpg`} alt="" className={styles.fruitImg}/>
                                        {fruitName}
                                    </TableCell>
                                    <TableCell align="right">
                                        <ButtonGroup variant="contained">
                                            <Button>+</Button>
                                            <Button disabled variant="outlined">{fruitQntd} </Button>
                                            <Button>-</Button>
                                        </ButtonGroup>
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton><ClearIcon/></IconButton>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}