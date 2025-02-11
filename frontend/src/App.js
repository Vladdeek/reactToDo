import React from 'react'
import ToDo from './components/ToDo-card'
import AddBtn from './components/Add-btn'

const App = () => {
	return (
		<div className='container todo-con'>
			<div className='row todo-row'>
				<ToDo />
				<AddBtn />
			</div>
		</div>
	)
}

export default App
