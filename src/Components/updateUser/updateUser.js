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

    };
  return (
    <div>
      <h1>User Update</h1>
    </div>
  )
}

export default updateUser
