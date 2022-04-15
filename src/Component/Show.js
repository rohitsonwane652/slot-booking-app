import React from 'react'
import moment from 'moment'
import './Component.css'

function Show({data,setSlot,slot}) {
  const setValue = ()=>{
    setSlot({...slot,hour1:data.available[0].hour,minute1:data.available[0].min,hour2:data.available[1].hour,minute2:data.available[1].min});
  }

  return (
      <>
    <div className='py-2 div1' onClick={setValue}>
        <p>{moment(data.date).format("ddd")}</p>
        <p className='fs-3 date-class'>{moment(data.date).format("D")}</p>
        <p>{moment(data.date).format("MMMM")}</p>
    </div>
    </>
  )
}


export default Show 