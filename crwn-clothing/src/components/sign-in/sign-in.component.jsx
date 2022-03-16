import React from "react";
import "./sign-in.styles.scss"
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
import { signInWithGoogle } from "../../firebase/firebase.utils"
import SignUp from "../sign-up/sign-up.component"

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

        <form className="" onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            required
            label="email"
            handleChange={this.handleChange}

          />
          <FormInput
            type="password"
            name="password"
            label="password"
            value={this.state.email}
            handleChange={this.handleChange} required />

          <div className="buttons">
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in  with Google </CustomButton>
          </div>

        </form>
        <SignUp />
       </div>
    )
  }
}

export default SignIn;
