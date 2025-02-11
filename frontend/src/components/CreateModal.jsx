import React from 'react'

const CreateModal = ({ hideCreateModal }) => {
	return (
		<div className='createTask-modal'>
			<div className='screen' onClick={hideCreateModal}></div>
			<div className='container'>
				<div className='row'>
					<div className='col-12 d-flex justify-content-center'>
						<form className='create-task' action=''>
							<input className='input-task' type='text' placeholder='Задача' />
							<input
								type='submit'
								className='save'
								onclick='saveTask()'
								value='Создать'
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CreateModal
