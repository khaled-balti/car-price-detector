import React, { useState } from 'react'
import classes from './VehiculeCondition3.module.css'
import Stepper from './Stepper'
const VehiculeCondition3 = ({setStep, step, infos, setInfos}) => {
    const [maintenance, setMaintenance] = useState(1)
  return (
    <div className='d-flex flex-column align-items-center'>
            <h4 className={`${classes.title} mx-5 mb-4 px-0 py-5`}>Vehicle Condition</h4>
            <Stepper step={step} />
            <div className='container-fluid px-5'>
                <div className='mb-3'>
                    <p className={classes.text}>Oil consumption</p>
                    <select className={classes.select} >
                        <option value="" disabled selected hidden>Oil consumption</option>
                        <option value="good">Good</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                <div className='container px-0'>
                    <p className={classes.text}>Maintenance</p>
                    <div className='row'>
                        <div className='col-6'>
                            <div onClick={() => {setMaintenance(1)}} className={`col-12 d-flex align-items-center ${classes.cont} mb-3 ps-3`} style={{backgroundColor: maintenance === 1 && '#E7E9FF'}}>
                                <input type='radio' name='maintenance' checked={maintenance === 1} className={classes.radio} />
                                <p className={`me-3 ${classes.text} d-flex align-items-center mt-3`} style={{height: '100%'}}>Regular maintenance by the manufacturer</p>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div onClick={() => {setMaintenance(2)}} className={`col-12 d-flex align-items-center ${classes.cont} mb-3 ps-3`} style={{backgroundColor: maintenance === 2 && '#E7E9FF'}}>
                                <input type='radio' name='maintenance' checked={maintenance === 2} className={classes.radio}  />
                                <p className={`me-3 ${classes.text} d-flex align-items-center mt-3`} style={{height: '100%'}}>Regular maintenance</p>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div onClick={() => {setMaintenance(3)}} className={`col-12 d-flex align-items-center ${classes.cont} mb-3 ps-3`} style={{backgroundColor: maintenance === 3 && '#E7E9FF'}}>
                                <input type='radio' name='maintenance' checked={maintenance === 3} className={classes.radio} />
                                <p className={`me-3 ${classes.text} d-flex align-items-center mt-3`} style={{height: '100%'}}>Irregular maintenance</p>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div onClick={() => {setMaintenance(4)}} className={`col-12 d-flex align-items-center ${classes.cont} mb-3 ps-3`} style={{backgroundColor: maintenance === 4 && '#E7E9FF'}}>
                                <input type='radio' name='maintenance' checked={maintenance === 4} className={classes.radio} />
                                <p className={`me-3 ${classes.text} d-flex align-items-center mt-3`} style={{height: '100%'}}>No maintenance documented</p>
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

export default VehiculeCondition3