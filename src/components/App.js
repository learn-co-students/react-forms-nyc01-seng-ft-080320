import React, { Component } from 'react'
import Form from './Form.js'
import DisplayData from './DisplayData.js';

export default class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             firstName: '',
             lastName:'',
        }
    }


  handleChange = event => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
    
    render() {
        return (
            <div>
                <Form 
                    handleChange = {this.handleChange}
                    formData = {this.state}
                />
                <DisplayData formData = {this.state} />
            </div>
        )
    }
}
