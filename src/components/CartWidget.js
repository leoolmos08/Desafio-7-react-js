import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

function CartWidget (){
    return (
        <>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
            </Badge>
        </>
    );
}

export default CartWidget;