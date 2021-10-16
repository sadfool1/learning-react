import React from "react";
const AuthContext = React.createContext({
  isLoggedIn: false,
}); // creates a context object

export default AuthContext;
