import React from 'react';
import ShoppingCart from './ShoppingCart';
import NewItemForm from './NewItemForm';
import ShoppingItemsList from './ShoppingItemsList';
require('babel/polyfill'); // to make findIndex work.

export default class App extends React.Component {

  render() {
    return (
      <div className="shopping-cart-app container">
        <NewItemForm onNewItem={this.addNewItem.bind(this)} />
        <div className="row">
          <ShoppingItemsList items={this.state.shoppingItems}
                             onItemAddedToCart={this.addItemToCart.bind(this)} />
          <ShoppingCart items={this.state.cartItems}
                        onItemRemovedFromCart={this.removeItemFromCart.bind(this)} />
        </div>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      shoppingItems: [],
      cartItems: []
    };
  }

  removeItemFromCart(item) {
    this._removeFromShoppingCart(item);
    this._renewStock(item, 1);
  }

  addItemToCart(item) {
    this._addToShoppingCart(item);
    this._renewStock(item, -1);
  }

  addNewItem(item) {
    this.setState({shoppingItems: this.state.shoppingItems.concat(item)});
  }

  _addToShoppingCart(item) {
    this.setState({cartItems: this.state.cartItems.concat(item)});
  }

  _removeFromShoppingCart(item) {
    let cartItemIndex = this.state.cartItems.findIndex(
      cartItem => cartItem.name === item.name);
    if (cartItemIndex !== -1) {
      let cartItemsList = this.state.cartItems.slice();
      cartItemsList.splice(cartItemIndex, 1);
      this.setState({ cartItems: cartItemsList });
    } else {
      console.error('No item with name ${item.name} in the shopping cart');
    }
  }

  _renewStock(item, itemCount) {
    let shopItemIndex = this.state.shoppingItems.findIndex(
      shoppingItem => shoppingItem.name === item.name);
    if (shopItemIndex !== -1) {
      let shoppingItemsList = this.state.shoppingItems.slice();
      shoppingItemsList[shopItemIndex].stock += itemCount;
      this.setState({ shoppingItems: shoppingItemsList });
    } else {
      console.error('No item with name ${item.name} in this shopping');
    }
  }
}
