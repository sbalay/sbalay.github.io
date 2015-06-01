import React from 'react';

export default class CartItem extends React.Component {
  render() {
    return (
      <div className="cart-item">
        <h2>{this.props.item.name}</h2>
        <h4>Price: {this.props.item.price}</h4>
        <button className="btn btn-default" onClick={this.handleClick.bind(this)}>Remove from cart</button>
      </div>
    );
  }

  handleClick() {
    this.props.onRemove(this.props.item);
  }
}
