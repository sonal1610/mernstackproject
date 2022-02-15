import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

export const About = () => {

    const history = useHistory();
    const [userData, setUserData] = useState({});

    const callAboutPage = async () =>{
        try{
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials:"include"
            });

            const data = await res.json();
            console.log(data);
            setUserData(data);

            if(!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        }catch(err){
            console.log(err);
            history.push('/login');
        }
    }

    useEffect(() => {
       callAboutPage();
    }, []);

    return (
        <>
           <div className="container">
               <form method="GET">
                   <div className="row mt-3">
                       <div className="col-md-6">
                           <label>Name</label>
                       </div>
                       <div className="col-md-6">
                           <p> { userData.name } </p>
                       </div>
                   </div>
                   <div className="row mt-3">
                       <div className="col-md-6">
                           <label>Email</label>
                       </div>
                       <div className="col-md-6">
                          
                           <p> { userData.email } </p>
                       </div>
                   </div>
                   <div className="row mt-3">
                       <div className="col-md-6">
                           <label>Phone</label>
                       </div>
                       <div className="col-md-6">
                           <p>{ userData.phone }</p>
                       </div>
                   </div>
               </form>
           </div>
        </>
    )
}
