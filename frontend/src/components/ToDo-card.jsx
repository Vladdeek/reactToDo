import React, { useState } from 'react'

const ToDo = ({ color, taskText, delTask }) => {
	return (
		<div className='col-lg-4 col-md-6 col-xs-12' id='task2'>
			<div className='content' id={color}>
				<button className='del-btn text-center' onClick={delTask}>
					+
				</button>
				<div className='text'>
					<p className='task'>{taskText}</p>
				</div>
			</div>
		</div>
	)
}

export default ToDo
