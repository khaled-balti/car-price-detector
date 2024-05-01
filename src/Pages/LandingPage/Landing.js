import React, {useState, useEffect} from 'react'
import LandingCar from "../../images/landing car.png"
import Star from './Components/Star'
import Circle from './Components/Circle'
import Circle2 from './Components/Circle2'
import classes from './Landing.module.css'
import Underline from './Components/Underline'
import Location from './Components/Location'
import Questionnaire from './Components/Questionnaire'
import Estimation from './Components/Estimation'
import Footer from '../../UI/Footer'
import { Link } from 'react-router-dom'
const Landing = () => {
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
  return (
    <div className='container-fluid p-0 overflow-x-hidden' style={{backgroundColor: "#F5F5F5"}}>
        <div className='pt-1'>
            {width >= 1240 && <Star/>}    
            {width >= 1240 && <Circle/>}
            <div className='d-flex flex-column'>
                <div style={{maxWidth: '649px', position: width >= 1240 && 'absolute', top: '253px', left: '74px', marginTop: width < 1240 && '50px', marginLeft: width < 1240 && 'auto', marginRight: width < 1240 && 'auto', marginBottom: width < 1240 && '45px'}}>
                    <h1 className={classes.title} style={{textAlign: width < 1240 && 'center'}}>Find, estimate, and buy cars <span className='d-flex flex-column' style={{color: "#1572D3"}}>Easily{width >= 1240 && <Underline/>}</span></h1>
                </div>
                <div style={{maxWidth: width < 1240 ? '630px' : '559px', position: width >= 1240 && 'absolute', top: '570px', left: '74px', marginLeft: width < 1240 && 'auto', marginRight: width < 1240 && 'auto'}}>
                    <p className={classes.paragraph} style={{textAlign: width < 1240 && 'center'}}>Kindly fill out the questionnaire to obtain a customized quote for your property. You are encouraged to provide as much detail as necessary.</p>
                </div>
                <Link to="/survey" className='text-decoration-none'><button style={{width: '235px', height: '52px', position: 'absolute', left: width >= 1240 ? '199px' : '50%', top: width >= 1240 &&'750px', padding: '8px', borderRadius: "8px", backgroundImage: 'linear-gradient(to bottom, #1572D3, #0B3B6D)', color: "white", transform: width < 1240 && 'translateX(-50%)', marginRight: width < 1240 && 'auto'}}>Start Estimating</button></Link>
            </div>
            <img src={LandingCar} style={{width: '1048px', height: '537px', top: '428px', right: '-150px', display: width < 1240 && 'none', position: width >= 1240 && 'absolute'}} alt='error' />
        </div>
        <div className='d-flex flex-column align-items-center' style={{marginTop: '100px'}}>
            <button style={{width: '350px', height: '73px', border: '1px solid #1572D3', backgroundColor: "#1572D31A", color: "#1572D3" ,marginBottom: '100px'}}>HOW IT WORK</button>
            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-6 col-sm-4 d-flex flex-column justify-content-between align-items-center'>
                        <div className='d-flex justify-content-center align-items-center' style={{backgroundColor: '#1572D31A', width: '112px', height: '112px', borderRadius: '16px'}}>
                            <Location/>
                        </div>
                        <h5>Specification</h5>
                        <p className={`text-black-50 ${classes.text}`} style={{maxWidth: '126px'}}>Specify your car's characteristics</p>
                    </div>
                    <div className='col-6 col-sm-4 d-flex flex-column justify-content-between align-items-center' style={{height: '221px'}}>
                        <div className='d-flex justify-content-center align-items-center' style={{backgroundColor: '#1572D31A', width: '112px', height: '112px', borderRadius: '16px'}}>
                            <Questionnaire/>
                        </div>
                        <h5>Questionnaire</h5>
                        <p className={`text-black-50 ${classes.text}`} style={{maxWidth: '233px'}} >Fill out a questionnaire to assess your car's condition.</p>
                    </div>
                    <div className='col-6 col-sm-4 d-flex flex-column justify-content-between align-items-center' style={{height: '221px'}}>
                        <div className='d-flex justify-content-center align-items-center' style={{backgroundColor: '#1572D31A', width: '112px', height: '112px', borderRadius: '16px'}}>
                            <Estimation/>
                        </div>
                        <h5>Estimation</h5>
                        <p className={`text-black-50 ${classes.text}`} style={{maxWidth: '276px'}}>Receive an estimate of your car's price with the option to evaluate it.</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Landing