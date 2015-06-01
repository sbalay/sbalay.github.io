import React from 'react';

export default class NewItemForm extends React.Component {
  render() {
    return (
      <form className="item-form" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Item name" ref="name" />
        <input type="number" step="any" min="0" placeholder="Item price" ref="price" />
        <input type="number" placeholder="Item stock" ref="stock" />
        <input type="submit" value="Confirm" />
      </form>
    );
  }

  handleSubmit(ev) {
    ev.preventDefault();
    let nameInput = React.findDOMNode(this.refs.name);
    let priceInput = React.findDOMNode(this.refs.price);
    let stockInput = React.findDOMNode(this.refs.stock);
    this.props.onNewItem({ name: nameInput.value,
                           price: priceInput.value,
                           stock: parseInt(stockInput.value) });
    nameInput.value = priceInput.value = stockInput.value = '';
  }

}
