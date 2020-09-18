import React, { Component } from 'react'
import CategoryBrands from './CategoryBrands'
import CategoryColors from './CategoryColors'
import CategoryProducts from './CategoryProducts'

export default class Categories extends Component {
    render() {
        return (
            <div>
                <CategoryProducts />
                <CategoryBrands />
                <CategoryColors />
            </div>
        )
    }
}
