import React from 'react'
import AddBtnIcon from '../img/addbtn.ico'

const AddBtn = () => {
	return (
		<div className='addTaskButton col-lg-4 col-md-6 col-xs-12'>
			<div
				className='new d-flex justify-content-center align-items-center'
				onclick='showCreateModal()'
			>
				<img className='add-icon' src={AddBtnIcon} alt='...' />
			</div>
		</div>
	)
}

export default AddBtn
