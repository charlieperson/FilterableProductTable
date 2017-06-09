import React from 'react';
import ReactDOM from 'react-dom';


var products = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <p>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </p>
    </form>
  )
}

function ProductCategoryRow(props) {
    return (
      <tr><th>{props.category}</th></tr>
    )
}

function ProductRow(props) {
    var name = props.product.stocked ? props.product.name :
                                       <span style={{color: "red"}}>{props.product.name}</span>
    return (
      <tr>
        <td>{name}</td>
        <td>{props.product.price}</td>
      </tr>
    )
}

class ProductTable extends React.Component {
  render() {

    var currentCategory = null
    var rows = []
    var productArray = products.forEach((product) => {
      if(!product.stocked && this.props.inStockOnly || this.props.filterText.indexOf(product.name) === -1) { return }

      if(product.category !== currentCategory) {
        currentCategory = product.category
        rows.push(<ProductCategoryRow key={product.category} category={product.category} />)
      }
      rows.push(<ProductRow product={product} key={product.name} />)
    })
    return (
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {filterText: 'Basketball', inStockOnly: false}
  }

  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
        <ProductTable filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <FilterableProductTable />,
  document.getElementById('root')
);
