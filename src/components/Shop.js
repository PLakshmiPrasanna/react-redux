import React, { Component } from "react";
import './style.css';
import { connect } from "react-redux";
import {buyLaptop, buyMobile, fetchUsers} from "../redux/actions";

export class Shop extends Component {
    // state= {
    //     numOfLaptops: 100
    // }
    // buyLaptop = ()=>{
    //     this.setState({numOfLaptops: this.state.numOfLaptops-1});
    // }

    render(){
        return (
            <div>
                <h1 className="title">Welcome to VShop</h1>
                <div className="item">
                    <p> Dell</p> {console.log(this.props)}
                    <p> Available : {this.props.numOfLaptops} </p>
                    <button onClick={this.props.buyLaptop}>BUY</button>
                </div>

                <div className="item">
                    <p> Iphone</p> {console.log(this.props)}
                    <p> Available : {this.props.numOfMobiles} </p>
                    <button onClick={this.props.buyMobile}>BUY</button>
                </div>

                <div className="item">
                    <p> Getusers data </p>
                    <p> Count: {this.props.users.length} </p>
                    <button onClick= {this.props.fetchUsers}>Call API</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=> {
    console.log(state);
    return {
        numOfLaptops : state.laptop.numOfLaptops,
        numOfMobiles : state.mobile.numOfMobiles,
        users: state.users.users
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        buyLaptop: ()=> dispatch(buyLaptop()),
        buyMobile: ()=> dispatch(buyMobile()),
        fetchUsers: ()=> dispatch(fetchUsers())

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Shop) ;