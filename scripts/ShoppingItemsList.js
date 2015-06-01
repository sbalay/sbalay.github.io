import React from 'react';
import ShoppingItem from './ShoppingItem';

export default class ShoppingItemsList extends React.Component {
  render() {
    const itemNodes = this.props.items.map(item => {
      return (
          <ShoppingItem onAddToCart={this.props.onItemAddedToCart} item={item} />
        );
    });
    return (
      <div className="shopping-items-list col-xs-8">
        <h2>Available items</h2>
        {itemNodes}
      </div>
    );
  }
}
