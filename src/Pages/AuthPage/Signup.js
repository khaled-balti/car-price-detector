import React, { useEffect, useState } from 'react'
import classes from './Signup.module.css'
import Goutte1 from '../../images/signupim.png'
import Goutte2 from '../../images/signupim2.png'
import { Link } from 'react-router-dom'
import Enveloppe from './Components/Enveloppe'
import EyeClosed from './Components/EyeClosed'
import EyeOpen from './Components/EyeOpen'
import Phone from './Components/Phone'
const Signup = () => {
  const [type, setType] = useState("password")
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  const handleShowPassword = () => {
    setType(prevState => prevState === "password" ? "text" : "password")
  }
  return (
    <div className={`${classes["interface-container"]} overflow-hidden`}>
      {width > 1270 && <div className={classes["white-div"]}>
        <div className={`${classes["blue-div"]}`} style={{height: '100%', borderBottomRightRadius: '20%'}}>
          <img src={Goutte1} alt='error' className={classes.image1} />
          <img src={Goutte2} alt='error' className={classes.image2} />
        </div>
      </div>}
      <div className={classes["blue-div"]}>
        <div className={`d-flex flex-column justify-content-center`} style={{height: '100%', borderTopLeftRadius: width > 1270 && '20%', paddingLeft: width > 1270 && '130px', backgroundColor: width > 1270 ? "white" : "#1572D31A"}}>
          <div className={`container ${width <= 1270 && 'd-flex flex-column justify-content-center align-items-center pt-2'}`} style={{backgroundColor: width <= 1270 && "#f5f5f5", width: width <= 1270 && "500px", height: width <= 1270 && "90vh", borderRadius: '10px'}}>
            <h2 style={{fontSize: '24px', fontWeight: 700}} className='mb-2'>Signup</h2>
            <p style={{width: '400px', height: '58px', fontWeight: 400, fontSize: '20px', marginBottom: '25px'}}>Please create an account to access our online resources.</p>
            <form className={`p-0 m-0 ${width <= 1270 && 'd-flex flex-column justify-content-center'}`}>
              <div className='container-fluid mx-0 mb-2 d-flex justify-content-center' style={{width: '400px'}}>
                <div className='row justify-content-between'>
                    <div className='col-6 px-0' style={{width: '48%'}}>
                        <p className={classes.label}>First name</p>
                        <div className={classes.inputdiv}>
                          <input name="text" placeholder='Enter your firstName' required type="text" className={classes.input} />
                        </div>
                    </div>
                    <div className='col-6 px-0' style={{width: '48%'}}>
                        <p className={classes.label}>Last name</p>
                        <div className={classes.inputdiv}>
                          <input name="text" placeholder='Enter your lastName' required type="text" className={classes.input} />
                        </div>
                    </div>
                </div>
              </div>
              <p className={classes.label}>E-mail</p>
              <div className={`${classes.contact} mb-2`}>
                <input name="email" placeholder='Enter your email' required type="email" className={classes.contactinput} />
                <span style={{cursor: 'pointer'}}><Enveloppe/></span>
              </div>
              <p className={classes.label}>Password</p>
              <div className={`${classes.contact} mb-2`}>
                <input name="password" placeholder='Enter your password' required type={type} className={classes.contactinput} />
                <span style={{cursor: 'pointer'}} onClick={handleShowPassword}>{type === "password" ? <EyeClosed/> : <EyeOpen/>}</span>
              </div>
              <p className={classes.label}>Phone number</p>
              <div className={`${classes.contact} mb-2`}>
                <input name="phone" placeholder='Enter your phone number' required type="text" className={classes.contactinput} />
                <span style={{cursor: 'pointer'}}><Phone/></span>
              </div>
            <div className='container-fluid mx-0 mb-2 px-0 d-flex justify-content-center' style={{width: '400px'}}>
                    <div className='px-0' style={{width: '50%'}}>
                        <p className={classes.label}>Governorat</p>
                        <select className={classes.select}>
                          <option>one</option>
                          <option>one</option>
                          <option>one</option>
                        </select>
                    </div>
                    <div className='px-0' style={{width: '50%'}}>
                        <p className={classes.label}>City</p>
                        <select className={classes.select}>
                          <option>one</option>
                          <option>one</option>
                          <option>one</option>
                        </select>
                    </div>
              </div>
            <button type='submit' className={`my-3 ${classes.button}`}>Signup</button>
          </form>
          <p className='text-center' style={{width: '400px'}}>Already have an account? <Link to="/login" end className='text-primary text-decoration-none' ><span className='text-primary' >Login</span></Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup