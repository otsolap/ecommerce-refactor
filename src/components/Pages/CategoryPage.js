import React, { Component } from 'react'
import Categories from '../Layot/Categories'
import ProductList from '../Layot/ProductList'


export default class CategoryPage extends Component {
    render() {
        return (
            <div>
                <Categories />
                <ProductList />
            </div>
        )
    }
}
