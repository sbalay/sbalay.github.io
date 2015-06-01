import React from 'react';

export default class ShoppingItem extends React.Component {
  render() {
    return (
      <div className="shopping-item">
        <span>{this.props.item.name}</span>
        <span>{this.props.item.price}</span>
        <span>{this.props.item.stock}</span>
        <button onClick={this.handleClick.bind(this)}>Add to cart</button>
      </div>
    );
  }

  handleClick() {
    this.props.onAddToCart(this.props.item);
  }


}
