
import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar";
import React from "react";
import firebase from "firebase";


class App extends React.Component {

  constructor () {
    super();
    this.state = {
        products: [],
        loading:true
    }

    this.db = firebase.firestore();

  }


  componentDidMount () {
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()                          /// we have to refresh  when data changes happen in firebase to be able to see on the page
    //   .then( (snapshot) => {          
    //     console.log(snapshot);

    //     snapshot.docs.map((doc) => {
    //       console.log( doc.data() );
    //     })
      
    //     const products = snapshot.docs.map( (doc) => {
    //       const data = doc.data();

    //       data['id'] = doc.id;
    //       return data;
    //     })

    //     this.setState({ 
    //       products,
    //       loading: false
    //     })

    //   })


    this.db
      .collection('products')
      .onSnapshot( (snapshot) => {        // this will rendered automatically when data changes happen in firebase
          console.log(snapshot);
  
          snapshot.docs.map((doc) => {
            console.log( doc.data() );
          })
        
          const products = snapshot.docs.map( (doc) => {
            const data = doc.data();
  
            data['id'] = doc.id;
            return data;
          })
  
          this.setState({ 
            products,
            loading: false
          })
  
        })

  }


  handleIncreaseQuantity = (product) => {
      // console.log('hey please inc the qty of ', product);
      const { products } = this.state;

      const index = products.indexOf(product);

      // products[index].qty += 1;

      // this.setState({
      //     products: products
      // });

      const docRef = this.db.collection('products').doc( products[index].id ); //we r getting refrence of that particular product

      docRef
        .update({
          qty: products[index].qty + 1
        })
        .then( ()=> {
          console.log('updated successfully')
        })
        .catch( (error) => {
          console.log('Error : ', error)
        })

  }


  handleDecreaseQuantity = (product) => {
      // console.log('hey please dec the qty of ', product);
      const { products } = this.state;

      const index = products.indexOf(product);

      if(products[index].qty === 0 ){
          return;
      }

      // products[index].qty -= 1;

      // this.setState({
      //     products: products
      // });

      const docRef = this.db.collection('products').doc( products[index].id ); //we r getting refrence of that particular product

      docRef
        .update({
          qty: products[index].qty - 1
        })
        .then( ()=> {
          console.log('updated successfully')
        })
        .catch( (error) => {
          console.log('Error : ', error)
        })


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

  addProduct = () => {
    this.db
      .collection('products')
      .add({
        img: '',
        price: 900,
        qty: 1,
        title: 'Washing Machine' 
      })
      .then( (docRef) => {
        console.log('product has been added',docRef);
      })
      .catch( (error) => {
        console.log('Error : ', error);
      })
  }

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar 
          count = {this.getCartCount() }
        />
        {/* <button onClick={this.addProduct} style={{padding:20, fontSize:20 }}>Add a product</button> */}
        <div className="outer-container">
        <Cart 
          products = {products}
          onIncreaseQuantity= { this.handleIncreaseQuantity }
          onDecreaseQuantity= { this.handleDecreaseQuantity }
          onDeleteProduct= { this.handleDeleteProduct }
        />
        { loading &&  <h1>Loading product...</h1>} 
        <div  className="glass-effect-total" >TOTAL: { this.getCartTotal() } </div>
      </div>
      </div>
    );
  }

}


export default App;
