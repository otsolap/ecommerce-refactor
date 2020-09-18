import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
export default class NavBar extends Component {
    render() {
        return (
            <div>
                <NavLink to="/">Home </NavLink>
                <NavLink to="/category">Categories </NavLink>
                <NavLink to="/basket">Your Basket </NavLink>
                <NavLink to="/checkout">Checkout </NavLink>
            </div>
        )
    }
}
