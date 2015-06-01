import React from 'react';
import CartItem from './CartItem';

export default class ShoppingCart extends React.Component {
  render() {
    const itemNodes = this.props.items.map(item => {
      return (
          <CartItem onRemove={this.props.onItemRemovedFromCart} item={item} />
        );
    });
    return (
      <div className="shopping-cart-container col-xs-4">
        {itemNodes}
      </div>
    );
  }
}
