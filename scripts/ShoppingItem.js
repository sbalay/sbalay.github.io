import React from 'react';

export default class ShoppingItem extends React.Component {
  render() {
    return (
      <div className="shopping-item">
        <h2>{this.props.item.name}</h2>
        <h4>Price: {this.props.item.price}</h4>
        <h4>Stock: {this.props.item.stock}</h4>
        <button className="btn btn-default" onClick={this.handleClick.bind(this)}>Add to cart</button>
      </div>
    );
  }

  handleClick() {
    this.props.onAddToCart(this.props.item);
  }


}
