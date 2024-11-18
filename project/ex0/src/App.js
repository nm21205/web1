import React  from 'react'
import './App.css'
import GroupComponent from './GroupComponent';

function App() {
	console.log('App 호출됨');
	return (
		<div className="box">
			<h1>App</h1>
			<GroupComponent />
		</div>
	);
}

export default React.memo(App);