import React, { useState } from 'react'
import classes from './VehiculeCondition5.module.css'
import Stepper from './Stepper'
const VehiculeCondition5 = ({setStep, step, setInfos, infos}) => {
    const [lights, setLights] = useState(1)
    const [suspensions, setSuspensions] = useState(1)
    const [brakes, setBrakes] = useState(1)
  return (
    <div className='d-flex flex-column align-items-center'>
            <h4 className={`${classes.title} mx-5 mb-4 px-0 py-5`}>Vehicle Condition</h4>
            <Stepper step={step} />
            <div className='container-fluid px-5'>
            <div className='container px-0'>
                    <p className={classes.text}>Are warning lights always on your car's dashboard?</p>
                    <div className='row'>
                        <div className='col-6'>
                            <div onClick={() => {setLights(1); setInfos({...infos, lights: false})}} className={`col-12 d-flex align-items-center ${classes.cont} mb-3 ps-3`} style={{backgroundColor: lights === 1 && '#E7E9FF'}}>
                                <input type='radio' name='lights' checked={lights === 1} className={classes.radio} />
                                <p className={`me-3 ${classes.text}`}>No</p>
                            </div>
                        </div>
                        
                        <div className='col-6'>
                            <div onClick={() => {setLights(2); setInfos({...infos, lights: true})}} className={`col-12 d-flex align-items-center ${classes.cont} mb-3 ps-3`} style={{backgroundColor: lights === 2 && '#E7E9FF'}}>
                                <input type='radio' name='lights' checked={lights === 2} className={classes.radio} />
                                <p className={`me-3 ${classes.text}`}>Yes</p>
                            </div>
                        </div>
                    </div>    
                </div>
                <div className='container px-0'>
                    <p className={classes.text}>Are the suspensions working perfectly?</p>
                    <div className='row'>
                        <div className='col-6'>
                            <div onClick={() => {setSuspensions(1); setInfos({...infos, suspensions: false})}} className={`col-12 d-flex align-items-center ${classes.cont} mb-3 ps-3`} style={{backgroundColor: suspensions === 1 && '#E7E9FF'}}>
                                <input type='radio' name='suspensions' checked={suspensions === 1} className={classes.radio} />
                                <p className={`me-3 ${classes.text}`}>No</p>
                            </div>
                        </div>
                        
                        <div className='col-6'>
                            <div onClick={() => {setSuspensions(2); setInfos({...infos, suspensions: true})}} className={`col-12 d-flex align-items-center ${classes.cont} mb-3 ps-3`} style={{backgroundColor: suspensions === 2 && '#E7E9FF'}}>
                                <input type='radio' name='suspensions' checked={suspensions === 2} className={classes.radio} />
                                <p className={`me-3 ${classes.text}`}>Yes</p>
                            </div>
                        </div>
                    </div>    
                </div>
                <div className='container px-0'>
                    <p className={classes.text}>Do the brakes work perfectly?</p>
                    <div className='row'>
                        <div className='col-6'>
                            <div onClick={() => {setBrakes(1); setInfos({...infos, brakes: false})}} className={`col-12 d-flex align-items-center ${classes.cont} mb-3 ps-3`} style={{backgroundColor: brakes === 1 && '#E7E9FF'}}>
                                <input type='radio' name='brakes' checked={brakes === 1} className={classes.radio} />
                                <p className={`me-3 ${classes.text}`}>No</p>
                            </div>
                        </div>
                        
                        <div className='col-6'>
                            <div onClick={() => {setBrakes(2); setInfos({...infos, brakes: true})}} className={`col-12 d-flex align-items-center ${classes.cont} mb-3 ps-3`} style={{backgroundColor: brakes === 2 && '#E7E9FF'}}>
                                <input type='radio' name='brakes' checked={brakes === 2} className={classes.radio} />
                                <p className={`me-3 ${classes.text}`}>Yes</p>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
            <div className={classes.line}></div>
            <div className='d-flex justify-content-between' style={{ width: '85%' }}>
                <button className={classes.prev} onClick={() => setStep(prev => prev - 1)}>Previous</button>
                <button className={classes.next} onClick={() => setStep(prev => prev + 1)}>Next</button>
            </div>
        </div>
  )
}

export default VehiculeCondition5