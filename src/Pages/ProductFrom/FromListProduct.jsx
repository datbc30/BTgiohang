import React, { Component } from "react";
import { connect } from "react-redux";

class FromListProduct extends Component {
  delSinhVien = (idClick) => {
    let arrSinhVienDel = this.props.qlsvReducers.arrSinhVien;
    console.log({ idClick });
    let indexDel = arrSinhVienDel.findIndex((p) => p.id == idClick);
    console.log({ indexDel });
    if (indexDel !== -1) {
      //Tìm thấy indexDel => xoá
      arrSinhVienDel.splice(indexDel, 1);
    }
    this.setState({
      arrSinhVien: arrSinhVienDel,
    });
  };

  editSinhVien = (sv) => {
    console.log(sv);
    this.setState({
      arrSinhVien: sv,
    });
  }


  render() {
    let { arrSinhVien, sinhVienEdit } = this.props.qlsvReducers;
    return (
      <table className="table">
        <thead className="bg-dark text-white">
          <tr>
            <td>Mã Số</td>
            <td>Số Điện Thoại</td>
            <td>Họ Tên</td>
            <td> Email</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {arrSinhVien.map((sv, index) => {
            return (
              <tr key={index}>
                <td>{sv.id}</td>
                <td>{sv.phoneNumber}</td>
                <td>{sv.name}</td>
                <td>{sv.email}</td>
                <td>
                  <button
                    className="btn btn-danger m-2"
                    onClick={this.delSinhVien.bind(this, sv.id)}
                  >
                    delete
                  </button>
                  <button className="btn btn-primary"
                    onClick={this.editSinhVien.bind(this, sv)}
                  >edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  qlsvReducers: state.qlsvReducers,
});

export default connect(mapStateToProps)(FromListProduct);
