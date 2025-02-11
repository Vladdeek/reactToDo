import React, { useState } from 'react'

const ToDo = ({ color, taskText }) => {
	const [statusColor, setStatusColor] = useState('var(--status-color1)')

	const handleStatusClick = () => {
		setStatusColor(prevColor =>
			prevColor === 'var(--status-color1)'
				? 'var(--status-color2)'
				: 'var(--status-color1)'
		)
	}

	return (
		<div className='col-lg-4 col-md-6 col-xs-12' id='task2'>
			<div className='content' id={color}>
				<button className='del-btn text-center'>+</button>
				<div className='text'>
					<p className='task'>{taskText}</p>
				</div>
				<div
					className='status'
					style={{ backgroundColor: statusColor }}
					onClick={handleStatusClick}
				></div>
			</div>
		</div>
	)
}

export default ToDo
