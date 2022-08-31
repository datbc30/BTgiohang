import React, { Component } from "react";
import { connect } from "react-redux";
import FromListProduct from "./FromListProduct";
import FromTable from "./FromTable";

class ProductFrom extends Component {

  

  render() {
    return (
      <div className="container">
        <h1>ProductFrom</h1>
        <FromTable />
        <FromListProduct />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(ProductFrom);
