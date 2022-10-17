import React, { useState,Form } from "react";
import Login from "./Login";

function Registation() {
  const [Fname, setFname] = useState("");
  const[Lname,setLname]= useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[Conpassword,setConpassword]=useState("");
  const [phone, setPhone] = useState("");
  const [login, setLogin] = useState(true);
  const [flag, setFlag] = useState(false);
  const[err,seterr]=useState(false);
  const[lerr,setlerr]=useState(false);
  const[errpass,seterrpass]=useState(false);
  const[errcpass,seterrcpass]=useState(false);
  const[errphone,seterrphone]=useState(false);
  function handleFormSubmit(e) {
    e.preventDefault();
    if (!Fname || !Lname || !email || !password || !Conpassword||!phone) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("sanskarEmail", JSON.stringify(email));
      localStorage.setItem(
        "sanskarPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");
      setLogin(!login);
    }
  }
  return (
    <>
        <div>
          {login?(
            <form onSubmit={handleFormSubmit}>
              <h3>Register</h3>
              <div>
                <label> First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  name="name"
                  onChange={function print(event){
                    let item=event.target.value;
                    if(item.length<=2){
                    seterr(item)}
                else{
                    seterr("");
                }setFname(item)}}
                />
                 {err?<span>Not valid Fname </span>:""}
              </div>
              <div>
                <label> Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  name="name"
                  onChange={function Last(event){
                    let iteml=event.target.value;
                    if(iteml.length<=2){
                    setlerr(iteml)}
                else{
                    setlerr("");
                }setLname(iteml)}}
                />
                  {lerr?<span>Not valid Lname </span>:""}
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  onChange={function Pass(event){
                    let itempass=event.target.value;
                    if(itempass.length<=2){
                    seterrpass(itempass)}
                else{
                    seterrpass("");
                }setPassword(itempass)}}
                />
                 {errpass?<span>Not valid Password </span>:""}
              </div>
              <div>
                <label> Confirm Password</label>
                <input
                  type="conf password"
                  placeholder="Enter confirm password"
                  onChange={function Confpass(event){
                    let itemcpass=event.target.value;
                    if(itemcpass!==password){
                    seterrcpass(itemcpass)}
                else{
                    seterrcpass("");
                }setConpassword(itemcpass)}}
                />
                 {errcpass?<span> Not maches with password </span>:""}
              </div>
              <div>
                <label>Phone No.</label>
                <input
                  type="Phone"
                  placeholder="Enter contact no"
                  onChange={function Phone(event){
                    let itemph=event.target.value;
                    if(itemph.length!==10){
                        seterrphone(itemph)}
                    else{
                        seterrphone("");
                    }
                    setPhone(itemph);
                  }}
                />
                {errphone?<span>Not valid phonenumber </span>:""}
              </div>
              <button type="submit">
                Register
              </button>
              <span>{flag}</span>
            </form>
           
          ) : (
            <Login />
          )}
        </div>
    
    </>
  );
}
export default Registation;