import React from 'react'
import { ErrorState } from '../types'

type Props = {
  alerts: ErrorState
}

const Toast = ({alerts}: Props) => {
  console.log(alerts)
  return (
    <div className='fixed right-0 z-10 flex gap-y-2 flex-col top-0'>
      {alerts.errors.map((err, index)=>
        <div key={index} className=" px-4 py-1  block">
          {err.msg}
          <span className='bg-green-500 h-[2px] w-full absolute bottom-0 left-0'></span>
          </div>
      )}
    </div>
  )
}

export default Toast