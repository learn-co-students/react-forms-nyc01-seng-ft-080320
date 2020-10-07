import e from 'express';
import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  // handleSubmit = event => {
  //   event.preventDefault()
  //   let formData = {
  //     firstName: this.state.firstName,
  //     lastName: this.state.lastName
  //   }
  //   this.sendFormDataSomewhere(formData)
  // }

  render() {
    return (
      <form onSubmit = {event => this.handleSubmit(event)}>
        <input 
          type="text" 
          name="firstName" 
          onChange={event => this.props.handleChange(event)} 
          value={this.props.formData} />
        <input 
          type="text" 
          name="lastName" 
          onChange={event => this.props.handleChange(event)} 
          value={this.props.formData} />
      </form>
    )
  }
}

export default Form;
