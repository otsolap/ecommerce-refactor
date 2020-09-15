import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div id="footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <h4 className="mb-3">Pages</h4>
                  <ul className="list-unstyled">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Terms and conditions</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact us</a></li>
                  </ul>
               
                  <h4 className="mb-3">User section</h4>
                  <ul className="list-unstyled">
                    <li><a href="#" data-toggle="modal" data-target="#login-modal">Login</a></li>
                    <li><a href="#">Regiter</a></li>
                  </ul>
                </div>
              
                <div className="col-lg-3 col-md-6">
                  <h4 className="mb-3">Top categories</h4>
                  <h5>Men</h5>
                  <ul className="list-unstyled">
                    <li><a href="/Categories">T-shirts</a></li>
                    <li><a href="/Categories">Shirts</a></li>
                    <li><a href="/Categories">Accessories</a></li>
                  </ul>
                  <h5>Ladies</h5>
                  <ul className="list-unstyled">
                    <li><a href="/Categories">T-shirts</a></li>
                    <li><a href="/Categories">Skirts</a></li>
                    <li><a href="/Categories">Pants</a></li>
                    <li><a href="/Categories">Accessories</a></li>
                  </ul>
                </div>
              
                <div className="col-lg-3 col-md-6">
                  <h4 className="mb-3">Where to find us</h4>
                  <p><strong>Obaju Ltd.</strong> 13/25 New Avenue New Heaven 45Y 73J England <strong>Great Britain</strong></p><a href="contact.html">Go to contact page</a>
            
                </div>
                
                <div className="col-lg-3 col-md-6">
                  <h4 className="mb-3">Get the news</h4>
                  <p className="text-muted">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                  <form>
                    <div className="input-group">
                      <input type="text" className="form-control" /><span className="input-group-append">
                        <button type="button" className="btn btn-outline-secondary">Subscribe!</button>
                        </span>
                    </div>
                  </form>
            
                  <h4 className="mb-3">Stay in touch</h4>
                  <p className="social"><a href="#" className="facebook external"><i className="fa fa-facebook"></i></a><a href="#" className="twitter external"><i className="fa fa-twitter"></i></a><a href="#" className="instagram external"><i className="fa fa-instagram"></i></a><a href="#" className="gplus external"><i className="fa fa-google-plus"></i></a><a href="#" className="email external"><i className="fa fa-envelope"></i></a></p>
                </div>
              </div>
            </div>
          </div>
          
        )
    }
}