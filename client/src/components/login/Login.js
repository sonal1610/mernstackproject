import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router';
import { UserContext } from '../../App';

export const Login = () => {

   const { state, dispatch } = useContext(UserContext);

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userLogin = async (e) => {
        e.preventDefault();

      const res = await fetch("/signin", {
        method:"POST",
        headers: {"Content-type": "application/json"},
        body:JSON.stringify({
            email, password
        })
      });

      const data = res.json();

      if(res.status === 400 || !data){
        window.alert("Invalid Credentials")
        console.log("Invalid Credentials");
    }else{
        dispatch({type:"USER", payload:true})
        window.alert("Login Successfull")
        console.log("Login Successfull");

        history.push("/");
      }
      
    }

    return (
        <>
          <div className="container">
              <h1>Login</h1>
              <form method="POST">
  <div className="mb-3">
    <label for="Email" className="form-label">Email</label>
    <input type="email" name="email" className="form-control" id="Email" autoComplete="off" 
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Your Email" required />
  </div>
  <div className="mb-3">
    <label for="Password" className="form-label">Password</label>
    <input type="password" name="password" className="form-control" id="Password" autoComplete="off" 
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Your Password" required />
  </div>
  <button type="submit" className="btn btn-primary" onClick={userLogin}>Login</button>
</form>
          </div>
        </>
    )
}
