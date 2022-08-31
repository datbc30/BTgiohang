import React, { Component } from 'react'
import FromList from './FromList'
import TableProduct from './TableProduct'

export default class ProductManement extends Component {

    state = {
        arrProduct : [
            {id:1,name:'peoduct1',price:'1000',desrepstion:'desc',img:'https://picsum.photos/200/200'},
            {id:2,name:'peoduct2',price:'2000',desrepstion:'desc',img:'https://picsum.photos/200/200'},
        ]
    }

    // muốn thay đổi state nào thì viết hàm setSTATE tại vị trí đó 
    creatProduct = (newProduct) => {
        // console.log('newProduct',newProduct);
        let arrProductUpdate = this.state.arrProduct;
        arrProductUpdate.push(newProduct)
        this.setState({
            arrProduct:arrProductUpdate
        })
    }

  render() {
    return (
      <div className='container'>
          <h3>ProductManement</h3>
          <FromList creatProduct={this.creatProduct}/>
          <TableProduct arrProduct={this.state.arrProduct}/>
      </div>
    )
  }
}
