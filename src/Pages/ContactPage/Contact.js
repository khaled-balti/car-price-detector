import React from 'react'
import classes from './Contact.module.css'
import Location from './Components/Location'
import Phone from './Components/Phone'
import Send from './Components/Send'
import Globe from './Components/Globe'
const Contact = () => {
  return (
    <div className={classes.container}>
      <div className={`${classes.whitediv}`}>
        <div className='container-fluid p-5'>
          <h5 className={classes.title}>Get in touch</h5>
          <div className='container'>
            <div className='row'>
              <div className='col-6'>
                <div className='col-12'>
                  <input type='text' placeholder='Name' className={`w-100 ${classes.input} ps-2 mb-4`} />
                </div>
              </div>
              <div className='col-6'>
                <div className='col-12'>
                  <input type='text' placeholder='Email' className={`w-100 ${classes.input} ps-2 mb-4`} />
                </div>
              </div>
            </div>
          </div>
            <div className='container'>
              <input type='text' placeholder='Subject' className={`w-100 ${classes.input} ps-2 mb-4`}  />
            </div>
            <div className='container'>
              <textarea className='w-100 ps-2' placeholder='Message' style={{height: '200px', maxHeight: '210px'}}></textarea>
            </div>
          </div>
          <div className='container' style={{paddingLeft: '55px'}}>
            <button className={classes.button}>Send message</button>
          </div>
        </div>
      <div className={classes.bluediv}>
        <div className='container-fluid p-5 text-white'>
          <h5 className={`${classes.title} mb-5`} style={{color: 'white'}}>Contact Us</h5>
          <div className='d-flex mb-4'>
            <span className='me-4 d-flex justify-content-center align-items-center' style={{width: '65px', height: '50px', borderRadius: '50%', backgroundColor: '#1587d3'}}><Location/></span>
            <p className='fs-4'><span className='fw-bold'>Address:</span> 198 West 21th street, Suite New York NY 10016</p>
          </div>
          <div className='d-flex mb-4'>
            <span className='me-4 d-flex justify-content-center align-items-center' style={{width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#1587d3'}}><Phone/></span>
            <p className='fs-4'><span className='fw-bold'>Phone:</span> + 1235 2355 98</p>
          </div>
          <div className='d-flex mb-4'>
            <span className='me-4 d-flex justify-content-center align-items-center' style={{width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#1587d3'}}><Send/></span>
            <p className='fs-4'><span className='fw-bold'>Email:</span> info@yoursite.com</p>
          </div>
          <div className='d-flex'>
            <span className='me-4 d-flex justify-content-center align-items-center' style={{width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#1587d3'}}><Globe/></span>
            <p className='fs-4'><span className='fw-bold'>Website:</span> yoursite.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact