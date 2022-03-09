import React from "react";
import "./sign-in.styles.scss"

class SignIn extends React.Component {


  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: '', password: ''})
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({[name]: value})
  }

  render() {
    return (
      <div className="sign-in">
        <h2 className=""> </h2>
        <span className=""> Sign in with your email and password </span>

        <form clasName="" onSubmit={this.handleSubmit}>
          <input
            clasName=""
            type="email"
            name="email"
            value={this.state.email}
            required
            onChange={this.handleChange}

          />
          <label> Email </label>
          <input
            clasName=""
            type="password"
            name="password"
            value={this.state.email}
            onChange={this.handleChange} required />
          <label> Password</label>
          <input type="submit" value="Submit Form" />

        </form>

       </div>
    )
  }
}

export default SignIn;
