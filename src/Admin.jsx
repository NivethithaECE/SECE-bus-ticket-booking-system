import React, { useState } from 'react'
import Navbar from './components/Navbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Admin() {

  const [no, setNo] = useState('');
  const [price, setPrice] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');

  const navigate = useNavigate()

  const register = async() => {
    const res = await axios.post('http://localhost:7000/admin', { departure_time: departure, arrival_time: arrival, from, to, cost: Number(price), bus_no: no });
    const data = await res.data;
    if (data.newBus) {
      navigate('/home')
    }
  }

  return (
    <div>
      <Navbar/>
      <div className='h-[90vh] w-screen flex'>
          <div className='w-[100%] h-[100%]'>
            <div className='h-[100%] w-[100%] flex justify-center items-center'>
              <div className='relative h-[90%] w-[100%] md:w-[60%] space-y-7 md:space-y-10 p-5 md:p-10 border-2 border-purple-500'>
              <div className='w-[100%] text-center text-purple-500 text-2xl font-bold h-16'>Enter Bus Details</div>
              <div>Bus.No: <input value={no} type='text' placeholder='Enter No' className='focus:outline-0 focus:border-2 px-3 py-2 text-lg focus:border-purple-500' onChange={(e) => setNo(e.target.value)} /></div>
              <div className='md:flex justify-around'>
                <div className='flex space-x-2 items-center'>
                  <img src='/location.svg' className='h-5' />
                  <div>From: <input value={from} type='text' placeholder='Enter Starting Place' className='focus:outline-0 focus:border-2 px-3 py-2 text-lg focus:border-purple-500' onChange={(e) => setFrom(e.target.value)} /></div>
                </div>
                <div className='flex space-x-2 items-center'>
                  <img src='/location.svg' className='h-5' />
                  <div>To: <input value={to} type='text' placeholder='Enter Destination' className='focus:outline-0 focus:border-2 px-3 py-2 text-lg focus:border-purple-500' onChange={(e) => setTo(e.target.value)} /></div>
                </div>
              </div>
              <div>Price: <input value={price} type='text' placeholder='Enter Ticket Price' className='focus:outline-0 focus:border-2 px-3 py-2 text-lg focus:border-purple-500' onChange={(e) => setPrice(e.target.value)} /></div>
              <div className='flex items-center space-x-2'>
                <img src='/clock.svg' className='h-5' />
                <div>Departure: <input value={departure} type='text' placeholder='Enter Departure Time' className='focus:outline-0 focus:border-2 px-3 py-2 text-lg focus:border-purple-500' onChange={(e) => setDeparture(e.target.value)} /></div>
              </div>
              <div className='flex items-center space-x-2'>
                <img src='/clock.svg' className='h-5' />
                <div>Arrival: <input value={arrival} type='text' placeholder='Enter Arrival Time' className='focus:outline-0 focus:border-2 px-3 py-2 text-lg focus:border-purple-500' onChange={(e) => setArrival(e.target.value)} /></div>
              </div>
              <div className='absolute bottom-0 left-0 h-20 w-[100%] border-t-2 border-purple-300 flex justify-center items-center px-10 md:px-44'>
                <div className='w-[400px] md:w-[300px] text-center md:px-5 py-2 text-xl bg-purple-700 rounded-md hover:bg-purple-600 cursor-pointer text-white' onClick={register}>Register Bus</div>
              </div>
              </div>
            </div>
          </div>
          </div> 
      </div>
  )
}
