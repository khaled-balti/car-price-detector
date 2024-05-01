import React, { useEffect, useState } from 'react'
import classes from './Login.module.css'
import GoutteLogin from '../../images/goutte login 1.png'
import Gclass from '../../images/gclass1.png'
import GoogleSvg from './Components/GoogleSvg'
import EyeOpen from './Components/EyeOpen'
import {Link} from 'react-router-dom'
import EyeClosed from './Components/EyeClosed'
const Login = () => {
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
    setType(prevType => prevType === "password" ? "text" : "password");
  };
  
  return (
    <div className={classes["interface-container"]}>
      {width > 1270 && <div className={classes["white-div"]}>
        <div className={`${classes["blue-div"]} d-flex justify-content-center align-items-center`} style={{height: '100%', borderBottomRightRadius: '20%'}}>
          <img src={GoutteLogin} alt='error' className={classes.image1} />
          <img src={Gclass} alt='error' className={classes.image2} />
        </div>
      </div>}
      <div className={classes["blue-div"]}>
        <div className={`d-flex flex-column justify-content-center`} style={{height: '100%', borderTopLeftRadius: width > 1270 && '20%', paddingLeft: width > 1270 && '130px', backgroundColor: width > 1270 ? "white" : "#1572D31A"}}>
          <div className={`container ${width <= 1270 && 'd-flex flex-column justify-content-center align-items-center pt-2'}`} style={{backgroundColor: width <= 1270 && "#f5f5f5", width: width <= 1270 && "500px", height: width <= 1270 && "90vh", borderRadius: '10px'}}>
            <h2 style={{fontSize: '24px', fontWeight: 700}} className='mb-4'>Login</h2>
            <p className={classes.message}>Nice to see you again. Please log in to your account.</p>
            <form>
            <p className={classes.label}>E-mail</p>
            <input name="email" required placeholder='Enter your email' className={classes.inputdiv} />
            <p className={classes.label}>Password</p>
            <div style={{ backgroundColor: "#eaeaea", width: '400px', borderRadius: '10px',paddingRight: '10px'}}>
              <input name="password" placeholder='Enter your password' required type={type} className={classes.inputdiv1} />
              <span style={{cursor: 'pointer'}} onClick={handleShowPassword}>{type === "password" ? <EyeClosed/> : <EyeOpen/>}</span>
            </div>
            <p className='text-primary' style={{textAlign: 'end', width: '400px'}}>Forgot Password?</p>
            <button type='submit' className={`${classes.button} my-3`} style={{backgroundImage: 'linear-gradient(to right, #1572D3, #0B3B6D)'}}>Login</button>
          </form>
          <hr style={{backgroundColor: '#eff', width: '400px'}}/>
          <button type='submit' className={`${classes.button} mt-3`} style={{backgroundColor: '#333'}}><GoogleSvg/>&nbsp;&nbsp;Log in with <span style={{fontWeight: 'bold'}}>google</span></button>
          <p className='text-center' style={{width: '400px'}}>Don’t have an account? <Link to="/signup" end className='text-primary text-decoration-none'><span className='text-primary' >Sign-up now</span></Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login