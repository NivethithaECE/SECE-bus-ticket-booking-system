import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
  
  const [data, setData] = useState([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  useEffect(() => {
    getData()
  }, []);

  const getData = async () =>{
    const res = await axios.get('http://localhost:7000/getBuses');
    const data = await res.data;
    setData(data?.data);
  }

  return (
    <div className='h-[100vh] w-[100vw] flex flex-col overflow-hidden'>
    <Navbar/>
    <div className='h-[90vh] w-[100%] flex py-2'>
    <div className='h-[100%] w-[100%] py-5 px-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center items-center cursor-pointer space-y-5 overflow-y-scroll'>
      {
        data && 
        data.map((element, index) => {
          return <Card key={index} props={element} />
        })
      }
      </div>
    </div>
    </div>
  )
}

export default App
