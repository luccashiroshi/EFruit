import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, ButtonGroup } from '@mui/material';
import { useCart } from './CartContext';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

type FruitProps = {
    id: number
    name: string,
    nutrients: {
        carbohydrates: number,
        protein: number,
        fat: number,
        calories: number,
        sugar: number,
    }
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function FruitCard(item: FruitProps) {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const cart = useCart()
    const add = item => () => {
        cart.addToCart(item)
    }

    return (
        <Card sx={{minWidth:300, backgroundColor: '#d5f5d5', borderRadius: '10px', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'}}>
            <CardHeader title={`${item.name}`}/>
            <CardMedia component="img" height="194" image={`/src/assets/${item.name}.jpg`} alt={item.name} />
            <CardActions disableSpacing>
                <ButtonGroup disableElevation variant="contained">
                    <Button color="success" sx={{fontWeight: "1.5rem"}} onClick={add(item)}>+</Button>
                </ButtonGroup>
                <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Informações Nutricionais:</Typography>
                    <Typography paragraph>
                        Carboidratos: {item.nutrients.carbohydrates}
                    </Typography>
                    <Typography paragraph>
                        Proteínas: {item.nutrients.protein}
                    </Typography>
                    <Typography paragraph>
                        Gordura: {item.nutrients.fat}
                    </Typography>
                    <Typography paragraph>
                        Calorias: {item.nutrients.calories}
                    </Typography>
                    <Typography paragraph>
                        Acúcar: {item.nutrients.sugar}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
