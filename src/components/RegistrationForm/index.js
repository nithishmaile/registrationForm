// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFirstNameEmpty: false,
    isLastNameEmpty: false,
    isFirstAndLastNamesEmpty: true,
  }

  onClickSubmit = event => {
    const {firstName, lastName} = this.state
    event.preventDefault()
    if (firstName === '') {
      this.setState({isFirstNameEmpty: true})
    }
    if (lastName === '') {
      this.setState({isLastNameEmpty: true})
    } else {
      this.setState({isFirstAndLastNamesEmpty: false})
    }
  }

  onChangeFirstName = event => {
    if (event.target.value === '') {
      this.setState({isFirstNameEmpty: true})
    } else {
      this.setState({firstName: event.target.value, isFirstNameEmpty: false})
    }
  }

  onChangeLastName = event => {
    if (event.target.value === '') {
      this.setState({isLastNameEmpty: true})
    } else {
      this.setState({lastName: event.target.value, isLastNameEmpty: false})
    }
  }

  onClickAnotherResponse = () => {
    this.setState({isFirstAndLastNamesEmpty: true})
  }

  renderFormContainer = () => {
    const {isFirstNameEmpty, isLastNameEmpty} = this.state
    const firstNameRequiredText = isFirstNameEmpty && 'Required'
    const secondNameRequiredText = isLastNameEmpty && 'Required'
    return (
      <form className="form-container" onSubmit={this.onClickSubmit}>
        <label htmlFor="firstName" className="label-heading">
          FIRST NAME
        </label>
        <input
          type="text"
          placeholder="First name"
          id="firstName"
          className="input-container"
          onBlur={this.onChangeFirstName}
        />
        <p className="required-heading">{firstNameRequiredText}</p>
        <label htmlFor="lastName" className="label-heading">
          LAST NAME
        </label>
        <input
          type="text"
          placeholder="First name"
          id="lastName"
          className="input-container"
          onBlur={this.onChangeLastName}
        />
        <p className="required-heading">{secondNameRequiredText}</p>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  renderSuccessResponse = () => (
    <div className="successResponse-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p className="successResponse-heading">Submitted Successfully</p>
      <button
        type="submit"
        onClick={this.onClickAnotherResponse}
        className="anotherSubmit-button"
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isFirstAndLastNamesEmpty} = this.state

    return (
      <div className="bg-container">
        <h1 className="registrationForm-heading">Registration</h1>
        <div className="registrationForm-container">
          {isFirstAndLastNamesEmpty
            ? this.renderFormContainer()
            : this.renderSuccessResponse()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
