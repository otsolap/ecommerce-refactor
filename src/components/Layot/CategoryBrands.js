import React, { Component } from 'react'

export default class CategoryBrands extends Component {
    render() {
        return (
            <div>

                <div className="card sidebar-menu mb-4">
                    <div className="card-header">
                        <h3 className="h4 card-title">Brands <a href="#" className="btn btn-sm btn-danger pull-right"><i className="fa fa-times-circle"></i> Clear</a></h3>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" /> Armani  (10)
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" />  Versace  (12)
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" />  Carlo Bruni  (15)
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" />  Jack Honey  (14)
                                    </label>
                                </div>
                            </div>
                            <button className="btn btn-default btn-sm btn-primary"><i className="fa fa-pencil"></i> Apply</button>
                        </form>
                    </div >
                </div >
            </div >
        )
    }
}
