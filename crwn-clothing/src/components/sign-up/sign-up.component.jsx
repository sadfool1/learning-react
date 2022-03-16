import {React, useState} from "react";

const defaultFormFields = {
  displayName:  "",
  email: "",
  password: "",
  confirmPassword:  ""
}

const SignUp = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword} = formFields

  const handleChange = (e) => {
    e.preventDefault()

    const {name, value} = e.target;
    console.log({name,value});

    setFormFields({...formFields, [name]: value})

  }

  return (
  <div className="">

    <h1> Sign up with your email and password </h1>
    <form className="">
      <label className="">Display Name</label>
      <input type="text" value={displayName} name="displayName" onChange={handleChange} required />

      <label className="">Email</label>
      <input type="email" value={email} name="email" onChange={handleChange} required />

      <label className="">Password</label>
      <input type="password" value={password} name="password" onChange={handleChange} required />

      <label className="">Confirm Password</label>
      <input type="password" value={confirmPassword} name="confirmPassword" onChange={handleChange} required />

      <button type="submit">Sign Up</button>

    </form>
  </div>);

}

export default SignUp;
