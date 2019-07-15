// useFetch.js
import React, { useState, useReducer } from 'react';
const UseReducersAction = (state, action) => {

	// const [ items, dispatch ] = useReducer((state, action) => {
	console.log(action, 'value');
		switch (action.type) {
			case 'add':
				return [
					...state,
					{
						id: state.length,
						name: action.name
					}
				];
        case 'remove':
        // keep every item except the one we want to remove
        return state.filter((_, index) => index != action.index);
			default:
				return state;
		}
	};

/* 	return {
		items,
		dispatch
	}; */


export default UseReducersAction;
