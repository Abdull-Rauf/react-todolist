import React, { useState } from 'react';
import FormComponent from './components/Form'
import TaskList from './components/TaskList'
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState('');

  const onHandleChange = e => {

    setValue(e.target.value)

  }

  const onHandleSubmit = e => {

    e.preventDefault();

    const newTask = value;

    if (newTask !== '') {

      setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }])

      setValue('')
      console.log(tasks);


    }




  }
  const onHandleDelete = (index) => {
    const filteredTasks = tasks.filter((task, i) => i !== index);
    setTasks(filteredTasks)

  }

  const toggleComplete = (id) => {

    tasks.map(task => {
      if (task.id == id) {

        task.completed = !task.completed

      }
    })
    setTasks([...tasks])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List App</h1>
      </header>
      <div className='main'>
        <FormComponent handleChange={onHandleChange} userInput={value} handleSubmit={onHandleSubmit} />
        <TaskList items={tasks} handleDelete={onHandleDelete} toggleComplete={id => toggleComplete(id)} />
      </div>
    </div>
  );
}

export default App;
