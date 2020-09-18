import React, { Component } from 'react'

export default class CategoryColors extends Component {
    render() {
        return (
            <div>
                <div className="card sidebar-menu mb-4">
                    <div className="card-header">
                        <h3 className="h4 card-title">Colours <a href="#" className="btn btn-sm btn-danger pull-right"><i className="fa fa-times-circle"></i> Clear</a></h3>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" /><span className="colour white"></span> White (14)
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" /><span className="colour blue"></span> Blue (10)
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" /><span className="colour green"></span>  Green (20)
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" /><span className="colour yellow"></span>  Yellow (13)
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" /><span className="colour red"></span>  Red (10)
                                    </label>
                                </div>
                            </div>
                            <button className="btn btn-default btn-sm btn-primary"><i className="fa fa-pencil"></i> Apply</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
