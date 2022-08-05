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

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

type FruitProps = {
    name: string,
    nutrients: object
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

    const [fruit, setFruit] = React.useState([])

    // setFruit(item)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{minWidth:300 }}>
            <CardHeader title={item.name} />
            <CardMedia component="img" height="194" image="../" alt={item.name} />
            <CardActions disableSpacing>
                <ButtonGroup disableElevation variant="contained">
                    <Button>+</Button>
                    <Button>-</Button>
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
