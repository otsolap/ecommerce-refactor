// tiivistetty infopakkaus tuotteesta, jonka ProductList renderöi.
import React, { Component } from 'react'

export default class ProductSummary extends Component {
    render() {
        return (
            <div>
                <div className="banner"><a href="#"> <img src="img/banner.jpg" alt="sales 2014" className="img-fluid" /> </a>
                </div>
                <div className="col-lg-9">
                    <div className="box">
                        <h1>Ladies</h1>
                        <p>In our Ladies department we offer wide selection of the best products we have found and carefully selected worldwide.</p>
                    </div>
                    <div className="box info-bar">
                        <div className="row">
                            <div className="col-md-12 col-lg-4 products-showing">Showing <strong>12</strong> of <strong>25</strong> products</div>
                            <div className="col-md-12 col-lg-7 products-number-sort">
                                <form className="form-inline d-block d-lg-flex justify-content-between flex-column flex-md-row">
                                    <div className="products-number"><strong>Show</strong><a href="#" className="btn btn-sm btn-primary">12</a><a href="#" className="btn btn-outline-secondary btn-sm">24</a><a href="#" className="btn btn-outline-secondary btn-sm">All</a><span>products</span></div>
                                    <div className="products-sort-by mt-2 mt-lg-0"><strong>Sort by</strong>
                                        <select name="sort-by" className="form-control">
                                            <option>Price</option>
                                            <option>Name</option>
                                            <option>Sales first</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row products">
                        <div className="col-lg-4 col-md-6">
                            <div className="product">
                                <div className="flip-container">
                                    <div className="flipper">
                                        <div className="front"><a href="detail.html"><img src="img/product1.jpg" alt="" className="img-fluid" /></a></div>
                                        <div className="back"><a href="detail.html"><img src="img/product1_2.jpg" alt="" className="img-fluid" /></a></div>
                                    </div>
                                </div><a href="detail.html" className="invisible"><img src="img/product1.jpg" alt="" className="img-fluid" /></a>
                                <div className="text">
                                    <h3><a href="detail.html">Fur coat with very but very very long name</a></h3>
                                    <p className="price">
                                        <del></del>$143.00
                      </p>
                                    <p className="buttons"><a href="detail.html" className="btn btn-outline-secondary">View detail</a><a href="basket.html" className="btn btn-primary"><i className="fa fa-shopping-cart"></i>Add to cart</a></p>
                                </div>

                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="product">
                                <div className="flip-container">
                                    <div className="flipper">
                                        <div className="front"><a href="detail.html"><img src="img/product2.jpg" alt="" className="img-fluid" /></a></div>
                                        <div className="back"><a href="detail.html"><img src="img/product2_2.jpg" alt="" className="img-fluid" /></a></div>
                                    </div>
                                </div><a href="detail.html" className="invisible"><img src="img/product2.jpg" alt="" className="img-fluid" /></a>
                                <div className="text">
                                    <h3><a href="detail.html">White Blouse Armani</a></h3>
                                    <p className="price">
                                        <del>$280</del>$143.00
                      </p>
                                    <p className="buttons"><a href="detail.html" className="btn btn-outline-secondary">View detail</a><a href="basket.html" className="btn btn-primary"><i className="fa fa-shopping-cart"></i>Add to cart</a></p>
                                </div>

                                <div className="ribbon sale">
                                    <div className="theribbon">SALE</div>
                                    <div className="ribbon-background"></div>
                                </div>

                                <div className="ribbon new">
                                    <div className="theribbon">NEW</div>
                                    <div className="ribbon-background"></div>
                                </div>

                                <div className="ribbon gift">
                                    <div className="theribbon">GIFT</div>
                                    <div className="ribbon-background"></div>
                                </div>

                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="product">
                                <div className="flip-container">
                                    <div className="flipper">
                                        <div className="front"><a href="detail.html"><img src="img/product3.jpg" alt="" className="img-fluid" /></a></div>
                                        <div className="back"><a href="detail.html"><img src="img/product3_2.jpg" alt="" className="img-fluid" /></a></div>
                                    </div>
                                </div><a href="detail.html" className="invisible"><img src="img/product3.jpg" alt="" className="img-fluid" /></a>
                                <div className="text">
                                    <h3><a href="detail.html">Black Blouse Versace</a></h3>
                                    <p className="price">
                                        <del></del>$143.00
                      </p>
                                    <p className="buttons"><a href="detail.html" className="btn btn-outline-secondary">View detail</a><a href="basket.html" className="btn btn-primary"><i className="fa fa-shopping-cart"></i>Add to cart</a></p>
                                </div>

                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="product">
                                <div className="flip-container">
                                    <div className="flipper">
                                        <div className="front"><a href="detail.html"><img src="img/product3.jpg" alt="" className="img-fluid" /></a></div>
                                        <div className="back"><a href="detail.html"><img src="img/product3_2.jpg" alt="" className="img-fluid" /></a></div>
                                    </div>
                                </div><a href="detail.html" className="invisible"><img src="img/product3.jpg" alt="" className="img-fluid" /></a>
                                <div className="text">
                                    <h3><a href="detail.html">Black Blouse Versace</a></h3>
                                    <p className="price">
                                        <del></del>$143.00
                      </p>
                                    <p className="buttons"><a href="detail.html" className="btn btn-outline-secondary">View detail</a><a href="basket.html" className="btn btn-primary"><i className="fa fa-shopping-cart"></i>Add to cart</a></p>
                                </div>

                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="product">
                                <div className="flip-container">
                                    <div className="flipper">
                                        <div className="front"><a href="detail.html"><img src="img/product2.jpg" alt="" className="img-fluid" /></a></div>
                                        <div className="back"><a href="detail.html"><img src="img/product2_2.jpg" alt="" className="img-fluid" /></a></div>
                                    </div>
                                </div><a href="detail.html" className="invisible"><img src="img/product2.jpg" alt="" className="img-fluid" /></a>
                                <div className="text">
                                    <h3><a href="detail.html">White Blouse Versace</a></h3>
                                    <p className="price">
                                        <del></del>$143.00
                      </p>
                                    <p className="buttons"><a href="detail.html" className="btn btn-outline-secondary">View detail</a><a href="basket.html" className="btn btn-primary"><i className="fa fa-shopping-cart"></i>Add to cart</a></p>
                                </div>

                                <div className="ribbon new">
                                    <div className="theribbon">NEW</div>
                                    <div className="ribbon-background"></div>
                                </div>

                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="product">
                                <div className="flip-container">
                                    <div className="flipper">
                                        <div className="front"><a href="detail.html"><img src="img/product1.jpg" alt="" className="img-fluid" /></a></div>
                                        <div className="back"><a href="detail.html"><img src="img/product1_2.jpg" alt="" className="img-fluid" /></a></div>
                                    </div>
                                </div><a href="detail.html" className="invisible"><img src="img/product1.jpg" alt="" className="img-fluid" /></a>
                                <div className="text">
                                    <h3><a href="detail.html">Fur coat</a></h3>
                                    <p className="price">
                                        <del></del>$143.00
                      </p>
                                    <p className="buttons"><a href="detail.html" className="btn btn-outline-secondary">View detail</a><a href="basket.html" className="btn btn-primary"><i className="fa fa-shopping-cart"></i>Add to cart</a></p>
                                </div>

                                <div className="ribbon gift">
                                    <div className="theribbon">GIFT</div>
                                    <div className="ribbon-background"></div>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="pages">
                        <p className="loadMore"><a href="#" className="btn btn-primary btn-lg"><i className="fa fa-chevron-down"></i> Load more</a></p>
                        <nav aria-label="Page navigation example" className="d-flex justify-content-center">
                            <ul className="pagination">
                                <li className="page-item"><a href="#" aria-label="Previous" className="page-link"><span aria-hidden="true">«</span><span className="sr-only">Previous</span></a></li>
                                <li className="page-item active"><a href="#" className="page-link">1</a></li>
                                <li className="page-item"><a href="#" className="page-link">2</a></li>
                                <li className="page-item"><a href="#" className="page-link">3</a></li>
                                <li className="page-item"><a href="#" className="page-link">4</a></li>
                                <li className="page-item"><a href="#" className="page-link">5</a></li>
                                <li className="page-item"><a href="#" aria-label="Next" className="page-link"><span aria-hidden="true">»</span><span className="sr-only">Next</span></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div >
        )
    }
}
