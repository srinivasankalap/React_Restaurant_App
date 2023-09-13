import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCart={
    items: [],
    totalAmount: 0
}

const cartReducer= (state, action)=>{
    if (action.type==='ADD_ITEM'){
        const updatedItems= state.items.concat(action.item);
        const updatedAmount= state.totalAmount+action.item.price * action.item.amount;
        return{
            items: updatedItems,
            totalAmount: updatedAmount
        }
    }
    return defaultCart;
}


const CartProvider=(props)=>{
    const [cartState, dispatchAction] = useReducer(cartReducer, defaultCart);

    const addItemCart=item=>{
        dispatchAction({type: 'ADD_ITEM', item: item});
    };

    const removeItemCart=id=>{
        dispatchAction({type: 'REMOVE_ITEM', id: id});
    }

    const cartContextHelper={
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemCart,
        removeItem: removeItemCart
    }

    return (<CartContext.Provider value={cartContextHelper}>
        {props.children}
    </CartContext.Provider>)
}

export default CartProvider;