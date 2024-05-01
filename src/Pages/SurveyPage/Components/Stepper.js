import React from 'react'

const Stepper = ({step}) => {
  return (
    <svg width="433" height="50" viewBox="0 0 433 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24.5" cy="24" r="21" stroke="#3563E9" stroke-width="6"/>
        <ellipse cx="24.5" cy="24" rx="10" ry="10" fill="#3563E9"/>
        <rect x="48.5" y="22" width="80" height="4" fill={step >= 4 ? "#3563E9" : "#D6D9DF"}/>
        <circle cx="152.5" cy="24" r="21" stroke={step >= 4 ? "#3563E9" : "#D6D9DF"} stroke-width="6"/>
        <ellipse cx="152.5" cy="24" rx="10" ry="10" fill={step >= 4 ? "#3563E9" : "#D6D9DF"}/>
        <rect x="176.5" y="22" width="80" height="4" fill={step >= 8 ? "#3563E9" : "#D6D9DF"}/>
        <circle cx="280.5" cy="24" r="21" stroke={step >= 8 ? "#3563E9" : "#D6D9DF"} stroke-width="6"/>
        <ellipse cx="280.5" cy="24" rx="10" ry="10" fill={step >= 8 ? "#3563E9" : "#D6D9DF"}/>
        <rect x="304.5" y="22" width="80" height="4" fill={step === 12 ? "#3563E9" : "#D6D9DF"}/>
        <circle cx="408.5" cy="24" r="21" stroke={step === 12 ? "#3563E9" : "#D6D9DF"} stroke-width="6"/>
        <ellipse cx="408.5" cy="24" rx="10" ry="10" fill={step === 12 ? "#3563E9" : "#D6D9DF"}/>
    </svg>
  )
}

export default Stepper