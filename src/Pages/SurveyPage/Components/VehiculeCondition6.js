import React, {useState} from 'react'
import classes from './VehiculeCondition6.module.css'
import Stepper from './Stepper'
const VehiculeCondition6 = ({setStep, step, infos, setInfos}) => {
    const [motor, setMotor] = useState(1)
    const [steering, setStearing] = useState(1)
    const [gearbox, setGearbox] = useState(1)
  return (
    <div className='d-flex flex-column align-items-center'>
            <h4 className={`${classes.title} mx-5 mb-4 px-0 py-5`}>Vehicle Condition</h4>
            <Stepper step={step} />
            <div className='container-fluid px-5'>
            <div className='container px-0'>
                    <p className={classes.text}>Does the motor work perfectly?</p>
                    <div className='row'>
                        <div className='col-6'>
                            <div onClick={() => {setMotor(1); setInfos({...infos, motor: false})}} className={`col-12 d-flex align-items-center ${classes.cont} mb-3 ps-3`} style={{backgroundColor: motor === 1 && '#E7E9FF'}}>
                                <input type='radio' name='motor' checked={motor === 1} className={classes.radio} />
                                <p className={`me-3 ${classes.text}`}>No</p>
                            </div>
                        </div>
                        
                        <div className='col-6'>
                            <div onClick={() => {setMotor(2); setInfos({...infos, motor: true})}} className={`col-12 d-flex align-items-center ${classes.cont} mb-3 ps-3`} style={{backgroundColor: motor === 2 && '#E7E9FF'}}>
                                <input type='radio' name='motor' checked={motor === 2} className={classes.radio} />
                                <p className={`me-3 ${classes.text}`}>Yes</p>
                            </div>
                        </div>
                    </div>    
                </div>
                <div className='container px-0'>
                    <p className={classes.text}>Does the steering system work perfectly?</p>
                    <div className='row'>
                        <div className='col-6'>
                            <div onClick={() => {setStearing(1); setInfos({...infos, stearing: false})}} className={`col-12 d-flex align-items-center ${classes.cont} mb-3 ps-3`} style={{backgroundColor: steering === 1 && '#E7E9FF'}}>
                                <input type='radio' name='steering' checked={steering === 1} className={classes.radio} />
                                <p className={`me-3 ${classes.text}`}>No</p>
                            </div>
                        </div>
                        
                        <div className='col-6'>
                            <div onClick={() => {setStearing(2); setInfos({...infos, stearing: true})}} className={`col-12 d-flex align-items-center ${classes.cont} mb-3 ps-3`} style={{backgroundColor: steering === 2 && '#E7E9FF'}}>
                                <input type='radio' name='steering' checked={steering === 2} className={classes.radio} />
                                <p className={`me-3 ${classes.text}`}>Yes</p>
                            </div>
                        </div>
                    </div>    
                </div>
                <div className='container px-0'>
                    <p className={classes.text}>Does the gearbox work perfectly?</p>
                    <div className='row'>
                        <div className='col-6'>
                            <div onClick={() => {setGearbox(1); setInfos({...infos, gearboxCond: false})}} className={`col-12 d-flex align-items-center ${classes.cont} mb-3 ps-3`} style={{backgroundColor: gearbox === 1 && '#E7E9FF'}}>
                                <input type='radio' name='gearbox' checked={gearbox === 1} className={classes.radio} />
                                <p className={`me-3 ${classes.text}`}>No</p>
                            </div>
                        </div>
                        
                        <div className='col-6'>
                            <div onClick={() => {setGearbox(2); setInfos({...infos, gearboxCond: true})}} className={`col-12 d-flex align-items-center ${classes.cont} mb-3 ps-3`} style={{backgroundColor: gearbox === 2 && '#E7E9FF'}}>
                                <input type='radio' name='gearbox' checked={gearbox === 2} className={classes.radio} />
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

export default VehiculeCondition6