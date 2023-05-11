
import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar";
import React from "react";


class App extends React.Component {

  constructor () {
    super();
    this.state = {
        products: [
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
                id:1,
            },
            {
                price: 99,
                title: 'Watch',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=694&q=80',
                id:2,
            },
            {
                price: 555,
                title: 'computer',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
                id:3,
            },
            {
                price: 12000,
                title: 'Laptop',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1575024357670-2b5164f470c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                id:4,
            }
        ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  handleIncreaseQuantity = (product) => {
      console.log('hey please inc the qty of ', product);
      const { products } = this.state;

      const index = products.indexOf(product);

      products[index].qty += 1;

      this.setState({
          products: products
      });

  }


  handleDecreaseQuantity = (product) => {
      console.log('hey please dec the qty of ', product);
      const { products } = this.state;

      const index = products.indexOf(product);

      if(products[index].qty === 0 ){
          return;
      }

      products[index].qty -= 1;

      this.setState({
          products: products
      });

  }


  handleDeleteProduct = (id) => {
      const { products } = this.state;

      const items = products.filter( (item) => item.id !== id );   // [{}]

      this.setState({
          products: items
      })
  }


  getCartCount = () => {
    const {products} = this.state;
    let count = 0;

    products.forEach(product => {
      count += product.qty;
    });

    return count;
  }


  getCartTotal = () => {
      const  { products } = this.state;

      let cartTotal = 0;

      products.map( (product) => {
        cartTotal = cartTotal + product.qty * product.price
      })

      return cartTotal;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar 
          count = {this.getCartCount() }
        />
        <div className="outer-container">
        <Cart 
          products = {products}
          onIncreaseQuantity= { this.handleIncreaseQuantity }
          onDecreaseQuantity= { this.handleDecreaseQuantity }
          onDeleteProduct= { this.handleDeleteProduct }
        />
        <div  className="glass-effect-total" >TOTAL: { this.getCartTotal() } </div>
      </div>
      </div>
    );
  }

}


export default App;
