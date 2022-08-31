import React, { Component } from "react";
import { connect } from "react-redux";
import HangGhe from "./HangGhe";
import "./linkCss.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGheData from '../../Data/danhSachGhe.json'

class DatVeXemPhim extends Component {

  renderChair = (e) => {
    // let {danhSachGhe} = this.props
    // console.log({danhSachGhe});
    return danhSachGheData.map((prod,index) => {
      return <div key={index}>
        <HangGhe prod={prod} soHangGhe={index}/>
      </div>
    })
  }

  render() {
    
    return (
      <div
        className="bookingMovie"
        style={{
          // position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url(./img/booking/bgmovie.jpg)",
          backgroundSize: "100%",
        }}
      >
        <div
          className=""
          style={{
            // position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-warning display-4">ĐẶT VÉ XEM PHIM</div>
                <div
                className="text-light mt-4"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    fontSize:'22px'
                  }}
                >
                  Màn Hìnhh
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                  
                </div>
                {this.renderChair()}

              </div>
              <div className="col-4">
                <div
                  style={{ fontSize: "24px" }}
                  className="text-warning display-4 mt-2"
                >
                  GHẾ ĐƯỢC CHỌN
                </div>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(DatVeXemPhim);
