import React, { useState } from 'react'
import ToDo from './components/ToDo-card'
import AddBtn from './components/Add-btn'
import CreateModal from './components/CreateModal'

const App = () => {
	const [showModal, setShowModal] = useState(false)

	//функция для показа и скрытия модального окна
	const showCreateModal = () => setShowModal(true)
	const hideCreateModal = () => setShowModal(false)

	const colors = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6']
	const [tasks, setTasks] = useState([])

	// Функция для добавления задачи
	const addTask = newTask => {
		setTasks([...tasks, { taskText: newTask }])
	}
	// Функция для удаления задачи
	const delTask = taskText => {
		setTasks(tasks.filter(task => task.taskText !== taskText))
	}

	return (
		<div className='container todo-con'>
			<div className='row todo-row'>
				{tasks.map((task, index) => (
					<ToDo
						key={index}
						color={colors[index % colors.length]}
						taskText={task.taskText}
						delTask={() => delTask(task.taskText)} // передаем функцию удаления в ToDo
					/>
				))}
				<AddBtn showCreateModal={showCreateModal} />
			</div>

			{showModal && (
				<CreateModal hideCreateModal={hideCreateModal} addTask={addTask} />
			)}
		</div>
	)
}

export default App
