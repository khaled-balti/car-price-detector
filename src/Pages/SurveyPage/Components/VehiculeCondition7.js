import React, { useState } from 'react'
import classes from './VehiculeCondition7.module.css'
import Stepper from './Stepper'
const VehiculeCondition7 = ({setStep, step, infos, setInfos}) => {
    const [imported, setImported] = useState(1)
    const handleOwnershipChange = (e) => {
        setInfos({...infos, ownership: e.target.value})
    }
    const handleUsageChange = (e) => {
        setInfos({...infos, usage: e.target.value})
    }
  return (
    <div className='d-flex flex-column align-items-center'>
            <h4 className={`${classes.title} mx-5 mb-4 px-0 py-5`}>Vehicle Condition</h4>
            <Stepper step={step} />
            <div className='container-fluid px-5'>
                <div className='mb-3'>
                    <p className={classes.text}>Does the car belong to an individual or a company?</p>
                    <select className={classes.select} onChange={handleOwnershipChange}>
                        <option value="" disabled selected hidden>Choose car ownership</option>
                        <option value="individual">Individual</option>
                        <option value="company">Company</option>
                    </select>
                </div>
                <div className='mb-3'>
                    <p className={classes.text}>How was the car used before?</p>
                    <select className={classes.select} onChange={handleUsageChange}>
                        <option value="" disabled selected hidden>Select previous car usage</option>
                        <option value="transport">Transport</option>
                        <option value="personal">Personal</option>
                    </select>
                </div>
                <div className='container px-0'>
                    <p className={classes.text}>Is it an imported vehicle under 5 years ?</p>
                    <div className='row'>
                        <div className='col-6'>
                            <div onClick={() => {setImported(1); setInfos({...infos, imported: false})}} className={`col-12 d-flex align-items-center ${classes.cont} mb-3 ps-3`} style={{backgroundColor: imported === 1 && '#E7E9FF'}}>
                                <input type='radio' name='imported' checked={imported === 1} className={classes.radio} />
                                <p className={`me-3 ${classes.text}`}>No</p>
                            </div>
                        </div>
                        
                        <div className='col-6'>
                            <div onClick={() => {setImported(2); setInfos({...infos, imported: true})}} className={`col-12 d-flex align-items-center ${classes.cont} mb-3 ps-3`} style={{backgroundColor: imported === 2 && '#E7E9FF'}}>
                                <input type='radio' name='imported' checked={imported === 2} className={classes.radio} />
                                <p className={`me-3 ${classes.text}`}>Yes</p>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
            <div className={classes.line}></div>
            <div className='d-flex justify-content-between' style={{ width: '85%' }}>
                <button className={classes.prev} onClick={() => setStep(prev => prev - 1)}>Previous</button>
                <button className={classes.next} onClick={() => console.log(infos)}>Estimate</button>
            </div>
        </div>
  )
}

export default VehiculeCondition7