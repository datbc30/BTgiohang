import React, { Component } from "react";
import { connect } from "react-redux";

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.prod.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disabled = false;
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }

      //xét trạng  thái  ghế  đang  đặtt
      let cssGheDangDat = '';
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat=>gheDangDat.soGhe === ghe.soGhe)
      if(indexGheDangDat !== -1) {
        cssGheDangDat = 'gheDangChon'
      }

      return (
        <button
          onClick={() => {
            const action = {
              type:'DAT_GHE',
              payload: {
                gheSPclick:ghe
              }
            }
            this.props.dispatch(action)
            console.log(action);
          }}
          disabled={disabled}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderSoHang = () => {
    return this.props.prod.danhSachGhe.map((hang,index) => {
      return <button className="rowNumber">
        {hang.soGhe}
      </button>
    })
  }

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return <div className="ms-4">
          {this.props.prod.hang} {this.renderSoHang()}
      </div>
    } else {
      return (
        <div>
          {this.props.prod.hang} {this.renderGhe()}
        </div>
      );
    }
  };

  render() {
    return (
      <div className="text-light text-start mt-2 ms-5">
        {this.renderHangGhe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  danhSachGheDangDat: state.danhSachGheDangDat.danhSachGheDangDat
});

export default connect(mapStateToProps)(HangGhe);
