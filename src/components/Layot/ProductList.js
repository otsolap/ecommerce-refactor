// Kaikki tuotteet.
import React, { Component } from 'react'
import ProductSummary from './ProductSummary';

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <div className="all-products section">
                    <ProductSummary />
                </div>
            </div>
        )
    }
}
