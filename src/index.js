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
      <div>
        {props.category}
      </div>
    )
}

function ProductTable() {
  var currentCategory = null
  var productArray = products.map((product) => {
    console.log(product.category)
    return <ProductCategoryRow category={product.category}/>
  })
  return <div>{productArray}</div>
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
