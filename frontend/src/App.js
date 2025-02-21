import React, { useState, useEffect } from 'react'
import ToDo from './components/ToDo-card'
import AddBtn from './components/Add-btn'
import CreateModal from './components/CreateModal'

const App = () => {
	const [showModal, setShowModal] = useState(false)
	const colors = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6']
	const [tasks, setTasks] = useState([])

	// Функция для загрузки задач из FastAPI
	useEffect(() => {
		const fetchTodos = async () => {
			try {
				const response = await fetch(`http://localhost:8000/alltodo/`)
				const todos = await response.json()

				// Обновляем состояние tasks
				setTasks(
					todos.map(todo => ({
						taskText: todo.title,
						id: todo.id,
					}))
				)
			} catch (error) {
				console.error('Ошибка загрузки задач:', error)
			}
		}

		fetchTodos()
	}, []) // [] означает, что эффект сработает только при первом рендере

	//функция для показа и скрытия модального окна
	const showCreateModal = () => setShowModal(true)
	const hideCreateModal = () => setShowModal(false)

	// Функция для добавления задачи
	const addTask = async newTaskText => {
		try {
			let response = await fetch(`http://127.0.0.1:8000/todo/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ title: newTaskText }),
			})

			if (response.ok) {
				let newTask = await response.json()

				// Добавляем задачу в state с полученным id
				setTasks(prevTasks => [
					...prevTasks,
					{ taskText: newTask.title, id: newTask.id },
				])
			} else {
				console.error('Ошибка при добавлении задачи')
			}
		} catch (error) {
			console.error('Ошибка запроса:', error)
		}
	}

	const delTask = async id => {
		try {
			let response = await fetch(`http://127.0.0.1:8000/todo/${id}`, {
				method: 'DELETE',
				headers: { accept: 'application/json' },
			})

			if (response.ok) {
				console.log(`Задача с id ${id} удалена`)

				// Убираем удалённую задачу из состояния
				setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
			} else {
				let errorData = await response.json()
				console.error('Ошибка: ' + errorData.detail)
			}
		} catch (error) {
			console.error('Ошибка запроса:', error)
		}
	}

	return (
		<div className='container todo-con'>
			<div className='row todo-row'>
				{tasks.map((task, index) => (
					<ToDo
						key={index}
						color={colors[index % colors.length]}
						taskText={task.taskText}
						delTask={() => delTask(task.id)} // передаём id в функцию удаления
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
