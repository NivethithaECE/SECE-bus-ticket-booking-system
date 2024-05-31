import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Card({ props }) {
  const navigate = useNavigate();
  console.log(props);
  return (
    <div 
    className='h-[300px] p-5 w-[350px] space-y-5 flex flex-col border-2 transition-transform ease-out delay-100 hover:bg-gradient-to-b hover:text-white from-purple-500 to-purple-300 border-purple-500 hover:shadow-2xl hover:scale-105'
    onClick={() => navigate(`/book/${props.bus_no}`, { state: props})}
    > 
        <div>Bus.No: {props.bus_no}</div>
        <div className='flex justify-around'>
          <div className='flex space-x-2'>
            <img src='/location.svg' className='h-5' />
            <div>From: {props.from}</div>
          </div>
          <div className='flex space-x-2'>
            <img src='/location.svg' className='h-5' />
            <div>To: {props.to}</div>
          </div>
        </div>
        <div>Seats Available: {props.seats}</div>
        <div className='flex justify-start items-center'>
          <img src='/clock.svg' className='h-5 px-2' />
          <div>Departure: {props.departure_time}</div>
        </div>
        <div className='flex justify-start items-center'>
          <img src='/clock.svg' className='h-5 px-2' />
          <div>Arrival: {props.arrival_time}</div>
        </div>
    </div>
  )
}
