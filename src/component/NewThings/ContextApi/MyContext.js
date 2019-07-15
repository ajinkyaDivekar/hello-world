import React from 'react';

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore

export const MyContext = React.createContext({
  myValue:'test'
});

// export default MyContext;