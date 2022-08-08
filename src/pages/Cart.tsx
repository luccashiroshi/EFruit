import { Button, ButtonGroup, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { useCart } from "../components/CartContext";
import Header from "../components/Header";
import styles from '../styles/Cart.module.css'

export default function Cart() {

    const cart = useCart()

    const itemsCount = Object.keys(cart.cart).reduce((prev, curr) => {
        return prev + cart.cart[curr].qntd
    }, 0)

    const remove = (id: number) => () => {
        cart.removeFromCart(id)
    }

    const addQtnd = id => () => {
        cart.addQtnd(id)
    }
    const removeQtnd = id => () => {
        cart.removeQtnd(id)
    }

    return (
        <>
            <Header icon="back" />
            <TableContainer sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Table component={Paper} sx={{ maxWidth: '80vw', marginTop: '50px', border: 'solid 1px #0001'}}>
                    <TableHead sx={{backgroundColor:"#8ec08e"}}>
                        <TableRow>
                            <TableCell sx={{color:"#FFF"}}>Description</TableCell>
                            <TableCell sx={{color:"#FFF"}} align="center">Quantity</TableCell>
                            <TableCell sx={{color:"#FFF"}} align="center">Remove</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(cart.cart).map(key => {

                            const fruitName = cart.cart[key].product.name
                            const fruitQntd = cart.cart[key].qntd
                            return (
                                <TableRow key={key}>
                                    <TableCell component="th" scope="row" sx={{display:'flex'}}>
                                        <img src={`../src/assets/${fruitName}.jpg`} alt="" className={styles.fruitImg} />
                                        <span className={styles.fruitName}>{fruitName}</span>
                                    </TableCell>
                                    <TableCell align="center">
                                        <ButtonGroup variant="contained">
                                            <Button color='success' onClick={addQtnd(key)}>+</Button>
                                            <Button disabled variant="outlined">{fruitQntd} </Button>
                                            <Button color='success' onClick={removeQtnd(key)}>-</Button>
                                        </ButtonGroup>
                                    </TableCell>
                                    <TableCell align="center">
                                        <IconButton onClick={remove(key)}><ClearIcon /></IconButton>
                                    </TableCell>
                                </TableRow>
                            )
                        }

                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell><p className={styles.total}>Total:</p></TableCell>
                            <TableCell></TableCell>
                            <TableCell align="center" sx={{padding:'0px'}}><p className={styles.total}>{itemsCount} Items</p></TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </>
    )
}