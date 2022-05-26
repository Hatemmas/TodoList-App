import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';
import TextFields from '@mui/icons-material';


const TodoCard = ({task, del, comp}) => {
  return (
    <div>
        <h2 className='taskCard' id={task.isDone? "completed":""}>{task.action}</h2>
        <Button variant='contained' startIcon={<DoneIcon />} onClick={()=> comp (task.id)} >Complete</Button>
        <Button variant="outlined" startIcon={<DeleteIcon />} color="error" onClick={()=> del (task.id)}  style={{marginLeft:20}}>Delete</Button>
    </div>
  )
}

export default TodoCard