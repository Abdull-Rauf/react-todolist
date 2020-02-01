import React from 'react';
import { Input, Button } from 'antd'

export default function FormComponent(props) {

  return (
    <div className='form'>
      <form onSubmit={(event) => props.handleSubmit(event)}>
        <Input size="large" type='text' placeholder='Add Task' onChange={(event) => props.handleChange(event)} value={props.userInput} />
        <Button size="large" type="primary">
          Add Task
        </Button>
      </form>
    </div>
  )

}
