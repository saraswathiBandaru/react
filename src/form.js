import React, { useState } from "react";

import './form.css';



export default function Registerform () {
  const[email,setEmail] = useState();
  const[password,setpassword]=useState();
  
const[emailError,setEmailError] = useState(false);
const[passwordError,setpasswordError]=useState(false);

const [repassError,setrepassError] = useState(false);

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const pass_reg_ex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
function handle_email(e){
     let email = e.target.value;
    
     if(!email.match(regex)){
            setEmailError(true)
     }
     else{
      setEmailError(false)
     }
     setEmail(email);
     console.log(email);
}
function handle_password(e){
  let password= e.target.value;
  if(!password.match(pass_reg_ex)){
    setpasswordError(true)
  }
  else{
    setpasswordError(false)
  }
  setpassword(password);
  console.log(password);

}
const handle_repassword=(e)=>{
  let repass=e.target.value;
  console.log(repass);
  if(!(password===repass)){
    setpasswordError(true);
  }
  else{
    setpasswordError(false);
  }
  setpassword(password);
  console.log(password);

}


const handle_submit = (e)=>{
  e.preventDefault () ;
  let email = e.target[0].value;
    
  if(!email.match(regex)){
         setEmailError(true)
  }
  else{
   setEmailError(false)
  }
  let password= e.target[1].value;
  if(!password.match(pass_reg_ex)){
    setpasswordError(true)
  }
  else{
    setpasswordError(false)
  }
  
  let repassword= e.target[2].value;
  if(password===repassword){
    setpasswordError(false);
  }
  else{
    setpasswordError(true);
  }
 
}
    return(
        <div>
             <form onSubmit={handle_submit}>
               <label>Email</label>
               <input type="email" placeholder="Enter email address" onChange={handle_email} />
               {
                emailError? <p style={{color:"red"}}>Please enter a valid email address</p> : <p></p>
               }
               <label>New Password</label>
               <input type="password" placeholder="Enter New password" onChange={handle_password}/>
               {
                passwordError? <p style={{color:"red"}}>Please Enter a valid password </p> : <p></p>
    }
               
    
                <label>Re-Enter password</label>
               <input placeholder="Re-Enter Your password " type="password" onChange={handle_repassword}/>
               {
                setpasswordError ? <p style={{color:"red"}}></p>:<p>Please check the password you have entered</p>
               }
               <input type="submit" style={{width:"4rem"}}/>
            

             </form>
          
             
        </div>
    )
}