import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Page404 extends Component {
  render() {
    return (
      <div className='container'>
          <h3>404</h3>
          Đề nghị bạn trở về <NavLink to={'/home'}>aa</NavLink> Trang chủ
      </div>
    )
  }
}
