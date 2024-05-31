import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login(){
    const [email, setEmail] = React.useState('');
    const [error, setError] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const [process, setProcess] = React.useState('Login');
    const navigate = useNavigate();
    
    React.useEffect(() => {
      const email = localStorage.getItem('email');
      if (!email) {
        setProcess('Signup')
      }
    })
    
    const verify = async(e) => {
      e.preventDefault();
        if (email === "" || password === "") {
          setError(true)
          setTimeout(() => {
            setError(false)
          }, 1500)
        } else {
        const res = await axios.post('http://localhost:7000/signup', { user_name: email, password  });
        const data = await res.data;
        console.log(data)
        if (data.message === "Success") {
            localStorage.setItem('user_name', email);
            localStorage.setItem('password', password)
            navigate('/home')
        }
      }
    }
    
    return (
        <>
        <Navbar/>
      <div className='w-[100%] h-[90vh] flex flex-col z-20 mt-10'>
          <div className='md:h-[80%] h-[100%]'>
            <form className='flex flex-col space-y-16 w-[100%] h-[80%] justify-center items-center' onSubmit={verify}>
              <div className='font-extrabold text-[50px] text-purple-700'>{process}</div>
              <div className='flex flex-col space-y-3 w-[100%] justify-center items-center '>
                <input id='email' type='text' value={email} placeholder='Your Username' className='w-[30%] h-10 focus:outline-none px-5 bg-white placeholder:text-black rounded-md focus:border-[3px] border-purple-500 text-xl' onChange={(e) => setEmail(e.target.value)} autoComplete='off'/>
                <input id='password' type='text' value={password} placeholder='Your Password' className='w-[30%] h-10 focus:outline-none bg-white px-5 placeholder:text-black rounded-md focus:border-[3px] border-purple-500 text-xl' onChange={(e) => setPassword(e.target.value)} autoComplete='off'/>
              </div>
              <button type='submit' className='text-white bg-purple-700 w-[30%] rounded-[50px] hover:bg-purple-600 text-xl py-2'>Submit</button>
            {
              error && <div className='text-[30px]'>Invalid Credentials</div>
            }
          </form>
          </div>
      </div>
        </>
    )
}
