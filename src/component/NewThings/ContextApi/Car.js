import React,{Fragment,useContext} from 'react';
import { MyContext } from "./MyContext";

const Car = (props) => {
    const value = useContext(MyContext);
    return(
    <Fragment>
        <p>Name: {props.name}</p>
        <p>Price: ${props.price}</p>
        <button onClick={props.incrementPrice}>&uarr;</button>
        <button onClick={props.decrementPrice}>&darr;</button>
    </Fragment>
    )
  }

export default Car;