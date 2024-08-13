import { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer } from "../reducer/cartReducer";

const initialState = {
    cartList: JSON.parse(localStorage.getItem("cartList")) || [],
    total: 0
}

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        localStorage.setItem("cartList", JSON.stringify(state.cartList));
    }, [state.cartList]);

    const addToCart = (product) => {
        const updatedCartList = [...state.cartList, product];
        updateTotal(updatedCartList);

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedCartList
            }
        });
    }

    const removeFromCart = (product) => {
        const updatedCartList = state.cartList.filter((currentProduct) => currentProduct.id !== product.id);
        updateTotal(updatedCartList);

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedCartList
            }
        });
    }

    const updateTotal = (products) => {
        let total = products.reduce((acc, product) => acc + product.price, 0);
        dispatch({
            type: "UPDATE_TOTAL",
            payload: {
                total
            }
        });
    }

    const value = {
        total: state.total,
        cartList: state.cartList,
        addToCart,
        removeFromCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}
