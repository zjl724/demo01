import React, { Component } from 'react';
import { Input } from 'antd';
import './index.css'
import List from './list'
import PageNumber from './page'

const { Search } = Input;

const listData = [
    {
        id: "01",
        name: "水杯",
        price: 256,
    },
    {
        id: "02",
        name: "帽子",
        price: 123,
    },
    {
        id: "03",
        name: "水杯",
        price: 256,
    },
    {
        id: "04",
        name: "篮球",
        price: 123,
    },
    {
        id: "05",
        name: "足球",
        price: 256,
    },
    {
        id: "06",
        name: "乒乓球",
        price: 123,
    },
    {
        id: "07",
        name: "水杯",
        price: 256,
    },
    {
        id: "08",
        name: "苹果",
        price: 123,
    },
    {
        id: "09",
        name: "水杯",
        price: 256,
    },
    {
        id: "10",
        name: "帽子",
        price: 78,
    },
    {
        id: "11",
        name: "香蕉",
        price: 56,
    },
    {
        id: "12",
        name: "橘子",
        price: 23,
    }
]

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            totalData: listData,
            current: 1, //当前页码
            pageSize: 10, //每页显示的条数
            goValue: 0,  //要去的条数index
            totalPage: 0,//总页数
        };
    }

    componentWillMount() {
        //设置总页数
        this.setState({
            totalPage: Math.ceil(this.state.totalData.length / this.state.pageSize),
        })
        this.pageNext(this.state.goValue)

    }

    //设置内容
    setPage = (num) => {
        this.setState({
            list: this.state.totalData.slice(num, num + this.state.pageSize)
        })
    }

    pageNext =(num) => {
        this.setPage(num)
    }

    // 搜索
    searchResult = (value) =>{
        this.setState({
            list: this.state.totalData.filter(item=>{
                return item.name.indexOf(value) >= 0
            })},
            () => {
                this.setState({
                    totalPage:Math.ceil(this.state.list.length/10)
                })
            }
        )
    }

    changePriceFn = (data) =>{
        let list = this.state.list.slice(0)
        list.forEach(item =>{
            if(item.id == data.id){
                item.price = data.value
            }
        })
        this.setState({
            list
        })
    }

    render() {
        return (
            <div className="content">
                <Search placeholder="请输入要查询的名字" onSearch={this.searchResult} enterButton />
                <div className="main">
                    {this.state.list.map((cont) =>(
                        <List key={cont.id} {...cont}  changePrice = {this.changePriceFn}/>
                    ))}
                    <PageNumber {...this.state} pageNext={this.pageNext} />
                </div>
            </div>
        )
    }
}

export default Body;
