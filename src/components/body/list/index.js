import React, { Component } from 'react';
import { Modal, Button,Input } from 'antd';
import './index.css'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            value:this.props.price
        };
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
    };
    
    handleOk(id){
        let obj = {
            id: id,
            value: this.state.value
        }
        this.props.changePrice(obj)
        this.setState({
          visible: false,
        });

    };
    
    handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
    };

    inputChange = e => this.setState({value:e.target.value})

    render() {
        const { id, name, price } = this.props
        return (
           <div>
                <div className="list-content" key={id}>
                    <span> {id} </span>
                    <span> {name} </span>
                    <span> ￥{price} </span>
                    <span className="edit" onClick={this.showModal}> 编辑 </span>
                </div>
                <Modal title="修改商品的价格" visible={this.state.visible} onOk={()=>this.handleOk(id)} onCancel={this.handleCancel}>
                    <Input value={this.state.value} onChange={this.inputChange}/>
                </Modal>
           </div>
        );
    }
}

export default List;