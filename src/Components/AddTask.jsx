import React, { Component } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import SvgIcon from '@mui/material/SvgIcon'
import {Button} from "@mui/material"

export default class AddTask extends Component {

    state = {
        newText : "",
    }

    handleChange = (e) => this.setState({newText:e.target.value})
    handleSubmit = (e) => {
        e.preventDefault()
        this.state.newText.trim() === "" ? alert("Field is empty") :
        this.props.add(this.state.newText)
        this.setState({ newText: ""})
    }
  render() {
    return (
      <div>
          <h1 className='appName'>Just Do it.</h1>
          <form onSubmit={this.handleSubmit} style={{marginLeft:80}}>
              <TextField 
              className='textField'
              type="text" 
              label="Add a new Task" 
              value={this.state.newText} 
              onChange={this.handleChange} />

              <button
              style={{marginLeft: 30}} 
              className='addBtn'
              aria-label="add"
              onClick={()=>this.handleSubmit}>
                <AddIcon style={{color:"white"}} />
              </button>
          </form>
      </div>
    )
  }
}
