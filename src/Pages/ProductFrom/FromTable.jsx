import React, { Component } from "react";
import { connect } from "react-redux";

class FromTable extends Component {
  state = {
    error: {
      id: "",
      name: "",
      email: "",
      phoneNumber: "",
    },
    sinhVienEdit: {
      id: "",
      name: "",
      email: "",
      phoneNumber: "",
    },
   
  };

  handleChange = (e) => {
    const action = {
      type: "HANDLE_CHANGE",
      id: e.target.id,
      value: e.target.value,
    };
    this.props.dispatch(action);

    let tagInput = e.target;
    let { id, value } = tagInput;
    let errMess = "";
    if (value.trim() === "") {
      errMess = id + " Không Được Bỏ Trống !";
    }
    let error = { ...this.state.error, [id]: errMess };

    this.setState({
      error: error,
    });
  };

  loadEditSv(sv) {
    console.log({ sv });
    this.state.sinhVienEdit = {
      id: sv.id,
      name: sv.name,
      email: sv.email,
      phoneNumber: sv.phoneNumber,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const action = {
      type: "HANDLE_SUBMIT",
      sinhVien: { ...this.props.qlsvReducers.sinhVien },
    };
    this.props.dispatch(action);
  };

  sreachSinhVien = (e) => {
    let {value} = e.target
    let newArrSinhVien = [...this.props.qlsvReducers.sinhVienEdit];
    const timSinhVien = [...this.props.qlsvReducers.sinhVienEdit];
    let resultSreach = newArrSinhVien.filter((sv) => {
      return sv.name.toLowerCase().incLudes(value)
    })
    if(value === "") {
      this.setState({
        arrSinhVien:timSinhVien
      })
    }else {
      this.setState({
        arrSinhVien:resultSreach
      })
    }
  }


  render() {
    let { sinhVien } = this.props.qlsvReducers;
    console.log(this.props.qlsvReducers);
    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <div className="card-header bg-dark text-warning">
          Thông Tin Sinh Viên
        </div>
        <div className="card-body row">
          <div className="col-6">
            <div className="form-group">
              <p>Mã Sinh Viên</p>
              <input
                type="text"
                className="form-control"
                name="id"
                id="id"
                value={sinhVien.id}
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.error.id}</p>
            </div>
            <div className="form-group">
              <p>Số Điện Thoại</p>
              <input
                data-type="number"
                type="text"
                className="form-control"
                name="phoneNumber"
                id="phoneNumber"
                value={sinhVien.phoneNumber}
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.error.phoneNumber}</p>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <p>Họ Tên</p>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                value={sinhVien.name}
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.error.name}</p>
            </div>
            <div className="form-group">
              <p>Email</p>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                value={sinhVien.email}
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.error.email}</p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-success m-2">
            Thêm Sinh Viên
          </button>
          <button className="btn btn-primary">Update</button>
          <div className="d-flex my-2 my-lg-0">
            <input className="form-control ms-2 me-sm-2" type="text" placeholder="Search"/>
            <button className="btn btn-success my-2 my-sm-0" onClick={this.sreachSinhVien}>Search</button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  qlsvReducers: state.qlsvReducers
});

export default connect(mapStateToProps)(FromTable);
