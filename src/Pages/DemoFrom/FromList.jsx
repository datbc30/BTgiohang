import React, { Component } from "react";

export default class FromList extends Component {
  state = {
    productInfo: {
      id: "",
      name: "",
      price: "",
      img: "",
      productType: "mobile",
      desrepstion: "",
    },
    error: {
      id: "",
      name: "",
      price: "",
      img: "",
      productType: "mobile",
      desrepstion: "",
    },
  };

  handleChange = (e) => {
    let { id, value } = e.target;
    let dataType = e.target.getAttribute("data-type");
    // sử lý cho productInfo
    let newValue = { ...this.state.productInfo };
    newValue[id] = value;
    //sử lý cho errorerror
    let newError = { ...this.state.error };
    //check lỗi rỗng
    let errMess = "";
    if (value.trim() === "") {
      errMess = id + " không được bỏ trống !";
    } else {
      //lỗi định dạng
      if (dataType == "number") {
        let regexNumber = /^[0-9\b]+$/;
        if (!regexNumber.test(value)) {
          errMess = id + " phải bằng số !";
        }
      }
    }
    newError[id] = errMess;
    //setStatesetState
    this.setState(
      {
        productInfo: newValue,
        error: newError,
      },
      () => {
        // console.log(this.state);
      }
    );
  };

  handleSummit = (e) => {
    e.preventDefault();
    //check trước khi summit dữ liệu
    let valid = true;
    let { error, productInfo } = this.state;
    //check error ( tất cả phải rỗng)
    for(let key in error){
        if(error[key] !== ''){
            valid = false
            break;
        }
    }
    //check value ( productInfo) tất cả phải khác rỗng
    for(let key in productInfo){
        if(productInfo[key].trim() === ''){
            error[key] = key + ' không được bỏ trông !' 
            valid = false;
            // break;
        }
    }
    if(!valid){
        this.setState({
            error:error
        })
        alert('dữ liệu không hợp lệ')
        return
    }
    // alert('summited');
    this.props.creatProduct(productInfo)
  };

  render() {
    return (
      <form className="card" onSubmit={this.handleSummit}>
        <div
          className="card-header bg-dark text-warning"
          style={{ fontSize: 20 }}
        >
          Product Info
        </div>
        <div className="card-body row">
          <div className="col-6">
            <div className="form-group">
              <p>ID</p>
              <input
                type="text"
                className="form-control"
                name="id"
                id="id"
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.error.id}</p>
            </div>
            <div className="form-group">
              <p>NAME</p>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.error.name}</p>
            </div>
            <div className="form-group">
              <p>PRICE</p>
              <input
                data-type="number"
                type="text"
                className="form-control"
                name="price"
                id="price"
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.error.price}</p>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <p>IMG Link</p>
              <input
                type="text"
                className="form-control"
                name="img"
                id="img"
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.error.img}</p>
            </div>
            <div className="form-group">
              <p>Product Type</p>
              <select
                className="form-control"
                name="productType"
                id="productType"
              >
                <option value="">mobile</option>
                <option value="">tableb</option>
                <option value="">laptop</option>
              </select>
            </div>
            <div className="form-group">
              <p>derepstion</p>
              <textarea
                className="form-control"
                name="desrepstion"
                id="desrepstion"
                rows="3"
                onChange={this.handleChange}
              ></textarea>
              <p className="text-danger">{this.state.error.desrepstion}</p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-danger m-2">create</button>
          <button className="btn btn-success">update</button>
        </div>
      </form>
    );
  }
}
