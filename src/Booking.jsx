import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function Booking() {

  const location = useLocation();
  const [price,setPrice] = useState(location.state.cost);
  const [amount, setAmount] = useState(1);

  const navigate = useNavigate();

  const increase = () => {
    setAmount(prev => prev + 1);
    setPrice(location.state.cost * amount)
  }

  const reduce = () => {
    if (amount !== 1) {
      setAmount(prev => prev - 1);
    }
  }
  
  useEffect(() => {

    if(!localStorage.getItem('user_name')) {
      navigate('/')
    }
    setPrice(location.state.cost * amount)
  }, [amount])

  const book = async() => {
    const { bus_no, seats, cost, departure_time, arrival_time, from, to } = location.state;
    const user_name = localStorage.getItem('user_name')
    if (bus_no && seats && cost && departure_time && arrival_time && from && to) {
        const res = await axios.post('http://localhost:7000/', { bus_no, seats: amount, cost, departure_time, arrival_time, from, to, user_name });
        const data = res.data;
        if (data.book) {
          alert('Tickets Booked');
          navigate('/home')
        }
    } 
  }

  return (
    <div className='flex flex-col'>
     <Navbar/>
     {
        location.state &&
      <div className='h-[90vh] w-screen flex text-2xl'>
      <div className='h-[100%] w-[100%] flex justify-center items-center'>
        <div className='relative h-[80%] w-[60%] space-y-10 p-10 border-2 border-purple-500'>
        <div>Bus.No: {location.state.bus_no}</div>
        <div className='flex justify-around'>
          <div className='flex space-x-2 items-center'>
            <img src='/location.svg' className='h-5' />
            <div>From: {location.state.from}</div>
          </div>
          <div className='flex space-x-2 items-center'>
            <img src='/location.svg' className='h-5' />
            <div>To: {location.state.to}</div>
          </div>
        </div>
        <div>Seats Available: {location.state.seats}</div>
        <div className='flex items-center space-x-2'>
          <img src='/clock.svg' className='h-5' />
          <div>Departure: {location.state.departure_time}</div>
        </div>
        <div className='flex items-center space-x-2'>
          <img src='/clock.svg' className='h-5' />
          <div>Arrival: {location.state.arrival_time}</div>
        </div>
        <div className='flex justify-between'>Booked Seats: 
          <div className='flex space-x-20'>
            <div className='cursor-pointer' onClick={reduce}>-</div><div>{amount}</div><div className='cursor-pointer' onClick={increase}>+</div>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 h-20 w-[100%] border-t-2 border-purple-300 flex justify-between items-center px-36'>
          <div>Total: {price}</div>
          <div className='px-5 py-2 bg-purple-700 rounded-md hover:bg-purple-600 cursor-pointer text-white' onClick={book}>Book</div>
        </div>
        </div>
      </div>
     </div>
    }
    </div>
  )
}
