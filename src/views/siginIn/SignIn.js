import axios from "axios";
import React from "react";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./signIn.scss";

class SignIn extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         username: "",
         password: "",
      };
   }
   shouldComponentUpdate(nextProps) {
      return this.props.isLoggedIn !== nextProps.isLoggedIn;
   }

   handleChange = (event, name) => {
      this.setState({ [name]: event.target.value });
   };

   handleSubmit = (e) => {
      e.preventDefault();

      const reqBody = { ...this.state };
      axios
         .post("https://fakestoreapi.com/auth/login", reqBody)
         .then((token) => {
            this.props.setIsLoggedIn({ isLoggedIn: true });
            localStorage.setItem("isLoggedIn", true);
         })
         .catch((err) => {
            toast.error(err.response.data, { theme: "dark" });
         });
   };

   render() {
      return (
         <div className="signIn-wrapper">
            {this.props.isLoggedIn ? <Navigate to="/" replace /> : ""}
            <ToastContainer />
            <div className="login-box">
               <h2>Login</h2>
               <form onSubmit={this.handleSubmit}>
                  <div className="user-box">
                     <input
                        type="text"
                        name="username"
                        onChange={(e) => {
                           this.handleChange(e, "username");
                        }}
                        required=""
                     />
                     <label>Username</label>
                  </div>
                  <div className="user-box">
                     <input
                        type="password"
                        name=""
                        required=""
                        onChange={(e) => {
                           this.handleChange(e, "password");
                        }}
                     />
                     <label>Password</label>
                  </div>
                  <button>Submit</button>
               </form>
            </div>
         </div>
      );
   }
}

export default SignIn;
