import React from 'react'
import axios from 'axios'
import react,{useEffect,useState} from 'react'
import {useParams} from 'react-router'
import { useNavigate } from 'react-router'

const updateUser = () => {

    const [input , setinputs] = useState({});
    const history = useNavigate();
    const id =useParams().id;


    useEffect(()=>{
        const fethHandler = async ()=>{
            await axios
            .get('http://localhost:5000/user/${id}')
            .then((res)=>res.data)
            .then((data)=> setinputs(data.user));
        };
        fethHandler();

    },[id]);

    const sendRequest =async()=>{
        await axios
        .put('http://localhost:5000/users'),{
            name:String(inputs.name),
            gmail:String(inputs.gmail),
            age:Number(inputs,age),
            adddress:String(inputs,adddress),
        }

        .then((res)=>res.data);

    };

    const handleChange =(e)=>{
        setinputs((preveStaet)=>({
            ...preveStaet,
            [e.target.name]:e.target.value,
        }));
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(inputs);
        sendRequest() . then(()=>
        history("/userDetails"));
    }
  return (
    <div>
        <div>Update User Details</div>
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

export default updateUser
