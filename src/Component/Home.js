import React,{useEffect, useState} from 'react';
import axios from 'axios';
import './Component.css';
import Show from './Show';
import '../Nav_&_Sidebar/index.css'


function Home() {
    const [dates,setDate] = useState([]);
    const [slot,setSlot] = useState(
        {
            hour1 : "",
            minute1 : "",
            hour2 : "",
            minute2 : ""
        }
    );
    const [item,setItem] = useState('0');

    const apiData = async ()=>{
        const response = await axios.get('https://mentorplus.s3.ap-south-1.amazonaws.com/config/availability.json');
        setDate(response.data);
    }
    
    useEffect(()=>{
        apiData();
    },[]);

    return(
        <>
        <div className='container mt-5'>
        <h2 className='fs-3 fw-bold' >Book Demo session Slot</h2>
        <div className='d-flex'>
            <hr style={{color: '#08254d',backgroundColor: '#08254d',height: 4,width:50}}/>
            <hr style={{color: 'red',backgroundColor: 'red',height: 4,width:50}}/>
        </div>
        <h3 className='fs-4 fw-bold'>Select Date</h3>
        <div className='d-flex'>
        {
            dates.map((date,index)=>(
                <Show key={index} data={date} setSlot={setSlot} slot={slot} setItem={setItem} item={item}/>
            ))
        }
        </div>
        <h3 className='fs-4 fw-bold mt-4'>Select Date</h3>
        <div className='d-flex' >
            <div className='div2'  >
                {slot.minute1===0 ? `${slot.hour1} PM - ${slot.hour1+1} PM` : `${slot.hour1}:${slot.minute1} PM - ${slot.hour1+1}:${slot.minute1} PM`}
            </div>
            <div className='div2'>{slot.hour2} {'PM'} {'-'} {slot.hour2+1} {'PM'}</div>
        </div>
        <button type='button' className='btn pay-button fw-bold'>Proceed To Pay</button>

    </div>
        </>
    )
        }

export default Home