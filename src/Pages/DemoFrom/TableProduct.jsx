import React, { Component } from "react";

export default class TableProduct extends Component {
  render() {
    let { arrProduct } = this.props;
    return (
      <table className="table">
        <thead className="bg-dark text-white">
          <tr>
            <td>id</td>
            <td>name</td>
            <td>price</td>
            <td>img</td>
            <td>product type</td>
            <td>derepstion</td>
          </tr>
        </thead>
        <tbody>
            {arrProduct.map((prod, index) => {
              return (
                <tr key={index}>
                  <td>{prod.id}</td>
                  <td>{prod.name}</td>
                  <td>{prod.price}</td>
                  <td>
                    <img src={prod.img} alt="..." width={50} />
                  </td>
                  <td></td>
                  <td>{prod.desrepstion}</td>
                  <td>
                    <button className="btn btn-danger m-2">xoa</button>
                    <button className="btn btn-primary">edit</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }
}
