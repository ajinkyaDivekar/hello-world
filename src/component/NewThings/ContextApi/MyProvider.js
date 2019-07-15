import React, { Component} from 'react';
import { MyContext} from './MyContext';


class MyProvider extends Component {
    state = {
        // name:name,
        cars: {
            car001: { name: 'Honda', price: 100 },
            car002: { name: 'BMW', price: 150 },
            car003: { name: 'Mercedes', price: 200 }
        }
    };

    render() {
      // const value = useContext(MyContext);
      // console.log(value,'MyContext');
        return (
            <MyContext.Provider
               
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

export default MyProvider;