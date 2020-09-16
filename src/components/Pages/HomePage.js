import React, { Component } from 'react'
import Hero from '../Layot/Hero'
import Carousel from '../Layot/Carousel'
import Slideshow from '../Layot/Slideshow'
import BlogCard from '../Layot/BlogCard'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Hero />
                <Carousel />
                <Slideshow />
                <BlogCard  />
            </div>
        )
    }
}
