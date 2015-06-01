import React from 'react';

export default class NewItemForm extends React.Component {
  render() {
    return (
      <form className="form-inline new-item-form row" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label htmlFor="item-name">Name</label>
          <input type="text" className="form-control" id="item-name" ref="name" />
        </div>
        <div className="form-group">
          <label htmlFor="item-price">Price</label>
          <input type="number" step="any" min="0" className="form-control" id="item-price" ref="price" />
        </div>
        <div className="form-group">
          <label htmlFor="item-stock">Stock</label>
          <input type="number" min="0" className="form-control" id="item-stock" ref="stock" />
        </div>
        <button type="submit" className="btn btn-default">Confirm</button>
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
