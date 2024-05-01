import React from 'react'

const Circle = ({width}) => {
  return (
    <svg className='position-absolute' width="580" height="866" viewBox="0 0 580 866" fill="none" xmlns="http://www.w3.org/2000/svg" style={{left: '50%', zIndex: 2, transform: 'translateX(-50%) translateY(-100px) rotate(90deg)'}}>
        <g opacity="0.13" clip-path="url(#clip0_107_519)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M430.838 737.17C391.78 737.17 354.425 729.741 320.162 716.153L197.182 796.664C264.446 840.538 344.708 866 430.838 866C590.101 866 729.171 778.949 803.565 649.547L692.7 585.101C640.391 676.024 542.713 737.17 430.838 737.17Z" fill="#1572D3"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M143.613 110.543L270.253 433.031L143.613 755.456L343.574 624.531L636.228 433.031L343.574 241.469L143.613 110.543Z" fill="#1572D3"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M430.84 128.83C542.715 128.83 640.392 189.975 692.701 280.899L803.567 216.452C729.11 87.0508 590.102 0 430.84 0C344.646 0 264.447 25.4613 197.121 69.3359L320.164 149.847C354.427 136.259 391.718 128.83 430.84 128.83Z" fill="#1572D3"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M95.1488 703.962L153.831 555.004L201.913 432.968L153.831 310.995L95.1488 162.038C35.9617 236.199 0.5 330.425 0.5 433.032C0.5 535.575 35.9617 629.801 95.1488 703.962Z" fill="#1572D3"/>
        </g>
        <defs>
          <clipPath id="clip0_107_519">
            <rect width="803" height="866" fill="white" transform="translate(0.5)"/>
          </clipPath>
        </defs>
      </svg>
  )
}

export default Circle