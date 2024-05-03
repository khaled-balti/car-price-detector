import React from 'react'

const Heart = ({liked, setLiked}) => {
  return (
    <svg width="25" onClick={() => setLiked(!liked)} height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.12 20.81C12.78 20.93 12.22 20.93 11.88 20.81C8.98 19.82 2.5 15.69 2.5 8.69001C2.5 5.60001 4.99 3.10001 8.06 3.10001C9.88 3.10001 11.49 3.98001 12.5 5.34001C13.51 3.98001 15.13 3.10001 16.94 3.10001C20.01 3.10001 22.5 5.60001 22.5 8.69001C22.5 15.69 16.02 19.82 13.12 20.81Z" stroke={!liked && "#90A3BF"} fill={liked && '#ED3F3F'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default Heart