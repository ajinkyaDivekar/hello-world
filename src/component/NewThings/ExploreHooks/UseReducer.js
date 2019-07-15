import React, { useRef, useReducer} from 'react';
import UseReducersAction from './useReducerAction'
const UseReducer = () => {
  const inputRef = useRef();
  // const data = UseReducersAction();
  const [ items, dispatch ] = useReducer(UseReducersAction,[]) 
  
  const handleSubmit = (e) => {
      e.preventDefault();
     dispatch({
        type: 'add',
        name: inputRef.current.value
      });
     
      // console.log(UseReducersAction(),'UseReducersAction');
      
     /*  data.dispatch({
        type: 'add',
        name: inputRef.current.value
      }); */
      inputRef.current.value = '';
    }
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input ref={inputRef} />
        </form>
        <ul>
          {items.map((item, index) => (
            <li key={item.id}>
              {item.name}
              <button
                onClick={() => dispatch({ type: 'remove', index })}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </>
    );
}

export default UseReducer