import React from "react";
import CartItem from "./CartItem";


class Cart extends React.Component {
    
    constructor () {
        super();
        this.state = {
            products: [
                {
                    price: 999,
                    title: 'Mobile Phone',
                    qty: 1,
                    img: '',
                    id:1,
                },
                {
                    price: 99,
                    title: 'Watch',
                    qty: 1,
                    img: '',
                    id:2,
                },
                {
                    price: 555,
                    title: 'computer',
                    qty: 1,
                    img: '',
                    id:3,
                },
                {
                    price: 12000,
                    title: 'Laptop',
                    qty: 1,
                    img: '',
                    id:4,
                }
            ]
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }

    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map( (product) =>{
                    return (
                        <CartItem
                            product= {product}
                            key={product.id}
                        />
                    );
                }) }
            </div>
            
        );
    }

}  


export default Cart;