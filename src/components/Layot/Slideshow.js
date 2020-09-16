import React, { Component } from 'react'

export default class Slideshow extends Component {
    render() {
        return (
            <div>
                   <div className="container">
          <div className="col-md-12">
            <div className="box slideshow">
              <h3>Get Inspired</h3>
              <p className="lead">Get the inspiration from our world className designers</p>
              <div id="get-inspired" className="owl-carousel owl-theme">
                <div className="item"><a href="#"><img src="img/getinspired1.jpg" alt="Get inspired" className="img-fluid"/></a></div>
                <div className="item"><a href="#"><img src="img/getinspired2.jpg" alt="Get inspired" className="img-fluid"/></a></div>
                <div className="item"><a href="#"><img src="img/getinspired3.jpg" alt="Get inspired" className="img-fluid"/></a></div>
              </div>
            </div>
          </div>
        </div>
            </div>
        )
    }
}
