import React from 'react';
import { Icon } from 'antd'


export default function TaskList(props) {


  const tasks = props.items;



  const tasksList = tasks.map((task, index) => {

    const liStyle = {

      textDecoration: task.completed && "line-through",
      color: task.completed && "#ccc",
      margin: '0px'

    }





    return (
      task.title !== '' &&
      <div className='listItem' key={index} >

        <input style={{ margin: '5px 10px 0 0', padding: '5px', zoom: '1' }} type='checkbox' onChange={() => props.toggleComplete(task.id)}></input>
        <li><h3 style={liStyle}>{task.title}</h3></li>
        <Icon type="edit" style={{
          fontSize: '25px',
          color: 'green',
          marginTop: '10px',
          marginLeft: '10px',
          cursor: 'pointer'
        }} />
        <Icon onClick={() => props.handleDelete(index)}
          type="delete" style={{
            fontSize: '25px',
            color: 'red',
            marginTop: '10px',
            marginLeft: '10px',
            cursor: 'pointer'
          }} />

      </div>

    )
  })


  return (
    <ul>
      {tasksList}
    </ul>
  )

}
