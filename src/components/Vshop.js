import React, { Component } from "react";
import './style.css';
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux"; 
import {buyLaptop, buyMobile, fetchUsers} from "../redux/actions";

function VShop(props) {
    let users = useSelector(state=>state.users.users);

   
        return (
            <div>
                <h1 className="title">Welcome to VShop</h1>
                <div className="item">
                    <p> Dell</p> {console.log(props)}
                    <p> Available : {props.numOfLaptops} </p>
                    <button onClick={props.buyLaptop}>BUY</button>
                </div>

                <div className="item">
                    <p> Iphone</p> {console.log(props)}
                    <p> Available : {props.numOfMobiles} </p>
                    <button onClick={props.buyMobile}>BUY</button>
                </div>

                <div className="item">
                    <p> Getusers data </p>
                    <p> Count: {users.length} </p>
                    <button onClick= {props.fetchUsers}>Call API</button>
                </div>
            </div>
        )
    
}
const mapStateToProps = (state)=> {
    console.log(state);
    return {
        numOfLaptops : state.laptop.numOfLaptops,
        numOfMobiles : state.mobile.numOfMobiles,
       // users: state.users.users
    }
}

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators(
            {
                buyLaptop,
                buyMobile,
                fetchUsers
            }, dispatch
            
        )
}
export default connect(mapStateToProps,mapDispatchToProps)(VShop) ; //if we are not using mapStateToProps replace it with null