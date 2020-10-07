import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }

  handleSubmit = e => {
      e.preventDefault()
      const newPerson = {
          firstName: this.state.firstName,
          lastName: this.state.lastName
      }
      const newArrWithData = [...this.state.submittedData, newPerson ]
      this.setState({
          submittedData: newArrWithData
      })

  }

  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
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

  render() {
    console.log(this.state.submittedData)

    return (
        <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
        <input type="submit" value="Click Me"/>
      </form>
      {this.listOfSubmissions()}
      </div>
    )
  }
}

export default Form;