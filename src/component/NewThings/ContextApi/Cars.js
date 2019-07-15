import React, {Fragment} from 'react';
import {MyContext} from './MyContext';
import Car from './Car';


// without context
/* const Cars = props => {
  return (
    <Fragment>
        <h4>Cars:</h4>
       
        {Object.keys(props.cars).map(carID => (
            <Car
                key={carID}
                name={props.cars[carID].name}
                price={props.cars[carID].price}
                incrementPrice={() => props.incrementCarPrice(carID)}
                decrementPrice={() => props.decrementCarPrice(carID)}
            />
        ))}
    </Fragment>
);
} */

class Cars extends React.Component {
  render() {
    console.log(this.context,'Car');
    
    return(
        <div>
   {/*  <MyContext.Consumer>
        {(context, name) => (
          console.log(name,'theme'),
          
            <Fragment>
                <h4>Cars:</h4>
                {Object.keys(context.cars).map(carID => (
                  console.log(context.myValue,carID),
                  
                    <Car
                        key={carID}
                        name={context.cars[carID].name}
                        price={context.cars[carID].price}
                        incrementPrice={() => context.incrementPrice(carID)}
                        decrementPrice={() => context.decrementPrice(carID)}
                    />
                ))}
            </Fragment>
        )}
    </MyContext.Consumer> */}
    HIii
    </div>
)
  }
};
Cars.contextType = MyContext;
export default Cars;