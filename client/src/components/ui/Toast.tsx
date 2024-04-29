import React from 'react'
import { ToastState } from '../../store/types'

type Props = {
  alerts: ToastState
}

const Toast = ({alerts}: Props) => {
  console.log(alerts)
  return (
    <div className='fixed right-0 z-10 flex gap-y-2 flex-col top-0'>
      {alerts.toasts.map((t, index)=>
        <div key={index} className=" px-4 py-1  block">
          {t}
          <span className='bg-green-500 h-[2px] w-full absolute bottom-0 left-0'></span>
          </div>
      )}
    </div>
  )
}

export default Toast