import React from "react";

class CartItem extends React.Component {

    render () {
        console.log('this.props', this.props);
        const  {price, title, qty} = this.props.product  ;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price}</div>
                    <div style={{ color: '#777' }}>Qty: {qty}</div>

                    <div className="cart-item-actions" >
                        {/* Buttons */}
                        <img
                            alt="increase"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/748/748113.png"

                            onClick = { () => this.props.onIncreaseQuantity(this.props.product) }
                        />
                        <img
                            alt="decrease"
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/43/43625.png"
                            onClick = { () => this.props.onDecreaseQuantity(this.props.product) }
                        />
                        <img
                            alt="delete"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                            
                        />
                    </div>

                </div>
            </div>
        );
    }
}   


const styles = {
    image: {
      height: 110,
      width: 110,
      borderRadius: 4,
      background: '#ccc',
    }
  }



export default CartItem;