import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"> </button>{" "}
          <span className="text-light" style={{ fontSize: "20px" }}>
            Ghế Đã Đặt
          </span>
          <button className="gheDangChon"> </button>{" "}
          <span className="text-light" style={{ fontSize: "20px" }}>
            Ghế Đang Đặt
          </span>
          <button className="ghe"> </button>{" "}
          <span className="text-light" style={{ fontSize: "20px" }}>
            Ghế Chưa Chọn
          </span>
        </div>
        <div className="mt-5">
          <table className="table" border={2}>
            <thead>
              <tr className="text-light" style={{fontSize:'25px'}}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Huỷ</th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.danhSachGheDangDat.map((gheDangDat,index) => {
                return <tr key={index}>
                  <td>{gheDangDat.soGhe}</td>
                  <td>{gheDangDat.gia}</td>
                  <td><button className="btn btn-danger text-warning" onClick={() => {
                    const action = {
                      type:'HUY_GHE',
                      huyGheClick:gheDangDat.soGhe
                    }
                    this.props.dispatch(action)
                  }}> Huỷ </button></td>
                </tr>
              })}
              {/* <tr>
                <td>số ghế</td>
                <td>giá</td>
                <td></td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  danhSachGheDangDat: state.danhSachGheDangDat.danhSachGheDangDat
});

export default connect(mapStateToProps)(ThongTinDatGhe);
