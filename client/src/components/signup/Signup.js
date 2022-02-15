import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import "./signup.css"

export const Signup = () => {
    
    const history = useHistory();

    const [user, setUser] = useState({
        name:"", email:"", phone:"", password:"", cpassword:""
    });

    let name, value;

    const handleInputs = (e) => {
            console.log(e);
            name = e.target.name;
            value = e.target.value;
            
            setUser({ ...user, [name]:value});
    }

    const postData = async (e) =>{
        e.preventDefault();

        const { name, email, phone, password, cpassword  } = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body:JSON.stringify({
            name, email, phone, password, cpassword
            })
        });
        const data = await res.json();

        if(data.status === 422 || !data ){
            window.alert("Invalid Registration")
            console.log("Invalid Registration");
        }else{
            window.alert("Registration Successfull")
            console.log("Registration Successfull");

            history.push("/login");
        }
    }

    return (
        <>
      <div className="container">
          <h1 className="text-center">Sign Up</h1>
      <form method="POST">
      <div className="mb-3">
    <label for="Name" className="form-label">Name</label>
    <input name="name" type="name" className="form-control" id="Name" autoComplete="on" placeholder="Your Name" value={user.name}
    onChange={handleInputs} required/>
  </div>
  <div className="mb-3">
    <label for="Email" className="form-label">Email</label>
    <input name="email" type="email" className="form-control" id="Email" autoComplete="on" placeholder="Your Email" value={user.email}
    onChange={handleInputs} required />
  </div>
  <div className="mb-3">
    <label for="Phone" className="form-label">Phone</label>
    <input name="phone" type="mobile" className="form-control" id="Phone" autoComplete="on" placeholder="Phone" value={user.phone}
    onChange={handleInputs} required />
  </div>
  <div className="mb-3">
    <label for="Password" className="form-label">Password</label>
    <input type="password" name="password" className="form-control" id="Password" autoComplete="on" placeholder="Password" value={user.password}
    onChange={handleInputs} required/>
  </div>
  <div className="mb-3">
    <label for="cPassword" className="form-label">Confirm Password</label>
    <input type="password" name="cpassword" className="form-control" id="cPassword" autoComplete="on" placeholder="Confirm Password" value={user.cpassword}
    onChange={handleInputs} required/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="Check"/>
    <label className="form-check-label" for="Check">Terms & Conditions*</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={postData}>Register</button>
</form>
      </div>
        </>
    )
}
