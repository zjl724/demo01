import React, { Component } from 'react';
import './index.css'

class PageNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
            pagenum: this.props.current
        }
    } 

    //下一页
    setNext =() => {
        if (this.state.pagenum < this.props.totalPage) {
            this.setState({
                num: this.state.num + this.props.pageSize,
                pagenum: this.state.pagenum + 1
            }, function () {
                console.log(this.state)
                this.props.pageNext(this.state.num)
            })
        }
    }

    //上一页
    setUp = () => {
        if (this.state.pagenum > 1) {
            this.setState({
                num: this.state.num - this.props.pageSize,
                pagenum: this.state.pagenum - 1
            }, function () {
                console.log(this.state)
                this.props.pageNext(this.state.num)
            })
        }
    }

    render() {
        return (
            <div className="content">
                <span onClick={this.setUp} className="button">上一页</span>
                <span>{this.state.pagenum}页/ {this.props.totalPage}页</span>
                <span onClick={this.setNext} className="button">下一页</span>
            </div>
        );
    }
}


export default PageNumber;