import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Layot/Navbar'
import Header from './components/Layot/Header';
import HomePage from './components/Pages/HomePage';
import BasketPage from './components/Pages/BasketPage';
import CategoryPage from './components/Pages/CategoryPage';
import CheckoutPage from './components/Pages/CheckoutPage';
import Footer from './components/Layot/Footer';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/category" component={CategoryPage} />
            <Route path="/basket" component={BasketPage} />
            <Route path="/checkout" component={CheckoutPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;