import React, {Component} from 'react';
import ProductList from './ProductList ';
import MyProvider from './MyProvider';

export default class ContextMain extends Component {
    state = {
        cars: {
            car001: { name: 'Honda', price: 100 },
            car002: { name: 'BMW', price: 150 },
            car003: { name: 'Mercedes', price: 200 }
        }
    };
    incrementCarPrice = this.incrementCarPrice.bind(this);
    decrementCarPrice = this.decrementCarPrice.bind(this);

    incrementCarPrice(selectedID) {
        // a simple method that manipulates the state
        const cars = Object.assign({}, this.state.cars);
        cars[selectedID].price = cars[selectedID].price + 1;
        this.setState({
            cars
        });
    }

    decrementCarPrice(selectedID) {
        // a simple method that manipulates the state
        const cars = Object.assign({}, this.state.cars);
        cars[selectedID].price = cars[selectedID].price - 1;
        this.setState({
            cars
        });
    }

    render() {
        let test = "&spades;"
        return (
            <MyProvider>
              <div className="App">
                
                  <header className="App-header">
                      {/* <img src={logo} className="App-logo" alt="logo" /> */}
                        {/* {window.unescape('test')} */}
                        <div className="hero-img-div"><div><img src="https://storage.unocoin.com/resources/img/web/HomePageImages/hero-sys-inr.png" className="hero-img"/><div className="hero-btc-inner-div"><img src="https://storage.unocoin.com/resources/img/web/HomePageImages/homepage-btc.png" className="home-btc "/></div><div className="hero-eth-inner-div"><img src="https://storage.unocoin.com/resources/img/web/HomePageImages/homepage-eth.png" className="home-eth "/></div><div className="hero-inr-inner-div"><img src="https://storage.unocoin.com/resources/img/web/HomePageImages/homepage-inr.png" className="home-inr"/></div></div></div>
                      <input type="text" defaultValue={test}/>
                      <h1 className="App-title">Welcome to my web store</h1>
                  </header>
                  {/* Pass props twice */}
                  {/* <ProductList
                      cars={this.state.cars}
                      incrementCarPrice={this.incrementCarPrice}
                      decrementCarPrice={this.decrementCarPrice}
                  /> */}
                  {/* context Api */}
                  <ProductList/>
              </div>
            </MyProvider>
        );
    }
}