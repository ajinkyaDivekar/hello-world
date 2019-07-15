import React, { Component } from 'react';
import UseState from './useUstate';
import UseContext from './UseContext';
import UseReducer from './UseReducer';
import UseMemo from './UseMemo';

export default class ExploreHooks extends Component {
	render() {
		return (
			<div>
				<div>
					<p>UseState & UseEffect</p>
					<UseState />
				</div>
				<hr />
				<div>
					<p>UseContext</p>
          <UseContext />
				</div>
				<hr />
				<div>
					<p>Use Reducer</p>
          <UseReducer />
				</div>
				<hr />
				<div>
					<p>Use memo</p>
          <UseMemo />
				</div>
				<hr />
			</div>
		);
	}
}
