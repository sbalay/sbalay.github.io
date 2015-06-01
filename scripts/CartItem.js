import React from 'react';

export default class CartItem extends React.Component {
  render() {
    return (
      <div className="cartItem">
        <span>{this.props.item.name}</span>
        <span>{this.props.item.price}</span>
        <button onClick={this.handleClick.bind(this)}>Remove from cart</button>
      </div>
    );
  }

  handleClick() {
    this.props.onRemove(this.props.item);
  }
}
