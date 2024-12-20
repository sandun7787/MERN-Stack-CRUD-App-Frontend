import React, { useState } from 'react'
import Nav from './Nav/Nav'
import {useNavigate} from "react-router"

const newUswe = () => {
  const history = useNavigate();
  const [inputs,setinputs] = useState({
    name:"",
    gmail:"",
    age:"",
    address:"",

  })

  const handleChange =(e)=>{
    setinputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,
    }));
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(()=>history('userdetails'))
  }

  const sendRequest=async()=>{
    await axios.post('' ,{

    name:String(inputs.name),
    gmail:String(inputs.gmail),
    age:number(inputs.age),
    address:String(inputs.address),

    }).then(res => res.data);
  }
  return (
    <div>
        <Nav/>
        <h1>add user</h1>
        <form onSubmit={handleSubmit}>
          <label>name</label>
          <br/>
          <input type="text" onChange={handleChange} name="name" value={inputs .name} required></input>
          <br></br>
          <label>gmail</label>
          <input type="gmail" name="gmail" onChange={handleChange}  value={inputs .gmail} required> </input>
          <br>
          </br>
          <label>age</label>
          <input type="age" name="age" onChange={handleChange} required value={inputs .age}> </input>
          <br>
          </br>
          <label>address</label>
          <input type="address" name="address" onChange={handleChange} required value={inputs .address}> </input>
          <br>
          </br>

        </form>

      
    </div>
  )
}

export default newUswe
