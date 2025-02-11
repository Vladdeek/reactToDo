import React, { useState } from 'react'
import AddBtnIcon from '../img/addbtn.ico'
import CreateModal from './CreateModal'

const AddBtn = () => {
	const [showModal, setShowModal] = useState(false) // Состояние для модального окна
	// Функция для отображения модала
	const showCreateModal = () => {
		setShowModal(true)
	}
	// Функция для скрытия модала
	const hideCreateModal = () => {
		setShowModal(false)
	}

	return (
		<div className='addTaskButton col-lg-4 col-md-6 col-xs-12'>
			<div
				className='new d-flex justify-content-center align-items-center'
				onClick={showCreateModal}
			>
				<img className='add-icon' src={AddBtnIcon} alt='Add task' />
			</div>
			{showModal && <CreateModal hideCreateModal={hideCreateModal} />}
		</div>
	)
}

export default AddBtn
