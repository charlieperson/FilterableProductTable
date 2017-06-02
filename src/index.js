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
    <input type="text"></input>
  )
}

function ProductCategoryRow(props) {
    return (
      <tr>
        <td>
          <strong>{props.category}</strong>
        </td>
      </tr>
    )
}

function ProductRow(props) {
    return (
      <tr>
        <td>{props.name}</td>
        <td>{props.price}</td>
      </tr>
    )
}

function ProductTable() {
  var currentCategory = null
  var productArray = products.map((product) => {
    var temp = []
    if(product.category !== currentCategory) {
      currentCategory = product.category
      temp.push(<ProductCategoryRow category={product.category} />)
    }
    temp.push(<ProductRow name={product.name} price={product.price} />)
    return temp
  })
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      <tbody>
        {[].concat.apply([], productArray)}
      </tbody>
    </table>
  )
}

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable />
      </div>
    );
  }
}



// ========================================

ReactDOM.render(
  <FilterableProductTable />,
  document.getElementById('root')
);
