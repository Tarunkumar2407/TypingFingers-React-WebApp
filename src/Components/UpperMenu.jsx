import React from 'react'
import { useTestMode } from '../Context/TestModeContext'


const UpperMenu = ({countDown}) => {

    const {setTestTime} = useTestMode();

    const handleUpdateTime = (e) => {
        setTestTime(Number(e.target.id));
    }

  return (
    <div className='upper-menu'>
      <div className='countDown'>{countDown}</div>
      <div className='modes'>
        <div className='time-mode' id={15} onClick={handleUpdateTime}>15s</div>
        <div className='time-mode' id={30} onClick={handleUpdateTime}>30s</div>
        <div className='time-mode' id={60} onClick={handleUpdateTime}>60s</div>

      </div>
    </div>
  )
}

export default UpperMenu
