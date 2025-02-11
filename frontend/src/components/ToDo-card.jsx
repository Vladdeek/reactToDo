import React from 'react'

const ToDo = ({ color, taskText }) => {
	return (
		<div className='col-lg-4 col-md-6 col-xs-12' id='task2'>
			<div className='content' id={color}>
				<button className='del-btn text-center'>+</button>
				<div className='text'>
					<p className='task'>{taskText}</p>
				</div>
				<div
					className='status'
					style={{ backgroundColor: 'var(--status-color1)' }}
				></div>
			</div>
		</div>
	)
}

export default ToDo
